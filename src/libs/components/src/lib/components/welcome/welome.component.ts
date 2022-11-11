import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: "welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  name = ["J", "a", "s", "p", "e", "r", " ", "S", "t", "a", "h", "m", "e", "r"];
  height = 0;
  animation = "fall";

  ngOnInit(): void {
    this.height = window.innerHeight;
  }
}
