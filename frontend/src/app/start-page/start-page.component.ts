import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  ngOnInit(): void {
  }

  user: any;

  constructor(private http: HttpClient) {
  }

  showUsers() {

    this.http.get('http://localhost:5000/api/users').subscribe((data: any) => this.user = JSON.stringify(data));
  }

}
