import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {BookInterface} from "../../../../interfaces/book.interface";
import {Subscription} from "rxjs";
import {BooksService} from "../books.service";
import {Router} from '@angular/router';

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

    @ViewChild('pic') pic: ElementRef | undefined;

    public pictureSrc = 'https://phonoteka.org/uploads/posts/2021-04/1617816293_31-p-kniga-na-prozrachnom-fone-37.png';
    private subscriptions = new Subscription();

    constructor(private bookService: BooksService,
                private readonly router: Router) {
    }

    ngOnInit(): void {
    }

    changePic() {
        // @ts-ignore
        this.pic?.nativeElement?.src = this.pictureSrc;
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

    toggleReadField() {
        this.subscriptions.add(
            this.bookService.toggleReadFieldOfBookById(this.book!.book_id, !this.book!.read)
                .subscribe((response) => {
                    this.book = response;
                }))
    }

    onDeleteBookClick(bookId?: string): void {
        this.onDeleteBook.emit(bookId);
    }

    onViewBookClick(bookId?: string): void {
        this.router.navigate(['overview/view'], {queryParams: {id: bookId}})
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
