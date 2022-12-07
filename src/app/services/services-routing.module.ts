import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiUxDesignComponent } from './ui-ux-design/ui-ux-design.component';
import { AndroidDevelopmentComponent } from './android-development/android-development.component';
import { BackendDevelopmentComponent } from './backend-development/backend-development.component';
import { FrontendDevelopmentComponent } from './frontend-development/frontend-development.component';
import { IosDevelopmentComponent } from './ios-development/ios-development.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';

const routes: Routes = [
  {path: 'ui-ux-design', component: UiUxDesignComponent},
  {path: 'android-development', component: AndroidDevelopmentComponent},
  {path: 'backend-development', component: BackendDevelopmentComponent},
  {path: 'frontend-development', component: FrontendDevelopmentComponent},
  {path: 'ios-development', component: IosDevelopmentComponent},
  {path: 'digital-marketing', component: ProjectManagementComponent},
  {path: 'quality-assurance', component: QualityAssuranceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
