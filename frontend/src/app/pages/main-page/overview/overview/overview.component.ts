import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {data} from "../../../../data";
import {BooksService} from "../books.service";
import {Subscription} from "rxjs";
import {BookInterface} from "../../../../interfaces/book.interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NewBookComponent} from "../new-book/new-book.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {

  private sub$ = new Subscription();
  public books: BookInterface[] | undefined;
  public trigger = true;


  constructor(private booksService: BooksService,
              private readonly dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.sub$.add(
      this.booksService
        .getBooks()
        .subscribe((books) => this.books = books));
    console.log(this.books)
  }

  deleteBook(id: string): void {
    this.sub$.add(
      this.booksService.deleteBook(id)
        .subscribe(_ => {
            this.books = this.books?.filter(el => id != el._id)
          }
        )
    )
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.width = '80vw';

    const dialogRef = this.dialog.open(NewBookComponent, dialogConfig);

    this.sub$.add(
      dialogRef.afterClosed().subscribe(board => {
        if (board) {
          this.books?.push(board);
        }
      })
    )
  }

  checkScheme(scheme: string) {
    scheme === 'grid' ? this.trigger = false : this.trigger = true;
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
