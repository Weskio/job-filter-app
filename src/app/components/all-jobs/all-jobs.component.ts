import { Component } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';
import { JobDataService } from '../../services/job-data.service';
import { Job } from '../../interface/interface';
import { JobSearchService } from '../../services/job-search.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-jobs',
  standalone: true,
  templateUrl: './all-jobs.component.html',
  styleUrl: './all-jobs.component.css',
  imports: [JobCardComponent, NgFor],
})
export class AllJobsComponent {
  constructor(
    private jobDataService: JobDataService,
    private jobSearchService: JobSearchService
  ) {}

  allJobs: Job[] = [];
  jobs: Job[] = [];
  selectedTags: string[] = [];
  filteredJobs!: Job[];

  ngOnInit() {
    this.allJobs = this.jobDataService.getJobs();
    this.selectedTags = this.jobSearchService.myTags;
    this.getFilteredJobs();
    //   console.log(this.jobSearchService.myTags)
  }

  getFilteredJobs() {
    if (this.selectedTags.length === 0) {
      this.jobs = this.allJobs;
    } else {
      this.filteredJobs = this.allJobs.filter((job) =>
        this.jobMatchesTags(job, this.selectedTags)
      );
      console.log(this.jobs);
    }
  }

  jobMatchesTags(job: Job, selectedTags: string[]): boolean {
    if (selectedTags.includes(job.role)) {
      return true;
    }
    if (selectedTags.includes(job.level)) {
      return true;
    }
    if (job.languages.some((language) => selectedTags.includes(language))) {
      return true;
    }
    if (job.tools.some((tool) => selectedTags.includes(tool))) {
      return true;
    }

    return false;
  }
}
