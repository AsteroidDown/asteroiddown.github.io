import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
  selector: "section-one",
  templateUrl: "./section-one.component.html",
  styleUrls: ["./section-one.component.scss"],
})
export class SectionOneComponent {
  @ViewChild("container") private container?: ElementRef<HTMLDivElement>;
  containerInView = false;

  text1 = "";
  text2 = "";
  text3 = "";

  index = 0;
  loopCalled = false;
  finishedLineOne = false;
  lineOne = `I'm a developer, who sees the big picture`;

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

    if (this.containerInView && !this.loopCalled) {
      this.lineOneLoop();
      this.loopCalled = true;
    }
  }

  async lineOneLoop() {
    await new Promise(() =>
      setTimeout(
        () => {
          if (this.index < 30) {
            this.text1 += this.lineOne[this.index];
          } else if (this.index < 33) {
            this.text2 += this.lineOne[this.index];
          } else {
            this.text3 += this.lineOne[this.index];
          }
          this.index++;

          if (this.index < this.lineOne.length) this.lineOneLoop();
          else setTimeout(() => (this.finishedLineOne = true), 2000);
        },
        this.index === 0 ? 1000 : this.index === 15 ? 1000 : 30
      )
    );
  }
}
