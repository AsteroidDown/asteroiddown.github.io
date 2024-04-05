import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  BannerComponent,
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
  ],
  exports: [
    BannerComponent,
    PipeComponent,
    PipeBackgroundComponent,
    ExperienceComponent,
    InformationCardComponent,
    EducationComponent,
    ProjectsComponent,
  ],
})
export class ComponentsModule {}
