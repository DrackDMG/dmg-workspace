import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DmgSideMenu, TitleColor } from 'dmg-side-menu';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DmgSideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isAuthenticated = signal(true);
  onSignOut() {
    this.isAuthenticated.set(false);
  }
  onSignIn() {
    this.isAuthenticated.set(true);
  }

  TitleColor =  TitleColor
}
