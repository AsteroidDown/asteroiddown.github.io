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
  math = Math;

  windowHeight = window.innerHeight - 400;

  showDetails = false;

  selectedCard: ExperienceCard | null = null;

  cards: ExperienceCard[] = [
    {
      name: "VectorSolv",
      url: "assets/vectorsolv.png",
      position: "Full Stack Software Developer",
      time: "Jan 2022 - Feb 2024",
      points: [
        "Designed and built reusable frontend pages, components, and dialogs from the ground up to be used for administrative and customer facing web portals using TypeScript, Angular, and HTML",
        "Implemented backend API endpoints to create, retrieve, and manipulated server side data using TypeORM and MySQL",
        "Led and participated in daily stand-ups, system design architecture planning, code review sessions, and task delegation",
        "Mentored 8+ co-op students giving guidance on best practice, design principles, and code eﬃciency to promote their learning",
      ],
    },
    {
      name: "Kids Great Minds",
      url: "assets/KGM.jpeg",
      position: "Programing Course Instructor",
      time: "Jun 2020 - Jan 2022",
      points: [
        "Taught Python, Ruby, and Java coding courses with intro to advanced level concepts to students aged 7-14",
        "Designed lesson plans based on student ability to ensure course content was understood and absorbed easily",
        "Worked with a team to design a build an adventure game to teach finance in a fun way directed towards high-school students",
      ],
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
    this.showDetails = true;
    this.selectedCard = card;
  }

  clearCard() {
    this.showDetails = false;
    setTimeout(() => (this.selectedCard = null), 500);
  }
}
