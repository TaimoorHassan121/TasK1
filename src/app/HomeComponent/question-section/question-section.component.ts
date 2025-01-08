import { Component } from '@angular/core';
import { Router,RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-question-section',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './question-section.component.html',
  styleUrl: './question-section.component.css'
})
export class QuestionSectionComponent {
    constructor(private router: Router) {}

}
