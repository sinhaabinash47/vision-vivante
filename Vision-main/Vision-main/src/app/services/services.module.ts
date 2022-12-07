import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { UiUxDesignComponent } from './ui-ux-design/ui-ux-design.component';
import { AndroidDevelopmentComponent } from './android-development/android-development.component';
import { IosDevelopmentComponent } from './ios-development/ios-development.component';
import { FrontendDevelopmentComponent } from './frontend-development/frontend-development.component';
import { BackendDevelopmentComponent } from './backend-development/backend-development.component';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';

@NgModule({
  declarations: [
    UiUxDesignComponent,
    AndroidDevelopmentComponent,
    IosDevelopmentComponent,
    FrontendDevelopmentComponent,
    BackendDevelopmentComponent,
    QualityAssuranceComponent,
    ProjectManagementComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    GalleryModule.withConfig({
      // thumbView: 'contain',
    }),
    LightboxModule, 
  ]
})
export class ServicesModule { }
