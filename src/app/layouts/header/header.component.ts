import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  links = ['Home', 'Features', 'Pricing', 'Contact Us'];
  selectedLink = 0;
  showMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  test(i: number) {
    this.selectedLink = i;
  }

}
