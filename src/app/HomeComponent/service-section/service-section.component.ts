import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router,RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [NgFor,RouterOutlet,RouterModule],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css'
})
export class ServiceSectionComponent{

  serviceData: any[] = [
                        {image:'Smart_Cargo_1.png',
                         title:'Daewoo Smart Cargo',
                         desc:'Daewoo Smart Cargo provides a best-in-class, terminal-to-terminal courier service.',
                         link:'d#'
                        },
                        {image:'GlobEx_service.png',
                          title:'Daewoo Globex',
                          desc:'Daewoo Globex offers world-class international logistics solutions tailored to meet your global shipping needs.',
                          link:'#'
                         },
                         {image:'Daewoo_Courier_New_1.png',
                          title:'Daewoo Courier',
                          desc:'Manage your courier needs effortlessly with the Daewoo Courier mobile app. Track your shipments in real-time.',
                          link:'#'
                         },
                         {image:'Map.png',
                          title:'Logistics Solutions',
                          desc:'Daewoo Express continues to lead the way in Pakistan’s transportation and logistics industry, setting the standard for quality, efficiency, and innovation.',
                          link:'#'
                         },
                         {image:'COD 1.png',
                          title:'Daewoo COD',
                          desc:'Streamline your logistics operations with our advanced mobile app, designed to provide seamless solutions for all',
                          link:'#'
                         },
                         {image:'Greetings_service.png',
                          title:'Daewoo Greetings',
                          desc:'Daewoo Greeting brings a unique way to share joy and connect with your loved ones. Whether it’s a festive occasion.',
                          link:'daewoo-greeting'
                         },
                         {image:'Greetings_service.png',
                          title:'Taimoor Hassan',
                          desc:'Daewoo Greeting brings a unique way to share joy and connect with your loved ones. Whether it’s a festive occasion.',
                          link:'#'
                         }
                         
                          ]
constructor(private router: Router) {}

}