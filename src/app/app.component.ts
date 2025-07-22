import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `

    <div class="min-h-screen flex flex-col">
      <app-header/>

      <main class="flex-1">

        <router-outlet />

      </main>

      <app-footer />
    </div>
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
      
    `
   
  ],
})
export class AppComponent {
  title = 'HandymanSite';
}
