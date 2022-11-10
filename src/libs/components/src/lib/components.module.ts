import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./components/welcome/welome.component";

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule],
  exports: [WelcomeComponent],
})
export class ComponentsModule {}
