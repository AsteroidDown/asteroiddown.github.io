import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "detail-section",
  templateUrl: "./detail-section.component.html",
  styleUrls: ["./detail-section.component.scss"],
})
export class DetailSectionComponent implements OnInit {
  @ViewChild("messageBox") private messageBox?: ElementRef<HTMLDivElement>;

  @ViewChild("container") private container?: ElementRef<HTMLDivElement>;
  containerInView = false;

  index = 0;
  expanded = false;
  animating = false;
  message = "Detail Oriented";
  messageArr: string[] = [];

  heights: number[] = [];
  lineHeights: number[] = [192, 128, 64, 32, 16];

  @HostListener("window:load", ["$event"])
  @HostListener("window:scroll", ["$event"])
  @HostListener("window:loadeddata", ["$event"])
  scrolledIntoView() {
    if (this.container && !this.containerInView) {
      const rect = this.container.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.containerInView = topShown && bottomShown;

      if (this.containerInView && !this.expanded) {
        setTimeout(() => (this.expanded = true), 2000);
        this.animating = true;
        this.loop();
      }
    }
  }

  async loop() {
    setTimeout(() => {
      if (this.index < this.message.length) {
        this.expand(this.index);
        this.index++;
        this.loop();
      } else {
        this.expand(-6);
        setTimeout(() => (this.animating = false), 1000);
      }
    }, 100);
  }

  expand(index: number, event?: MouseEvent) {
    this.heights = [];

    if (this.animating) {
      for (let i = 0; i < this.message.length; i++) {
        if (i === index - 3 || i === index + 3) {
          this.heights.push(this.lineHeights[3]);
        } else if (i === index - 2 || i === index + 2) {
          this.heights.push(this.lineHeights[2]);
        } else if (i === index - 1 || i === index + 1) {
          this.heights.push(this.lineHeights[1]);
        } else if (i === index) {
          this.heights.push(this.lineHeights[0]);
        } else this.heights.push(this.lineHeights[4]);
      }
    } else if (event && this.containerInView) {
      const messageBox = this.messageBox?.nativeElement as any;

      const offsetTop = messageBox.offsetTop - messageBox.offsetHeight / 2;
      const offsetLeft = messageBox.offsetLeft - messageBox.offsetWidth / 2;

      const letters: HTMLCollection[] = messageBox.children;

      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i] as any;

        const letterX =
          offsetLeft +
          letter.offsetLeft +
          letter.clientWidth / 2 -
          event.offsetX;
        const letterY =
          offsetTop +
          letter.offsetTop -
          event.offsetY +
          letter.clientHeight / 2;

        const radius = Math.pow(128, 2);
        const distance = Math.pow(letterX, 2) + Math.pow(letterY, 2);
        const fromRadius = 1 - Math.abs(distance) / radius;

        this.heights.push(
          Math.max(768 * Math.min(1, 0.25 * Math.pow(fromRadius, 3)), 8)
        );
      }
    }
  }

  ngOnInit() {
    for (let i = 0; i < this.message.length; i++) {
      this.messageArr.push(this.message.charAt(i));
      this.heights.push(8);
    }
  }
}
