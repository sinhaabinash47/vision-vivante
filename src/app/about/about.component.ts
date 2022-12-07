import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutData: any;

  constructor(private apiservice: ServiceService, private title: Title, private meta: Meta, private http: HttpClient) {
    this.getpageData()
  }

  ngOnInit(): void {
    let data = this.apiservice.seodata.find((res: any) => res.page == 'About');
    if (data) {
      this.title.setTitle(data.title);
      data.tags.forEach((tag: any) => {
        this.meta.updateTag({ name: tag.name, content: tag.content })
      });
    }
  }

  getpageData() {
    this.http.get("/assets/metatags/about-component.json").subscribe(res => {
      this.aboutData = res;
    })
  }
}