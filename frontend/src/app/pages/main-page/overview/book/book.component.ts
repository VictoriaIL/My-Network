import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BookInterface} from "../../../../interfaces/book.interface";
import {Subscription} from "rxjs";
import {BooksService} from "../books.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})


export class BookComponent implements OnInit, OnDestroy {

  @Input() book: BookInterface | undefined;
  @Input() trigger: boolean | undefined;

  @Output() onDeleteBook = new EventEmitter<string>();
  @Output() onEditBook = new EventEmitter<BookInterface>();

  private subscriptions = new Subscription();

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
  }

  onEditBookClick(book?: BookInterface) {
    this.onEditBook.emit(book);
  }

  toggleFavoriteField() {
    this.subscriptions.add(
      this.bookService.toggleFavoriteFieldOfBookById(this.book!.book_id, !this.book!.favorite)
        .subscribe((response) => {
          this.book = response;
        }))
  }

  onDeleteBookClick(bookId?: string): void {
    this.onDeleteBook.emit(bookId);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
