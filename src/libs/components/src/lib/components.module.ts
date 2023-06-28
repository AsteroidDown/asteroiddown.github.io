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
  TitleComponent,
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

    TitleComponent,
    ExperienceComponent,
    ExperienceCardComponent,
  ],
  exports: [
    WelcomeComponent,
    SectionOneComponent,
    DetailSectionComponent,
    CreativeSectionComponent,
    KnowledgeSectionComponent,
    InteractiveSectionComponent,
    TestSectionComponent,

    TitleComponent,
    ExperienceComponent,
    ExperienceCardComponent,
  ],
})
export class ComponentsModule {}
