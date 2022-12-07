import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BookingComponent } from './booking/booking.component';
import { ECommerceb2cComponent } from './e-commerceb2c/e-commerceb2c.component';
import { EcommercemarcketplaceComponent } from './ecommercemarcketplace/ecommercemarcketplace.component';
import { FooddeveliryComponent } from './fooddeveliry/fooddeveliry.component';
import { FoododeringComponent } from './foododering/foododering.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { JobComponent } from './job/job.component';
import { SolutiontoggleComponent } from './solutiontoggle/solutiontoggle.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {path: 'blogs', component: BlogsComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'e-commerceb2c', component: ECommerceb2cComponent},
  {path: 'ecommercemarcketplace', component: EcommercemarcketplaceComponent},
  {path: 'fooddeveliry', component: FooddeveliryComponent},
  {path: 'foododering', component: FoododeringComponent},
  {path: 'healthcare', component: HealthcareComponent},
  {path: 'job', component: JobComponent},
  {path: 'solutiontoggle', component: SolutiontoggleComponent},
  {path: 'travel', component: TravelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsanamikaRoutingModule { }
