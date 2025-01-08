import { Component,Inject,OnInit, PLATFORM_ID,HostListener } from '@angular/core';
import { isPlatformBrowser  } from '@angular/common';
import { HeroSectionComponent } from '../HomeComponent/hero-section/hero-section.component';
import { ClientSectionComponent } from '../HomeComponent/client-section/client-section.component';
import { CompanySectionComponent } from '../HomeComponent/company-section/company-section.component';
import { ServiceSectionComponent } from '../HomeComponent/service-section/service-section.component';
import { StikerSectionComponent } from '../HomeComponent/stiker-section/stiker-section.component';
import { OfferSectionComponent } from '../HomeComponent/offer-section/offer-section.component';
import { MobileSectionComponent } from '../HomeComponent/mobile-section/mobile-section.component';
import { ClientMessageSectionComponent } from '../HomeComponent/client-message-section/client-message-section.component';
import { QuestionSectionComponent } from '../HomeComponent/question-section/question-section.component';
import { ContactSectionComponent } from '../HomeComponent/contact-section/contact-section.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroSectionComponent,ClientSectionComponent,CompanySectionComponent,ServiceSectionComponent,
            StikerSectionComponent,OfferSectionComponent,MobileSectionComponent,ClientMessageSectionComponent,
            QuestionSectionComponent,ContactSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  constructor( @Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onWindowScroll(); // Trigger the function on window load if in the browser
    } 
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const image = document.getElementById('tollNo');
      const scrollPosition = window.scrollY;
      const triggerPoint = 100; // Adjust this value based on when you want the image to start moving

      if (scrollPosition > triggerPoint) {
        image?.classList.add('fixed');
      } else {
        image?.classList.remove('fixed');
      }
    }
  } 
}
