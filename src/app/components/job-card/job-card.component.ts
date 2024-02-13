import { Component, Input } from '@angular/core';
import { Job } from '../../interface/interface';
import { NgClass, NgFor } from '@angular/common';
import { JobSearchService } from '../../services/job-search.service';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {

  @Input() job!:Job

  getImageUrl(imageName?: string){
  return `../../../assets/${imageName}`
  }

  constructor(private job_search: JobSearchService){}

  filterBarToggle(tag: string){
   const index = this.job_search.myTags.indexOf(tag)

   if(index===-1){
    this.job_search.myTags.push(tag)
   }
   else{
    this.job_search.myTags.splice(index,1)
   }
  }

}
