import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() dark: boolean = true;
  currentDate: Date = new Date();

  constructor(private router: Router) { }

  changeEnv() {
    this.router.navigate(['/modules']);
  }
}
