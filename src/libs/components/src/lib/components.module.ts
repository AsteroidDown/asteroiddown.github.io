import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  WelcomeComponent,
  SectionOneComponent,
  TestSectionComponent,
  InteractiveSectionComponent,
} from "./components";

@NgModule({
  declarations: [
    WelcomeComponent,
    SectionOneComponent,
    InteractiveSectionComponent,
    TestSectionComponent,
  ],
  imports: [CommonModule],
  exports: [
    WelcomeComponent,
    SectionOneComponent,
    InteractiveSectionComponent,
    TestSectionComponent,
  ],
})
export class ComponentsModule {}
