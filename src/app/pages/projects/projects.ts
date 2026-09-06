import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBar } from '../../navbar/navbar';
import { ComingSoonComponent } from '../../coming-soon/coming-soon';

type JournalStatus = 'Shipped' | 'In progress' | 'Research';
interface JournalEntry { id: number; date: string; title: string; summary: string; project: string; status: JournalStatus; tags: string[]; duration: string; }

@Component({
  selector: 'app-systems',
  imports: [NavBar, ComingSoonComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {

}