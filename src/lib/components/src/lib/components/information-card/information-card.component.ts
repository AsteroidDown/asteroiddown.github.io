import { Component, Input } from "@angular/core";

export interface InformationCardConfig {
  name: string;
  description?: string;
  footnote?: string;

  image: string;
  gif?: string;

  link?: string;
}

@Component({
  selector: "information-card",
  templateUrl: "./information-card.component.html",
  styleUrls: ["./information-card.component.scss"],
})
export class InformationCardComponent {
  @Input() config?: InformationCardConfig;

  hovered = false;

  positionClasses = "flex lg:flex-col m-2 relative";
  sizeClasses = "lg:w-[320px] w-[95vw] h-[96px]";
  containerClasses =
    "bg-aorange bg-opacity-5 border-[3px] border-aorange border-opacity-80 rounded-2xl shadow-aorange";
  styleClasses = "overflow-hidden cursor-pointer transition-all duration-300 ";
  hoverClasses = "hover:shadow-info";

  classes = `${this.positionClasses} ${this.sizeClasses} ${this.containerClasses} ${this.styleClasses} ${this.hoverClasses}`;
}
