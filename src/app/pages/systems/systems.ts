import { Component } from '@angular/core';
import { NavBar } from "../../navbar/navbar";
import { ComingSoonComponent } from "../../coming-soon/coming-soon";

@Component({
  selector: 'app-systems',
  imports: [NavBar, ComingSoonComponent],
  templateUrl: './systems.html',
  styleUrl: './systems.scss',
})
export class SystemsComponent {

}
