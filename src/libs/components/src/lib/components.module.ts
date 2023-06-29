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
  EducationComponent,
  PipeComponent,
} from "./components";

@NgModule({
  imports: [CommonModule],
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
    EducationComponent,

    PipeComponent,
  ],
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
    EducationComponent,

    PipeComponent,
  ],
})
export class ComponentsModule {}
