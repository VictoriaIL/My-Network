import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {data} from "../../../data";
import {OverviewService} from "./overview.service";
import {Subscription} from "rxjs";
import {BookInterface} from "../../../interfaces/book.interface";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  private sub$ = new Subscription();
  public books: BookInterface[] | undefined;
  public trigger = true;


  constructor(private overviewService: OverviewService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.sub$.add(
      this.overviewService
        .getBooks()
        .subscribe((books) => this.books = books));
    console.log(this.books)
  }

  checkScheme(scheme: string){
    scheme === 'grid' ? this.trigger = false : this.trigger = true;
  }
}
