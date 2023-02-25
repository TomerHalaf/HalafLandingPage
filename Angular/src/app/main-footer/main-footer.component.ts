import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from '../shared/services/news.service';

@Component({
  selector: 'halaf-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent {
    links$: Observable<string>;
    
    constructor(private newsService: NewsService){
        this.links$ = this.newsService.getNewsLinks();
    };
}
