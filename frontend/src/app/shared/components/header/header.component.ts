import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  changeTheme() {
    const htmlEl = document.querySelector('html');
    if (htmlEl!.classList.contains('light')) {
    htmlEl!.classList.remove('light');
    htmlEl!.classList.add('dark');
  }
    else {
      htmlEl!.classList.remove('dark');
      htmlEl!.classList.add('light');
    }
  }

}
