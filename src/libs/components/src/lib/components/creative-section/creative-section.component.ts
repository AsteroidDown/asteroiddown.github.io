import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
  selector: "creative-section",
  templateUrl: "./creative-section.component.html",
  styleUrls: ["./creative-section.component.scss"],
})
export class CreativeSectionComponent {
  @ViewChild("container") private container?: ElementRef<HTMLDivElement>;
  containerInView = false;
  containerHeight = 0;

  leftWidth = 0;

  animating = false;

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
        this.animating = true;

        setTimeout(() => {
          this.animating = false;
          this.leftWidth = window.innerWidth;
        }, 3000);
      }
    }
  }

  @HostListener("mousemove", ["$event"])
  mouseMove(mouseEvent: MouseEvent) {
    if (!this.animating && this.containerInView) this.leftWidth = mouseEvent.x;
  }
}
