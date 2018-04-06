import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [ItemService]
})
export class FrontPageComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;



  constructor(
    private router: Router,
    private itemService: ItemService) { }

    ngOnInit() {
      this.items = this.itemService.getItems();
    }

    goToDetailPage(clickedItem) {
      this.router.navigate(['items', clickedItem.$key]);
    };
}
