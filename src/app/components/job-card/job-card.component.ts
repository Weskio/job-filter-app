import { Component, Input } from '@angular/core';
import { Job } from '../../interface/interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {

  @Input() job?:Job

  getImageUrl(imageName: any){
  return `../../../assets/${imageName}`
  }

}
