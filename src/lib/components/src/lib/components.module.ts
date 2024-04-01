import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BannerComponent, PipeComponent } from "./components";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [BannerComponent, PipeComponent],
  exports: [BannerComponent, PipeComponent],
})
export class ComponentsModule {}
