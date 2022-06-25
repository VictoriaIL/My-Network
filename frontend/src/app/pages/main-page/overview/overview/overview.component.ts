import {Component, OnDestroy, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {Subscription} from "rxjs";

import {BooksService} from "../books.service";
import {BookInterface} from "../../../../interfaces/book.interface";
import {NewBookComponent} from "../new-book/new-book.component";
import {EditBookComponent} from "../edit-book/edit-book.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, OnDestroy {

  private subscriptions = new Subscription();
  private isFavoriteModeActive = false;

  public books: BookInterface[] | undefined;
  @Output() trigger = true;


  constructor(private booksService: BooksService,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.subscriptions.add(
      this.booksService
        .getBooks()
        .subscribe((books) => {
          this.books = books;
        }));
    console.log(this.books)
  }

  deleteBook(id: string): void {
    this.subscriptions.add(
      this.booksService.deleteBook(id)
        .subscribe(_ => {
            this.books = this.books?.filter(el => id != el.book_id)
          }
        )
    )
  }

  addNewBook(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    // dialogConfig.width = '80vw';

    const dialogRef = this.dialog.open(NewBookComponent, dialogConfig);

    this.subscriptions.add(
      dialogRef.afterClosed().subscribe(book => {

        if (book) {
          this.books?.push(book);
        }
      })
    )
  }

  editBook(book: BookInterface): void {
    const dialogRef = this.dialog.open(EditBookComponent, {data: book, autoFocus: true});

    this.subscriptions.add(
      dialogRef.afterClosed().subscribe((updatedBook: BookInterface) => {
        const updatedBookId = updatedBook.book_id;

        this.books = this.books?.map(book => {
          if (book.book_id === updatedBookId) {
            return {...updatedBook};
          }

          return book;
        }, [])
      })
    )
  }


  favoriteFilter() {
    this.books = [];
    this.isFavoriteModeActive = !this.isFavoriteModeActive;

    if (this.isFavoriteModeActive) {
      this.subscriptions.add(
        this.booksService.getFavoriteBooksOnly()
          .subscribe((response) => {
            this.books = response;
          })
      )
      return;
    }

    this.subscriptions.add(
      this.booksService.getBooks()
        .subscribe((response) => {
          this.books = response;
        })
    )

  }

  checkScheme(scheme: string) {
    this.trigger = (scheme === 'grid');
    // scheme === 'grid' ? this.trigger = false : this.trigger = true;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
