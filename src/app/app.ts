import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { NavBar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [NavBar],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true
})
export class App {
  protected readonly title = signal('jd-suite-angular');
}
