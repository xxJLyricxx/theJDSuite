import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { JournalComponent } from './pages/journal/journal';
import { ProjectsComponent } from './pages/projects/projects';
import { SystemsComponent } from './pages/systems/systems';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'journal',
    component: JournalComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'systems',
    component: SystemsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];