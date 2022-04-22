import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {data} from "../../data";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public books = data;
  public trigger = true;

  constructor() { }

  ngOnInit(): void {
  }

  checkScheme(scheme: string){
    scheme === 'grid' ? this.trigger = false : this.trigger = true;
  }
}
