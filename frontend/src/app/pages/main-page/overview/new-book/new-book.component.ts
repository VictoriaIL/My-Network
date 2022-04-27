import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {BookInterface} from "../../../../interfaces/book.interface";
import {BooksService} from "../books.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  public formGroup: FormGroup | any;
  private $sub = new Subscription();

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<NewBookComponent>,
              private booksService: BooksService,) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      author: ['', [Validators.required]],
      about: ['', [Validators.required]],
      picture: ['', [Validators.required]],
    });
  }

  addNewBook(): void {

    if (this.formGroup?.invalid || !this.formGroup) return;

    const book = {
      "name": this.formGroup.value.name,
      "author": this.formGroup.value.author,
      "about": this.formGroup.value.about,
      "picture": this.formGroup.value.picture
    }

    this.$sub.add(
      this.booksService.addBook(book as BookInterface)
        .subscribe(
          (book: BookInterface) => {
            this.dialogRef.close(book)
          }
        )
    )
  }


}
