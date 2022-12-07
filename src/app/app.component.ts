import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServiceService } from './service/service.service';
import { NavigationStart, Event, NavigationEnd, RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import * as $ from 'jquery';

interface NgxSpinnerConfig {
  type?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  loader = true;

  constructor(private http: HttpClient, private apiservice: ServiceService, private router: Router, 
    private title: Title, private meta: Meta, private spinner: NgxSpinnerService) { 
      this.router.events.subscribe((e:Event)=>{
        this.navigationInterceptor(e);
      })
    }

    navigationInterceptor(event:Event){
      if(event instanceof NavigationStart){
        this.loader = true;
        this.spinner.show();
      }      
      if(event instanceof NavigationEnd){
        setTimeout(() => {
          this.loader = false;
          this.spinner.hide();
        }, 200);
      }
    }

  ngOnInit(): void {
    this.getMetaTagsData();
    $(window).on('load', function () {
      $('.status').delay(550).fadeOut();
      $('.preloader').delay(550).fadeOut('slow');
      $('body').delay(550).css({ 'overflow': 'visible' });
    });
  }

  getMetaTagsData() {
    this.http.get<MetaDefinition[]>("/assets/metatags/app-component.json").subscribe(res => {
      this.apiservice.seodata = res;
      let data = res.find((res: any) => window.location.pathname.includes(res.page.toLowerCase()))
      if (data) {
        this.title.setTitle(data['title']);
        const tags: any = data['tags']
        tags.forEach((tag: any) => {
          this.meta.updateTag({ name: tag.name, content: tag.content })
        });
      }
    })
  }


 
  
}
