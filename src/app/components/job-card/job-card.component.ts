import { Component, Input } from '@angular/core';
import { Job } from '../../interface/interface';
import { NgClass, NgFor } from '@angular/common';
import { JobSearchService } from '../../services/job-search.service';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent {
  @Input() job!: Job;

  constructor(public jobSearchService: JobSearchService) {}

  getImageUrl(imageName?: string) {
    return `../../../assets/${imageName}`;
  }

  jobMatchesTags(job: Job): boolean {
    const selectedTags = this.jobSearchService.myTags;
    if (selectedTags.length === 0) {
      return true;
    } else {
      return selectedTags.every(
        (tag) =>
          job.role === tag ||
          job.level === tag ||
          job.languages.includes(tag) ||
          job.tools.includes(tag)
      );
    }
  }

  filterBarToggle(tag: string) {
    const index = this.jobSearchService.myTags.indexOf(tag);
    if (index === -1) {
      this.jobSearchService.myTags.push(tag);
    } else {
      this.jobSearchService.myTags.splice(index, 1);
    }
  }
}
