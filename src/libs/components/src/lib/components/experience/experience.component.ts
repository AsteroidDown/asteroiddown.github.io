import { Component } from "@angular/core";

export interface ExperienceCard {
  name: string;
  url?: string;

  position?: string;
  time?: string;

  points?: string[];
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
    {
      name: "VectorSolv",
      url: "assets/vectorsolv.png",
      points: ["Point 1", "Point 2", "Point 3"],
    },
    {
      name: "Environment Canada",
      url: "assets/canada.png",
      position: "Atmospheric Chemist",
      time: "Sep - Dec 2019",
      points: [
        "Developed automation tools to analyze and organize data on chemical distribution in the air over the oil sands",
        "Computed time shifts between data sets to normalize them and acurately provide data to be studied",
        "Monitored real-time data for innacuracies and reported on identified problems",
      ],
    },
    {
      name: "Natural Resources Canada",
      url: "assets/nrcan.jpeg",
      position: "Research Assistant",
      time: "Jan - Apr 2019",
      points: [
        "Researched the effects of Space Weather on GPS using statistical analysis to correlate various datasets",
        "Utilized graphing software (Origin) to provide plots such as detailed scatter-plots, histograms, and 3D graphs",
        "Wrote a professional scientific paper on concluded results from the study which will be published alongside research from other Natural Resources Canada Physists",
      ],
    },
  ];

  selectCard(card: ExperienceCard) {
    this.selectedCard = card;
  }

  clearCard() {
    this.selectedCard = null;
  }
}
