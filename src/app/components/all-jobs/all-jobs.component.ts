import { Component } from '@angular/core';
import { JobCardComponent } from "../job-card/job-card.component";
import { JobDataService } from '../../services/job-data.service';
import { Job } from '../../interface/interface';

@Component({
    selector: 'app-all-jobs',
    standalone: true,
    templateUrl: './all-jobs.component.html',
    styleUrl: './all-jobs.component.css',
    imports: [JobCardComponent]
})
export class AllJobsComponent {

    constructor(private job: JobDataService){}

    jobs: Job[] = this.job.getJobs()

}
