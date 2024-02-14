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
    private jobDataService: JobDataService
  ) {}
 
  jobs: Job[] = this.jobDataService.getJobs();
}
