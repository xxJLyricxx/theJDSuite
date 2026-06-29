import { Component } from '@angular/core';
import { NavBar } from "../../navbar/navbar";
import { ComingSoonComponent } from "../../coming-soon/coming-soon";
@Component({
  selector: 'app-about',
  imports: [NavBar, ComingSoonComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent {

}
