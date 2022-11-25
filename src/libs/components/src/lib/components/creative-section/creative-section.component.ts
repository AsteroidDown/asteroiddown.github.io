import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "creative-section",
  templateUrl: "./creative-section.component.html",
  styleUrls: ["./creative-section.component.scss"],
})
export class CreativeSectionComponent implements OnInit {
  @ViewChild("container") private container?: ElementRef<HTMLDivElement>;
  containerInView = false;
  containerHeight = 0;

  leftWidth = 0;

  animating = true;

  @HostListener("window:load", ["$event"])
  @HostListener("window:scroll", ["$event"])
  @HostListener("window:loadeddata", ["$event"])
  scrolledIntoView() {
    if (this.container && !this.containerInView) {
      const rect = this.container.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.containerInView = topShown && bottomShown;

      if (this.containerInView) {
        setTimeout(() => (this.animating = false), 3000);
      }
    }
  }

  @HostListener("mousemove", ["$event"])
  mouseMove(mouseEvent: MouseEvent) {
    if (!this.animating) this.leftWidth = mouseEvent.x;
  }

  ngOnInit() {
    this.containerHeight = window.innerHeight;
    this.leftWidth = window.innerWidth;
  }
}
