import { Component, Input } from '@angular/core';
import { Job } from '../../interface/interface';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {

  @Input() job?:Job

}
