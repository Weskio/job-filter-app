import { Component } from '@angular/core';
import { JobCardComponent } from '../job-card/job-card.component';
import { JobDataService } from '../../services/job-data.service';
import { Job } from '../../interface/interface';
import { JobSearchService } from '../../services/job-search.service';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';

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
    public selectedTags: JobSearchService
  ) {}

  allJobs: Job[] = this.jobDataService.getJobs();
  jobs: Job[] = [];
  filteredJobs!: Job[];
  private subscription!: Subscription;

  // ngOnInit() {
  //   this.subscription = this.selectedTags.myTags$.subscribe((tags) => {
  //     if (tags.length === 0) {
  //       this.jobs = this.allJobs;
  //     } else {
  //       this.filteredJobs = this.allJobs.filter((job) =>
  //         this.jobMatchesTags(job, tags)
  //       );
  //       console.log(this.selectedTags.myTags);
  //       this.jobs = this.filteredJobs;
  //     }
  //   });
  // }

  fetchJobsBasedOnTags() {
    const tags = this.selectedTags.myTags;
    if (tags.length === 0) {
      this.jobs = this.allJobs;
    } else {
      this.filteredJobs = this.allJobs.filter((job) =>
        this.jobMatchesTags(job, tags)
      );
      this.jobs = this.filteredJobs;
    }
  }

  ngOnInit() {
    this.subscription = this.selectedTags.myTags$.subscribe((tags) => {
      this.fetchJobsBasedOnTags();
    });

    // Fetch jobs initially
    this.fetchJobsBasedOnTags();
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
