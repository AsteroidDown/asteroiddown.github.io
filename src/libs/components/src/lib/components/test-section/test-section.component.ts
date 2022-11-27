import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "test-section",
  templateUrl: "./test-section.component.html",
  styleUrls: ["./test-section.component.scss"],
})
export class TestSectionComponent implements OnInit {
  @ViewChild("container") private container?: ElementRef<HTMLDivElement>;
  containerInView = false;

  images: string[] = [
    "assets/html.png",
    "assets/css.png",
    "assets/angular.png",
    "assets/typescript.png",
    "assets/python.png",
    "assets/c.png",
    "assets/java.png",
    "assets/npm.png",
  ];

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

  loop() {
    // this.boxPositions = this.boxPositions.map((pos) =>
    //   pos <= -20 ? 130 : pos - 1
    // );
    // console.log(this.boxPositions);
    // setTimeout(() => {
    //   // this.loop();
    // }, 500);
  }

  ngOnInit() {
    this.loop();
  }
}
