import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BooksService} from "../overview/books.service";
import {BookInterface} from "../../../interfaces/book.interface";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  book: BookInterface | undefined;
  @ViewChild('pic') pic: ElementRef | undefined;


  constructor(private activatedRoute: ActivatedRoute,
              private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBookById(this.activatedRoute.snapshot.queryParams['id'])
    .subscribe((book) => {
      this.book = book;
    });

  }

  changePic() {
    // @ts-ignore
    this.pic?.nativeElement?.src = this.pictureSrc;
  }

}
