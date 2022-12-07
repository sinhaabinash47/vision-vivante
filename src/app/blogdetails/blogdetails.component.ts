import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent implements OnInit {

  blogDetails:any

  constructor(private apiservice: ServiceService, private http: HttpClient) {
    this.getpageData()
  }

  ngOnInit(): void {
  }

  getpageData(){
    this.http.get("/assets/metatags/blogDetails-component.json").subscribe(res => {
      this.blogDetails = res
    })
  }

}
