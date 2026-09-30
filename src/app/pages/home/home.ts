import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBar } from '../../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [NavBar, RouterLink, RouterLinkActive],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {

}
