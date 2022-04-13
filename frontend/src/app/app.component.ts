import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user: any;

  constructor(private http: HttpClient){}

  showUsers(){

      this.http.get('http://localhost:5000/api/users').subscribe((data: any) => this.user = JSON.stringify(data));
  }

}
