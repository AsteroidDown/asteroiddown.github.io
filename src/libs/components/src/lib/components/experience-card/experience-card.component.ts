import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "experience-card",
  templateUrl: "./experience-card.component.html",
  styleUrls: ["./experience-card.component.scss"],
})
export class ExperienceCardComponent {
  @Input() name?: string;
}
