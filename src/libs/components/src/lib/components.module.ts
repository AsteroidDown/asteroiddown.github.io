import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SectionOneComponent } from "./components/section-one/section-one.component";
import { WelcomeComponent } from "./components/welcome/welome.component";

@NgModule({
  declarations: [WelcomeComponent, SectionOneComponent],
  imports: [CommonModule],
  exports: [WelcomeComponent, SectionOneComponent],
})
export class ComponentsModule {}
