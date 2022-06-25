import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";


import {Subscription} from "rxjs";
import {BookInterface} from "../../../../interfaces/book.interface";
import {BooksService} from "../books.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup | any;
  private subscription = new Subscription();

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<NewBookComponent>,
              private booksService: BooksService,) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      about: ['', [Validators.required]],
      booklink: [''],
      picture: ['', []],
      favorite: [false, []],
      read: [false, []]
    });
  }

  addNewBook(): void {

    if (this.formGroup?.invalid || !this.formGroup) return;

    const book = {
      "title": this.formGroup.value.title,
      "author": this.formGroup.value.author,
      "about": this.formGroup.value.about,
      "picture": this.formGroup.value.picture,
      "booklink": this.formGroup.value.booklink,
      "favorite": this.formGroup.value.favorite || false,
      "read": this.formGroup.value.read || false
    }

    this.subscription.add(
      this.booksService.addBook(book)
        .subscribe(book => {
            this.dialogRef.close(book);
          }
        )
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
