import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SpringsecurityPrComponent } from './pages/articles/springsecurity-pr/springsecurity-pr.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'spring_security_project',
        component: SpringsecurityPrComponent
    }
];
