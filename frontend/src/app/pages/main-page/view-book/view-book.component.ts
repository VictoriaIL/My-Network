import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../overview/books.service";
import {BookInterface} from "../../../interfaces/book.interface";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {

  book: BookInterface | undefined;
  pictureSrc = 'https://phonoteka.org/uploads/posts/2021-04/1617816293_31-p-kniga-na-prozrachnom-fone-37.png';
  @ViewChild('pic') pic: ElementRef | undefined;


  constructor(private activatedRoute: ActivatedRoute,
              private booksService: BooksService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.booksService.getBookById(this.activatedRoute.snapshot.queryParams['id'])
      .subscribe((book) => {
        this.book = book;
      });

  }

  changeRoute() {
    this.router.navigate(['overview']);
  }

  checkBookLink(booklink?: string) {
    if (!booklink) return false;
    return booklink.slice(-3) === 'pdf';
  }

  changePic() {
    // @ts-ignore
    this.pic?.nativeElement?.src = this.pictureSrc;
  }

}
