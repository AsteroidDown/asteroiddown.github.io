import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  descriptors = [
    "Innovative",
    "Driven",
    "Responsible",
    "Creative",
    "Knowledgeable",
    "Analytical",
  ];
  descriptorColors = ["orange", "blue", "purple"];

  descriptorIndex = 0;
  currentDescriptor = this.descriptors[0];
  currentDescriptorColor = this.descriptorColors[0];
  nextDescriptor = this.descriptors[1];
  nextDescriptorColor = this.descriptorColors[1];

  switching = false;

  async descriptorLoop() {
    this.switching = false;

    this.descriptorIndex += 1;

    this.currentDescriptor =
      this.descriptors[this.descriptorIndex % this.descriptors.length];
    this.currentDescriptorColor =
      this.descriptorColors[
        this.descriptorIndex % this.descriptorColors.length
      ];

    this.nextDescriptor =
      this.descriptors[(this.descriptorIndex + 1) % this.descriptors.length];
    this.nextDescriptorColor =
      this.descriptorColors[
        (this.descriptorIndex + 1) % this.descriptorColors.length
      ];

    setTimeout(() => {
      this.switching = true;
    }, 1000);

    setTimeout(() => {
      this.descriptorLoop();
    }, 2500);
  }

  scroll() {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  }

  scrollToEducation() {
    this.viewportScroller.scrollToAnchor("education");
  }

  scrollToProjects() {
    this.viewportScroller.scrollToAnchor("projects");
  }

  scrollToContact() {
    this.viewportScroller.scrollToAnchor("contact");
  }

  ngOnInit() {
    this.descriptorLoop();
  }
}
