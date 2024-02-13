import { Component } from '@angular/core';
import { JobSearchService } from '../../services/job-search.service';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css',
})
export class FilterBarComponent {
  constructor(public job_search: JobSearchService) {}

  deleteTag(tag: string) {
    const index = this.job_search.myTags.indexOf(tag);
    this.job_search.myTags.splice(index, 1);
  }

  clearAll() {
    this.job_search.myTags = [];
  }
}
