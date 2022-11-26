import {
  Component,
  ElementRef,
  HostListener,
  AfterViewInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "interactive-section",
  templateUrl: "./interactive-section.component.html",
  styleUrls: ["./interactive-section.component.scss"],
})
export class InteractiveSectionComponent implements AfterViewInit {
  @ViewChild("container") private container?: ElementRef<HTMLDivElement>;
  containerInView = false;

  rows = 0;
  columns = 0;
  boxLength = 40;
  containerHeight = 400;

  time = 30;
  allOff = false;

  oi: number = 0;
  oj: number = 0;
  boxes: [boolean[]] = [[]];
  rowsList: number[] = [];
  colsList: number[] = [];

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

  @HostListener("window:load", ["$event"])
  @HostListener("window:resize", ["$event"])
  calculateBoxes() {
    this.rows = 0;
    this.columns = 0;
    this.boxLength = 40;
    this.containerHeight = 400;

    this.rowsList = [];
    this.colsList = [];

    const containerRect = this.container?.nativeElement.getBoundingClientRect();
    if (!containerRect) return;

    this.columns = containerRect?.width / this.boxLength;
    this.boxLength +=
      (containerRect?.width % this.boxLength) / Math.floor(this.columns);
    this.columns = containerRect?.width / this.boxLength;

    this.containerHeight = 10 * this.boxLength + 10;
    this.rows = Math.round(containerRect?.height / this.boxLength);

    for (let i = 0; i < this.rows; i++) this.rowsList.push(i);
    for (let i = 0; i < this.columns; i++) this.colsList.push(i);
  }

  boxesOff(i: number, j: number) {
    if (this.boxes[i][j]) {
      this.boxes[i][j] = false;
      this.allOff = true;

      setTimeout(() => {
        if (i > 0) this.boxesOff(i - 1, j);
        if (i < this.rows - 1) this.boxesOff(i + 1, j);
        if (j > 0) this.boxesOff(i, j - 1);
        if (j < this.columns - 1) this.boxesOff(i, j + 1);
      }, this.time);

      if (!this.boxes.filter((each) => each.includes(true))?.length) {
        setTimeout(() => {
          this.boxesOn(this.oi, this.oj);
        }, 2000);
      }
    }
  }

  boxesOn(i: number, j: number) {
    if (!this.boxes[i][j]) {
      this.boxes[i][j] = true;
      this.allOff = false;

      setTimeout(() => {
        if (i > 0) this.boxesOn(i - 1, j);
        if (i < this.rows - 1) this.boxesOn(i + 1, j);
        if (j > 0) this.boxesOn(i, j - 1);
        if (j < this.columns - 1) this.boxesOn(i, j + 1);
      }, this.time);
    }
  }

  ngAfterViewInit() {
    this.calculateBoxes();
    for (let i = 0; i < this.rows; i++) {
      this.boxes.push([]);
      for (let j = 0; j < this.columns; j++) {
        this.boxes[i].push(true);
      }
    }
  }
}
