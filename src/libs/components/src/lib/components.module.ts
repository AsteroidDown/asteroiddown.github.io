import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  WelcomeComponent,
  SectionOneComponent,
  TestSectionComponent,
  InteractiveSectionComponent,
  CreativeSectionComponent,
  DetailSectionComponent,
  KnowledgeSectionComponent,
} from "./components";

@NgModule({
  declarations: [
    WelcomeComponent,
    SectionOneComponent,
    DetailSectionComponent,
    CreativeSectionComponent,
    KnowledgeSectionComponent,
    InteractiveSectionComponent,
    TestSectionComponent,
  ],
  imports: [CommonModule],
  exports: [
    WelcomeComponent,
    SectionOneComponent,
    DetailSectionComponent,
    CreativeSectionComponent,
    KnowledgeSectionComponent,
    InteractiveSectionComponent,
    TestSectionComponent,
  ],
})
export class ComponentsModule {}
