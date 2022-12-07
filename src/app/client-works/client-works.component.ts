import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from "../service/service.service";

import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: "app-client-works",
  templateUrl: "./client-works.component.html",
  styleUrls: ["./client-works.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientWorksComponent implements OnInit {

  clientworkData: any;
  matchurl: any;
  matchurlindex: any;

  items!: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox, private apiservice: ServiceService, private title: Title, private meta: Meta, private http: HttpClient, public route: ActivatedRoute) {
    this.getpageData()
  }

  ngOnInit(): void {
    let data = this.apiservice.seodata.find(
      (res: any) => res.page == "client-works"
    );
    if (data) {
      this.title.setTitle(data.title);
      data.tags.forEach((tag: any) => {
        this.meta.updateTag({ name: tag.name, content: tag.content });
      });
    }

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

  getpageData() {
    this.http.get("/assets/metatags/client-component.json").subscribe((res: any) => {
      this.clientworkData = res;
      this.showimagedata(res?.section2.all)
      this.matchurl = this.route.snapshot.params['linkurl'];
      this.matchurlindex = (this.matchurl === 'all') ? 0 : (this.matchurl === 'ui-ux-design') ? 1 : ((this.matchurl === 'android-development') || (this.matchurl === 'ios-development')) ? 2 : ((this.matchurl === 'frontend-development') || (this.matchurl === 'backend-development')) ? 3 : (this.matchurl === 'quality-assurance') ? 4 : (this.matchurl === 'digital-marketing') ? 5 : 0
      let matchurldata = (this.matchurlindex == 0) ? this.clientworkData?.section2.all : (this.matchurlindex == 1) ? this.clientworkData?.section2.producdDesign : (this.matchurlindex == 2) ? this.clientworkData?.section2.mobiledevelopment : (this.matchurlindex == 3) ? this.clientworkData?.section2.websiteDevelopment : (this.matchurlindex == 4) ? this.clientworkData?.section2.qualityassurance : (this.matchurlindex == 5) ? this.clientworkData?.section2.digitalmarketing : "";
      if (this.matchurlindex) {
        this.showimagedata(matchurldata)

      }
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
}