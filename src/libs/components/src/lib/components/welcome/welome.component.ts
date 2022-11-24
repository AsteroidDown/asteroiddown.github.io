import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  @ViewChild("container") private container?: ElementRef<HTMLDivElement>;
  containerInView = false;

  name = ["J", "a", "s", "p", "e", "r", " ", "S", "t", "a", "h", "m", "e", "r"];
  inAnimation = true;

  height = 0;
  containerWidth = 0;
  messagePosition = 0;

  @ViewChild("nameDiv") nameDiv: ElementRef | null = null;
  @ViewChild("messageDiv") messageDiv: ElementRef | null = null;

  // @HostListener("window:scroll", ["$event"])
  // scrolledIntoView() {
  //   if (this.container) {
  //     const rect = this.container.nativeElement.getBoundingClientRect();
  //     // if (Math.abs(rect.top) > rect.height / 4) this.inAnimation = false;
  //     // else this.inAnimation = true;
  //   }
  // }

  ngOnInit(): void {
    this.height = window.innerHeight;
  }

  ngAfterViewInit() {
    if (this.nameDiv && this.messageDiv) {
      this.containerWidth = this.nameDiv.nativeElement.clientWidth;

      if (window.innerWidth < 600) {
        this.messagePosition =
          this.containerWidth - this.messageDiv.nativeElement.clientWidth + 16;
      } else {
        this.messagePosition =
          (window.innerWidth - this.containerWidth) / 2 +
          this.containerWidth -
          this.messageDiv.nativeElement.clientWidth / 2;
      }
    }
  }
}
