import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  constructor() {}

  name = ["J", "a", "s", "p", "e", "r", " ", "S", "t", "a", "h", "m", "e", "r"];
  animation = "fall";

  height = 0;
  containerWidth = 0;
  messagePosition = 0;

  @ViewChild("nameDiv") nameDiv: ElementRef | null = null;
  @ViewChild("messageDiv") messageDiv: ElementRef | null = null;

  ngOnInit(): void {
    this.height = window.innerHeight;
  }

  ngAfterViewInit() {
    if (this.nameDiv && this.messageDiv) {
      this.containerWidth = this.nameDiv.nativeElement.clientWidth;

      if (window.innerWidth < 600) {
        console.log(window.innerWidth);
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
