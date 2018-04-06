import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ItemService]
})
export class AdminComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  submitForm(title: string, price: number, location: string, username: string, itemImage: string) {
    var newItem: Item = new Item(itemImage,title, price, location, username);
        this.itemService.addItem(newItem);
  }
}
