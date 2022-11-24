import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {
  WelcomeComponent,
  SectionOneComponent,
  TestSectionComponent,
} from "./components";

@NgModule({
  declarations: [WelcomeComponent, SectionOneComponent, TestSectionComponent],
  imports: [CommonModule],
  exports: [WelcomeComponent, SectionOneComponent, TestSectionComponent],
})
export class ComponentsModule {}
