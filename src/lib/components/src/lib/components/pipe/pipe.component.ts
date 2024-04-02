import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from "@angular/core";

export interface PipeConfig {
  color: string;
  width?: number;

  static?: boolean;

  sections: PipeSection[];
}

export interface PipeSection {
  width: number;

  h1: number;
  h2: number;

  y: "top" | "bottom";
}

@Component({
  selector: "pipe",
  templateUrl: "./pipe.component.html",
  styleUrls: ["./pipe.component.scss"],
})
export class PipeComponent {
  @ViewChild("container") private container?: ElementRef<HTMLDivElement>;

  @Input() pipe: PipeConfig | null = null;

  @HostListener("window:load", ["$event"])
  @HostListener("window:scroll", ["$event"])
  @HostListener("window:loadeddata", ["$event"])
  scrolledIntoView() {
    if (this.container && !this.containerInView) {
      const rect = this.container.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.containerInView = topShown && bottomShown;
    }
  }

  containerInView = false;
}
