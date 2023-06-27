import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from "@angular/core";

export interface ExperienceCard {
  name: string;
}

@Component({
  selector: "experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  showDetails = false;

  selectedCard: ExperienceCard | null = null;

  cards: ExperienceCard[] = [
    { name: "VectorSolv" },
    { name: "Environment Canada" },
    { name: "Natural Resources Canada" },
  ];

  selectCard(card: ExperienceCard) {
    this.selectedCard = card;
  }

  clearCard() {
    this.selectedCard = null;
  }
}
