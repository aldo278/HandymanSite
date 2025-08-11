import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-page',
  imports: [RouterLink],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent implements OnInit {
    constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {

    this.titleService.setTitle('Handyman Services | Repairs, Electrical, Painting & More');

    this.metaService.updateTag({
      name: 'description',
      content: 'Professional handyman services including general repairs, electrical work, painting, and drywall. Serving your area with quality craftsmanship and care.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'handyman services, home repairs, electrical work, painting, drywall, plumbing, carpentry'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Handyman Services | Quality Repairs & Maintenance'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'From minor fixes to major projects, our handyman services cover all your home repair needs.'
    });
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://doitrighthandymanllc.com/services'
    });
  }

}
