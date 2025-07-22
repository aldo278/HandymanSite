import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./home/home.component').then(
            m => m.HomeComponent
        );
    }
}, {
    path: 'services',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./services-page/services-page.component').then(
            m => m.ServicesPageComponent
        );
    }
}, {
    path: 'gallery',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./gallery/gallery.component').then(
            m => m.GalleryComponent
        );
    }
}, {
    path: 'contact',
    pathMatch: 'full',
    loadComponent: () => {
        return import('./contact/contact.component').then(
            m => m.ContactComponent
        );
    }

    

}];




// export const routes: Routes = [
//     {
//         path: '',
//         pathMatch: 'full',
//         loadComponent: () => {
//             return import('./home/home.component').then(
//                 m => m.HomeComponent
//             )
//         }
//     },
//     {
//         path: 'todos',
//         loadComponent: () => {
//             return import('./todos/todos.component').then(
//                 m => m.TodosComponent
//             )
//         }
//     }
// ];
