import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiComponent } from '@angular-monorepo/ui';
import { TableComponent } from '@angular-monorepo/ui';
@Component({
  imports: [NxWelcomeComponent, RouterModule, UiComponent, TableComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'control-tower';
}
