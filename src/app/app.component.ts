import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { JobCardComponent } from "./components/job-card/job-card.component";
import { AllJobsComponent } from "./components/all-jobs/all-jobs.component";
import { FilterBarComponent } from "./components/filter-bar/filter-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, JobCardComponent, AllJobsComponent, FilterBarComponent]
})
export class AppComponent {
  title = 'job-filter-app';
}
