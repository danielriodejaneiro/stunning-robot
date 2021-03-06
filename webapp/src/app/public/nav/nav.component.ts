import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'calc-nav',
  template: `
    <nav class="calc-flex-r calc-f1">
      <a routerLink="/" class="calc-f1">
        Back to homepage
      </a>
      <a routerLink="/login" class="calc-f1">
        Login/Logout
      </a>
    </nav>
  `,
  styles: [`
    nav {
      padding: 1rem;
    }
  `]
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
