import { Component, Input } from '@angular/core';
import { Job } from '../../interface/interface';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {

  @Input() job?:Job

  getImageUrl(imageName?: string){
  return `../../../assets/${imageName}`
  }

}
