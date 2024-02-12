import { Component } from '@angular/core';
import { JobCardComponent } from "../job-card/job-card.component";

@Component({
    selector: 'app-all-jobs',
    standalone: true,
    templateUrl: './all-jobs.component.html',
    styleUrl: './all-jobs.component.css',
    imports: [JobCardComponent]
})
export class AllJobsComponent {

}
