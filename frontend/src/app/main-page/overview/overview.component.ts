import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {data} from "../../data";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @ViewChild("group") matButtonToggleGroup: ElementRef|undefined;
  @ViewChild("cardsWrapper") cardsWrapper: ElementRef|undefined;
  @ViewChild("bookInfoWrapper") bookInfoWrapper: ElementRef|undefined;


  public books = data;

  constructor() { }

  ngOnInit(): void {
  }

  checkScheme(scheme: string){
    switch (scheme) {
      case 'grid':
        this.cardsWrapper?.nativeElement?.classList.add('grid');
        this.bookInfoWrapper?.nativeElement?.classList.remove('overview__book-info-wrapper');

        break;
      case 'list':
        this.cardsWrapper?.nativeElement?.classList.remove('grid');
        this.bookInfoWrapper?.nativeElement?.classList.add('overview__book-info-wrapper');
        break;
    }
  }
}
