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

      <main class="flex-1 max-w-7xl mx-auto px-4 py-12 space-y-20 bg-slate-50 text-slate-800 font-sans">

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

      html {
        scroll-behavior: smooth;
      }


      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out forwards;
      }
      .animate-fadeInUp {
        opacity: 0;
        animation: fadeIn 1s ease-out forwards;
      }


      
    `
  ],
})
export class AppComponent {
  title = 'HandymanSite';
}
