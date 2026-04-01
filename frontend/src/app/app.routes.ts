import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            { path: '', component: Home },
            { path: 'login', component: Login},
            {path: 'dashboard', component: Dashboard}
        ],
    },
];
