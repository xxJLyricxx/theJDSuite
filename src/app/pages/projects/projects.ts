import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBar } from '../../navbar/navbar';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, NavBar],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {}