import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../components/carousel/carousel.component';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink, CarouselComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
