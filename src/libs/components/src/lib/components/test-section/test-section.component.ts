import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "test-section",
  templateUrl: "./test-section.component.html",
  styleUrls: ["./test-section.component.scss"],
})
export class TestSectionComponent {
  @ViewChild("container") private container?: ElementRef<HTMLDivElement>;
  containerInView = false;
}
