import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutor';

  subject_list = [
    "Chemistry", "Biology", "Pre-Algebra", "Algebra 1", "Algebra 2", "Pre-Calculus", "Calculus A/B", "Calculus B/C", 
    "Computer Science", "General Homework", "European History"
  ]
}
