import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-message-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-message-section.component.html',
  styleUrl: './client-message-section.component.css'
})
export class ClientMessageSectionComponent {

  Clientdata:any[] = [
    {client_name:'Muhammad Taimoor Hassan',
      title:'Asp .Net Full Stack Developer',
      desc:'I am a skilled full-stack developer with expertise in both frontend and backend development, specializing in technologies such as ASP.NET Core, MS SQL Server, PostgreSQL, Angular, React, and Razor Pages. On the frontend, I have extensive experience with HTML, CSS, Bootstrap, JavaScript, jQuery, XML, AJAX, and TypeScript, allowing me to create responsive and dynamic user interfaces. On the backend, I excel in developing robust, scalable systems using ASP.NET Core, with a focus on efficient database management and integration through MS SQL and PostgreSQL. My ability to seamlessly integrate frontend and backend systems ensures the delivery of high-performance, user-friendly applications.',
      images:'mepic.jpg',
      logo:'web_dev_img.png'
     },
     {client_name:'BrainWave Matrix',
      title:'about us',
      desc:'Ours is a team of creatives that is brainstorming on great ideas, all. the. time.With our skills put together, you get an ensemble capable of doing anything and everything your brand needs.Brainwave Matrix Solutions pioneers the future of technology through innovative AI and machine learning solutions. With a relentless pursuit of excellence, we empower businesses to thrive in the digital era. Our dynamic team of experts harnesses cutting-edge technology to drive transformative outcomes for our clients. At Brainwave Matrix Solutions, we are not just shaping the future; we are redefining it.',
      images:'brainwave.jpeg',
      logo:'brainwave.jpeg'
     },
     
  ]

}
