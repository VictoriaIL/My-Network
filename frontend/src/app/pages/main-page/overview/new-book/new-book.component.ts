import {Component, OnInit} from '@angular/core';
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
export class NewBookComponent implements OnInit {

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
      picture: ['', [Validators.required]],
      favorite: [''],
    });
  }

  addNewBook(): void {

    if (this.formGroup?.invalid || !this.formGroup) return;

    const book = {
      "title": this.formGroup.value.title,
      "author": this.formGroup.value.author,
      "about": this.formGroup.value.about,
      "picture": this.formGroup.value.picture,
      "favorite": this.formGroup.value.favorite || false
    }

    this.subscription.add(
      this.booksService.addBook(book as BookInterface)
        .subscribe(
          (book: BookInterface) => {
            this.dialogRef.close(book)
          }
        )
    )
  }


}
