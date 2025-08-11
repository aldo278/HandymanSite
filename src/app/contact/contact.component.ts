import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
    constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Contact Us | Do It Right Handyman LLC | Portland, OR');

    this.metaService.updateTag({
      name: 'description',
      content: 'Get in touch with Do It Right Handyman LLC in Portland, OR for reliable home repairs, renovations, and handyman services. Call (503) 803-4222 or send us a message today.'
    });

    
    this.metaService.updateTag({
      name: 'keywords',
      content: 'contact handyman Portland, handyman phone number, handyman email, home repair contact, Do It Right Handyman LLC'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Contact Do It Right Handyman LLC | Portland, OR'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Reach out to Do It Right Handyman LLC for free quotes, reliable service, and quality workmanship in Portland, OR.'
    });
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: 'https://doitrighthandymanllc.com/contact'
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: 'https://doitrighthandymanllc.com/assets/main.jpeg'
    });
  }

}
