import { Component } from "@angular/core";
import { InformationCardConfig } from "../information-card/information-card.component";

@Component({
  selector: "projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
  projects: InformationCardConfig[] = [
    {
      name: "Life Tracker",
      description: "A companion app for tracking life totals in various games",
      footnote: "Built using Flutter & Dart",
      image: "assets/life-tracker.png",
      gif: "assets/life-tracker.gif",
      link: "https://asteroiddown.github.io/life-tracker/",
    },
    {
      name: "Beat Sequencer",
      description:
        "A musical learning tool to help build and play both melodies and beats",
      footnote: "Built using Anular, TypeScript, & HTML/CSS",
      image: "assets/beat-sequencer.png",
      gif: "assets/beat-sequencer.gif",
      link: "https://asteroiddown.github.io/beat-sequencer/",
    },
  ];
}
