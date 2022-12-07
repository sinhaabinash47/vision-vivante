import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-quality-assurance',
  templateUrl: './quality-assurance.component.html',
  styleUrls: ['./quality-assurance.component.scss']
})
export class QualityAssuranceComponent implements OnInit {

  quality:any
  items!: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox, private apiservice: ServiceService, private http:HttpClient, private router:Router) {
    this.getpageData()
  }

  ngOnInit(): void {
  }

  getpageData(){
    this.http.get("/assets/metatags/quality-component.json").subscribe((res:any) => {
      this.quality = res
      this.showimagedata(res?.section3?.cards)
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

  matchproduct(link:any){
    let url:any = window.location.pathname;
    url = url.split('/');
    url=url[2]
    if (url){
      this.router.navigateByUrl(link+'/'+url)
    }
  }

}
