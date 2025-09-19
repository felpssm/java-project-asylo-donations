import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { 
    path: 'inicio', 
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'sobre', 
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'servicos', 
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  { 
    path: 'contato', 
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { 
    path: 'doadores', 
    loadComponent: () => import('./pages/donors/donors.component').then(m => m.DonorsComponent)
  },
  { 
    path: 'doacoes', 
    loadComponent: () => import('./pages/donations/donations.component').then(m => m.DonationsComponent)
  },
  { 
    path: 'nova-doacao', 
    loadComponent: () => import('./pages/new-donation/new-donation.component').then(m => m.NewDonationComponent)
  },
  { 
    path: 'novo-doador', 
    loadComponent: () => import('./pages/new-donor/new-donor.component').then(m => m.NewDonorComponent)
  },
  { 
    path: 'admin/login', 
    loadComponent: () => import('./pages/admin-login/admin-login.component').then(m => m.AdminLoginComponent)
  },
  { 
    path: 'admin', 
    loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/inicio' }
];