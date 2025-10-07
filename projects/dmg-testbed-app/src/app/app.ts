import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DmgSideMenu } from 'dmg-side-menu';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DmgSideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dmg-testbed-app');
}
