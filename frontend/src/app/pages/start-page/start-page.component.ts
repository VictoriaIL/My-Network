import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  ngOnInit(): void {
    this.getUsers();
  }

  user: any;

  constructor(private http: HttpClient) {
  }

  showUsers() {

    this.http.get('http://localhost:5000/api/users').subscribe((data: any) => this.user = JSON.stringify(data));
  }


  people: any;



  getPeoples(): Observable<any> {
    return this.http.get('https://swapi.dev/api/people').pipe(
      tap((x:any) => console.log(x.results))
    );
  }


  getUsers(): void {
   this.getPeoples().subscribe((res) => {
       this.people = res.results;
     console.log( this.people);

   });
  }

}
