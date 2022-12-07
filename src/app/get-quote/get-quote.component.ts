import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent implements OnInit {

  getqutoform!:FormGroup;
  submitted = false;
 attachment:any;
  filename: any;
  getquoteData:any;

  constructor(private formBuilder:FormBuilder, private apiservice:ServiceService,  private toastr: ToastrService, private http:HttpClient) { 
    this.getqutoform = this.formBuilder.group({
      name: ['', Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      about_comapny: ['', Validators.required],
      about_project: ['', Validators.required],
      budget: ['', Validators.required],
      check:  ['', Validators.required],
      file:  ['', Validators.required],
      checkArray: this.formBuilder.array([])
    });
    this.getpageData()
  }

  getpageData(){
    this.http.get("/assets/metatags/getquote-component.json").subscribe(res => {
      this.getquoteData = res;
    })
  }

  onCheckboxChange(event:any) {
    const checkArray: FormArray = this.getqutoform.get('checkArray') as FormArray;
    if (event.target.checked) {
      checkArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item:any) => {
        if (item.value == event.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  ngOnInit(): void {
  }

  get f() {
    return this.getqutoform.controls;
  }
  selectfile(event:any){
  let file=event.target.files[0];
   this.attachment=file;
   this.filename=file.name;
  }


  onSubmit() {
    this.submitted = true;
    if (this.getqutoform.invalid) {
      setTimeout(() => {
        this.submitted = false;
      }, 300);
      return;
    }
    let values = this.getqutoform.value;
    const formData = new FormData()
    formData.append("name",values.name);
    formData.append("email",values.email);
    formData.append("phone",values.phone);
    formData.append("about_comapny",values.about_comapny);
    formData.append("about_project",values.about_project);
    formData.append("project_type",values.checkArray);
    formData.append("budget",values.budget);
    formData.append("attachment",this.attachment);
    this.apiservice.sendQuoteData(formData).then((res: any) => {
      setTimeout(() => {
        this.submitted = false;
      }, 300);
      if (res.status) {
        this.toastr.success(res.message);
        this.getqutoform.reset();
      } else {
        this.toastr.error(res.message)
      }
    },error=>{
      setTimeout(() => {
        this.submitted = false;
      }, 300);
      this.getqutoform.reset();
    });
  }
}
