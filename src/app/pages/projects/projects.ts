import { Component } from '@angular/core';
import { NavBar } from "../../navbar/navbar";
import { ComingSoonComponent } from "../../coming-soon/coming-soon";

@Component({
  selector: 'app-projects',
  imports: [NavBar, ComingSoonComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {

}
