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
  ExperienceCardComponent,
  ExperienceComponent,
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

    ExperienceComponent,
    ExperienceCardComponent,
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

    ExperienceComponent,
    ExperienceCardComponent,
  ],
})
export class ComponentsModule {}
