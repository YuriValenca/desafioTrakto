import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modules-page',
  templateUrl: './modules-page.component.html',
  styleUrls: ['./modules-page.component.scss']
})
export class ModulesPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      this.router.navigate(['/']);
    }
  }

}
