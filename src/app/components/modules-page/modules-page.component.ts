import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modules-page',
  templateUrl: './modules-page.component.html',
  styleUrls: ['./modules-page.component.scss']
})
export class ModulesPageComponent implements OnInit {
  showFirstModuleLink = true;
  showSecondModuleMessage = false;
  showThirdModuleMessage = false;
  showFourthModuleLink = true;

  constructor(private router: Router) { }

  ngOnInit() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      this.router.navigate(['/']);
    }
  }

  goto(url: string, blank?: boolean) {
    if (blank) {
      window.open(url, '_blank');
    } else {
      this.router.navigate([url]);
    }
  }

}
