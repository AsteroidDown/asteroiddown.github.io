import { Component, Input } from "@angular/core";

export interface ContactCardConfig {
  name: string;
  image: string;
  url: string;
}

@Component({
  selector: "contact-card",
  templateUrl: "./contact-card.component.html",
  styleUrls: ["./contact-card.component.scss"],
})
export class ContactCardComponent {
  @Input() config?: ContactCardConfig;

  hovered = false;
}
