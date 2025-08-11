import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../components/carousel/carousel.component';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink, CarouselComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {

    this.titleService.setTitle('Project Gallery | Do It Right Handyman LLC | Portland, OR');


    this.metaService.updateTag({
      name: 'description',
      content: 'Browse our project gallery showcasing porch renovations, kitchen remodels, and large deck upgrades completed by Do It Right Handyman LLC in Portland, OR.'
    });


    this.metaService.updateTag({
      name: 'keywords',
      content: 'handyman gallery, porch renovation, kitchen remodel, deck upgrade, Portland OR handyman, home improvement photos'
    });


    this.metaService.updateTag({
      property: 'og:title',
      content: 'Project Gallery | Do It Right Handyman LLC'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'See before-and-after photos of porch, kitchen, and deck projects by Do It Right Handyman LLC in Portland, OR.'
    });
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://doitrighthandymanllc.com/gallery'
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://doitrighthandymanllc.com/main.jpeg'
    });
  }

}
