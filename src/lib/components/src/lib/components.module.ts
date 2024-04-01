import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  BannerComponent,
  ExperienceCardComponent,
  ExperienceComponent,
  PipeBackgroundComponent,
  PipeComponent,
} from "./components";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    BannerComponent,
    PipeComponent,
    PipeBackgroundComponent,
    ExperienceComponent,
    ExperienceCardComponent,
  ],
  exports: [
    BannerComponent,
    PipeComponent,
    PipeBackgroundComponent,
    ExperienceComponent,
    ExperienceCardComponent,
  ],
})
export class ComponentsModule {}
