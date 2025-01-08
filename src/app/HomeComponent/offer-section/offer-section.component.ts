import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-section.component.html',
  styleUrl: './offer-section.component.css'
})
export class OfferSectionComponent {

  offerData : any[]=[
    {image:'truck1.png',title:'Instant Delivery',desc:'Daewoo Smart cargo comprises of state of the art terminal to terminal courier services.'},
    {image:'Frame 1000006902.png',title:'Overseas Logistics',desc:'Daewoo Globex exhibiting a world class 360 degree movement of international shipments across the globe.'},
    {image:'Frame 1000006902 (1).png',title:'Hosted Contact',desc:'Daewoo Courier bridges infinite gaps in home delivery cargo services and inevitably delivering at your doorstep.'},
    {image:'integration 1.png',circleImg:'Ellipse 5.png',title:'API Integrations',desc:'Smart and sustainable business requires the skills of logistics experts who are able to think ahead.'},
    {image:'detailed (1) 1.png',circleImg:'Ellipse 5.png',title:'In-house Technical Support',desc:'Daewoo COD connecting domestic and international environments through unmatched.'},
    {image:'Frame 1000006902 (3).png',title:'Door Step Pickup and Delivery',desc:'Daewoo Greetings expresses joy to relations and festivities by delivering your heartfelt emotions.'},
    {image:'Frame 1000006902 (2).png',title:'Warehousing Services',desc:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
    {image:'reverse-logistic 1.png',circleImg:'Ellipse 5.png',title:'Reverse Logistics',desc:'Some quick example text to build on the card title and make up the bulk of the cards content.'},
  ]

}
