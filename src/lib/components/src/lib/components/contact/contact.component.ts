import { Component } from "@angular/core";
import { ContactCardConfig } from "../contact-card/contact-card.component";

@Component({
  selector: "contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  cards: ContactCardConfig[] = [
    {
      name: "LinkedIn",
      image: "linkedin",
      url: "https://www.linkedin.com/in/jasperstahmer/",
    },
    {
      name: "GitHub",
      image: "github",
      url: "https://github.com/AsteroidDown",
    },
    {
      name: "Phone",
      image: "phone",
      url: "tel:6475746240",
    },
    {
      name: "Email",
      image: "email",
      url: "mailto:jasper@stahmer.ca",
    },
  ];
}
