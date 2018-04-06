import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   appName = 'Sample App';
   showNavbar = false;
   constructor() { }

   ngOnInit() {

   }
   toggleNavbar() {
      this.showNavbar = this.showNavbar ? false : true;
   }
}
