import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("welcome") welcome?: ElementRef;
  @ViewChild("sectionOne") sectionOne?: ElementRef;
  @ViewChild("creative") creative?: ElementRef;
  @ViewChild("detail") detail?: ElementRef;
  @ViewChild("interactive") interactive?: ElementRef;
  @ViewChild("knowledge") knowledge?: ElementRef;

  scrolling = false;
  prevScroll = 0;

  welcomeTop = 0;
  sectionOneTop = 0;
  creativeTop = 0;
  detailTop = 0;
  interactiveTop = 0;
  knowledgeTop = 0;

  @HostListener("window:scroll", ["$event"])
  startTheShow() {
    if (this.scrolling) return;
    this.scrolling = true;

    const scrollPos = window.scrollY;
    console.log(
      scrollPos,
      this.welcomeTop,
      this.sectionOneTop,
      this.creativeTop,
      this.detailTop,
      this.interactiveTop,
      this.knowledgeTop
    );

    window.scrollTo({ top: scrollPos, behavior: "smooth" });
    if (scrollPos > this.prevScroll) {
      this.scrollDown(scrollPos);
    } else this.scrollUp(scrollPos);

    setTimeout(() => (this.scrolling = false), 1000);
  }

  scrollDown(scrollPos: number) {
    if (scrollPos <= this.sectionOneTop) {
      this.prevScroll = this.sectionOneTop;
    } else if (scrollPos <= this.creativeTop) {
      this.prevScroll = this.creativeTop;
    } else if (scrollPos <= this.detailTop) {
      this.prevScroll = this.detailTop;
    } else if (scrollPos <= this.interactiveTop) {
      this.prevScroll = this.interactiveTop;
    } else if (scrollPos <= this.knowledgeTop) {
      this.prevScroll = this.knowledgeTop;
    }
    console.log("Scroll to:", this.prevScroll);
    window.scrollTo({ top: this.prevScroll, behavior: "smooth" });
  }

  scrollUp(scrollPos: number) {
    if (scrollPos >= this.knowledgeTop) {
      this.prevScroll = this.knowledgeTop;
    } else if (scrollPos >= this.interactiveTop) {
      this.prevScroll = this.interactiveTop;
    } else if (scrollPos >= this.detailTop) {
      this.prevScroll = this.detailTop;
    } else if (scrollPos >= this.creativeTop) {
      this.prevScroll = this.creativeTop;
    } else if (scrollPos >= this.sectionOneTop) {
      this.prevScroll = this.sectionOneTop;
    } else {
      this.prevScroll = this.welcomeTop;
    }
    console.log("Scroll to:", this.prevScroll);
    window.scrollTo({ top: this.prevScroll, behavior: "smooth" });
  }

  async ngAfterViewInit() {
    this.sectionOneTop = (
      this.welcome as any
    ).container.nativeElement.getBoundingClientRect().height;

    this.creativeTop =
      (this.sectionOne as any).container.nativeElement.getBoundingClientRect()
        .height + this.sectionOneTop;

    this.detailTop =
      (this.creative as any).container.nativeElement.getBoundingClientRect()
        .height + this.creativeTop;

    this.interactiveTop =
      (this.detail as any).container.nativeElement.getBoundingClientRect()
        .height + this.detailTop;

    this.knowledgeTop =
      (this.interactive as any).container.nativeElement.getBoundingClientRect()
        .height + this.interactiveTop;
  }
}
