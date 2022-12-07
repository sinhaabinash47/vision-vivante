import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SolutionsanamikaComponent } from './solutionsanamika/solutionsanamika.component';
import { ServicesComponent } from './services/services.component';
import { ClientWorksComponent } from './client-works/client-works.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { SolutiontoggleComponent } from './solutionsanamika/solutiontoggle/solutiontoggle.component';
import { FooddeveliryComponent } from './solutionsanamika/fooddeveliry/fooddeveliry.component';
import { ECommerceb2cComponent } from './solutionsanamika/e-commerceb2c/e-commerceb2c.component';
import { EcommercemarcketplaceComponent } from './solutionsanamika/ecommercemarcketplace/ecommercemarcketplace.component';
import { TravelComponent } from './solutionsanamika/travel/travel.component';
import { JobComponent } from './solutionsanamika/job/job.component';
import { HealthcareComponent } from './solutionsanamika/healthcare/healthcare.component';
import { BlogsComponent } from './solutionsanamika/blogs/blogs.component';
import { BookingComponent } from './solutionsanamika/booking/booking.component';
import { FoododeringComponent } from './solutionsanamika/foododering/foododering.component';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ClientWorkViewComponent } from './client-work-view/client-work-view.component';
import {NgxTypedJsModule} from 'ngx-typed-js';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { HowToUseWebsocketsInGolangComponent } from './how-to-use-websockets-in-golang/how-to-use-websockets-in-golang.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SolutionsanamikaComponent,
    ServicesComponent,
    ClientWorksComponent,
    BlogComponent,
    ContactComponent,
    SolutiontoggleComponent,
    FooddeveliryComponent,
    ECommerceb2cComponent,
    EcommercemarcketplaceComponent,
    TravelComponent,
    JobComponent,
    HealthcareComponent,
    BlogsComponent,
    BookingComponent,
    FoododeringComponent,
    BlogdetailsComponent,
    GetQuoteComponent,
    ClientWorkViewComponent,
    HowToUseWebsocketsInGolangComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SlickCarouselModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    SlickCarouselModule,
    MatTabsModule,
    NgxTypedJsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    ToastrModule.forRoot({
      timeOut: 500000,
      closeButton:true,
      positionClass: 'toast-top-right'
    }),
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule, 
    Ng2TelInputModule,
    NgxSpinnerModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
