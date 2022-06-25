import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BooksService} from "../books.service";
import {BookInterface} from "../../../../interfaces/book.interface";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  public formGroup: FormGroup | any;
  private subscription = new Subscription();


  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<EditBookComponent>,
              private booksService: BooksService,
              @Inject(MAT_DIALOG_DATA) public book: BookInterface) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: [this.book.title, [Validators.required]],
      book_id: [this.book.book_id, [Validators.required]],
      author: [this.book.author, [Validators.required]],
      about: [this.book.about, [Validators.required]],
      booklink: [this.book.booklink],
      picture: [this.book.picture],
      favorite: [this.book.favorite],
      read: [this.book.read]
    });

  }

  editBook(): void {

    if (this.formGroup?.invalid || !this.formGroup) return;

    // const book: BookInterface = {
    //   book_id: this.book.book_id,
    //   title: this.formGroup.value.title,
    //   favorite: this.formGroup.value.favorite,
    //   read: this.formGroup.value.read,
    //   booklink: this.formGroup.value.booklink,
    //   author: this.formGroup.value.author,
    //   about: this.formGroup.value.about,
    //   picture: this.formGroup.value.picture
    // }
    const book:BookInterface = this.formGroup.getRawValue();
    console.log(book)
    this.subscription.add(
      this.booksService.updateBook(book)
        .subscribe(
          (updatedBook: BookInterface) => {
            this.dialogRef.close(updatedBook);
          }
        )
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
