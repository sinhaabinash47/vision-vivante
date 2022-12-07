import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ServiceService } from '../service/service.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactform!: FormGroup;
  submitted = false;
  contactData:any;
  isNextDisabled=true

  constructor(private apiservice: ServiceService, private title: Title, private meta: Meta, private formBuilder: FormBuilder, private http: HttpClient,
    private toastr: ToastrService) {
    this.contactform = this.formBuilder.group({
      name: ['', Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message: ['', Validators.required]
    });
    this.getpageData()
  }

  getpageData() {
    this.http.get("/assets/metatags/contact-component.json").subscribe(res => {
      this.contactData = res;
    })
  }

  ngOnInit(): void {
    let data = this.apiservice.seodata.find((res: any) => res.page == 'Contact');
    if (data) {
      this.title.setTitle(data.title);
      data.tags.forEach((tag: any) => {
        this.meta.updateTag({ name: tag.name, content: tag.content })
      });
    }
  }

  get f() {
    return this.contactform.controls;
  }

    onSubmit() {
    this.submitted = true;
    if (this.contactform.invalid) {  
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
      return;
    }
      
      this.apiservice.sendData(this.contactform.value).then((res: any) => {
        setTimeout(() => {
          this.submitted = false;
        }, 3000);
        if (res.status) {
          this.toastr.success(res.message);
          this.contactform.reset();
        } else {
          this.toastr.error(res.message)
        }
      }, error => {
        setTimeout(() => {
          this.submitted = false;
        }, 3000);
        this.toastr.error(error.message)
      });
    }
}



