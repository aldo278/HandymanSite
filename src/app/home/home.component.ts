import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { homeMetaData } from './home.metadata';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle(homeMetaData.title);

    this.metaService.updateTag({ name: 'description', content: homeMetaData.description });
    this.metaService.updateTag({ name: 'keywords', content: homeMetaData.keywords.join(', ') });

    this.metaService.updateTag({ property: 'og:title', content: homeMetaData.title });
    this.metaService.updateTag({ property: 'og:description', content: homeMetaData.description });
    this.metaService.updateTag({ property: 'og:image', content: homeMetaData.image });
    this.metaService.updateTag({ property: 'og:url', content: homeMetaData.url });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
  }

}
