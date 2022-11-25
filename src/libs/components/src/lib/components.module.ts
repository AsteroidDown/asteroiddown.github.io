import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  WelcomeComponent,
  SectionOneComponent,
  TestSectionComponent,
  InteractiveSectionComponent,
  CreativeSectionComponent,
} from "./components";

@NgModule({
  declarations: [
    WelcomeComponent,
    SectionOneComponent,
    CreativeSectionComponent,
    InteractiveSectionComponent,
    TestSectionComponent,
  ],
  imports: [CommonModule],
  exports: [
    WelcomeComponent,
    SectionOneComponent,
    CreativeSectionComponent,
    InteractiveSectionComponent,
    TestSectionComponent,
  ],
})
export class ComponentsModule {}
