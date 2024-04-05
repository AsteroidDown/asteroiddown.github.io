import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  BannerComponent,
  ContactCardComponent,
  ContactComponent,
  EducationComponent,
  ExperienceComponent,
  InformationCardComponent,
  PipeBackgroundComponent,
  PipeComponent,
  ProjectsComponent,
} from "./components";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    BannerComponent,
    PipeComponent,
    PipeBackgroundComponent,
    ExperienceComponent,
    InformationCardComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    ContactCardComponent,
  ],
  exports: [
    BannerComponent,
    PipeComponent,
    PipeBackgroundComponent,
    ExperienceComponent,
    InformationCardComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    ContactCardComponent,
  ],
})
export class ComponentsModule {}
