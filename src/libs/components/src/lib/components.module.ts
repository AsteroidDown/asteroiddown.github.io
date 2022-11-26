import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  WelcomeComponent,
  SectionOneComponent,
  TestSectionComponent,
  InteractiveSectionComponent,
  CreativeSectionComponent,
  DetailSectionComponent,
} from "./components";

@NgModule({
  declarations: [
    WelcomeComponent,
    SectionOneComponent,
    DetailSectionComponent,
    CreativeSectionComponent,
    InteractiveSectionComponent,
    TestSectionComponent,
  ],
  imports: [CommonModule],
  exports: [
    WelcomeComponent,
    SectionOneComponent,
    DetailSectionComponent,
    CreativeSectionComponent,
    InteractiveSectionComponent,
    TestSectionComponent,
  ],
})
export class ComponentsModule {}
