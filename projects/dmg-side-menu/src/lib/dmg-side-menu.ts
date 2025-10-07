import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}
@Component({
  selector: 'lib-dmg-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dmg-side-menu.html',
  styles: ``
})
export class DmgSideMenu {
  isAuthenticated = input(false);

  titleColor = input<TitleColor>(TitleColor.purple);
  title = input<string>('DMG');
  subtitle = input<string>('Corp');

  onSignOut = output();
  onSignIn = output();
}
