import { Component, HostListener } from "@angular/core";

@Component({
  selector: "pipe-background",
  templateUrl: "./pipe-background.component.html",
  styleUrls: ["./pipe-background.component.scss"],
})
export class PipeBackgroundComponent {
  offset = 0;

  @HostListener("window:scroll", []) onWindowScroll() {
    const verticalOffset =
      document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.offset = verticalOffset / 8;
  }
}
