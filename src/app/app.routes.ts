import { Routes } from '@angular/router';
import { HomeComponent } from './pages/main/components/home/home.component';
import { AboutComponent } from './pages/main/components/about/about.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    }
];
