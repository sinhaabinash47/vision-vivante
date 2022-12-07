import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ClientWorksComponent } from './client-works/client-works.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsanamikaComponent } from './solutionsanamika/solutionsanamika.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ClientWorkViewComponent } from './client-work-view/client-work-view.component';
import{ HowToUseWebsocketsInGolangComponent } from './how-to-use-websockets-in-golang/how-to-use-websockets-in-golang.component'

const routes: Routes = [
  // {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'solutions', component:SolutionsanamikaComponent},
  {path:'services', component:ServicesComponent},
  {path:'client-works/:linkurl', component:ClientWorksComponent},
  {path:'blog', component:BlogComponent},
  {path:'contact', component:ContactComponent},
  {path: 'services',loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},
  {path: 'solutionsanamika',loadChildren: () => import('./solutionsanamika/solutionsanamika.module').then(m => m.SolutionsanamikaModule)},
  {path:'get-quote', component:GetQuoteComponent},
  {path:'blog-details', component:BlogdetailsComponent},
  {path:'client-work-view', component:ClientWorkViewComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled', enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
