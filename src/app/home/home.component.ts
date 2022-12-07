import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homeData: any;
  isActive: any = 0;
  items!: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox, private apiservice: ServiceService, private title: Title, private meta: Meta, private http: HttpClient) {
    this.getpageData();
  }


  ngOnInit(): void {
    let data = this.apiservice.seodata.find((res: any) => res.page == 'Home');
    if (data) {
      this.title.setTitle(data.title);
      data.tags.forEach((tag: any) => {
        this.meta.updateTag({ name: tag.name, content: tag.content })
      });
    }
    
  }

  getpageData() {
    this.http.get("/assets/metatags/home-component.json").subscribe((res: any) => {
      this.homeData = res;
      this.showimagedata(res?.section5.cards)
    })
  }
  showimagedata(res: any) {
    this.items = res.map((item: any) =>
      // new ImageItem({src: item.url})
      new ImageItem({ thumb: item.previewUrl, src: item.url })
    );
    this.basicLightboxExample();
    this.withCustomGalleryConfig();
  }

  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }
  withCustomGalleryConfig() {
    const lightboxGalleryRef = this.gallery.ref('anotherLightbox');
    lightboxGalleryRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });
    lightboxGalleryRef.load(this.items);
  }
}

