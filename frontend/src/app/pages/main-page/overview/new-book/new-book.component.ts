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
      picture: ['', []],
      favorite: [false, []],
      read: [false, []]
    });
  }

  addNewBook(): void {

    if (this.formGroup?.invalid || !this.formGroup) return;

    // let image = document.getElementById('MyPicture');
    // image.onerror = function () {
    //   alert('error loading ' + this.src);
    //   this.src = 'error.png'; // place your error.png image instead
    // };
    //
    // image.src = 'non-existing.jpg';
    // https://kartinkin.net/uploads/posts/2022-02/1645775622_4-kartinkin-net-p-knigi-na-prozrachnom-fone-kartinki-4.png
    const book = {
      "title": this.formGroup.value.title,
      "author": this.formGroup.value.author,
      "about": this.formGroup.value.about,
      "picture": this.formGroup.value.picture,
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
