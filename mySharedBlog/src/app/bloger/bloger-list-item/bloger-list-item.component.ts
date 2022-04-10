import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../bloger.service';

@Component({
  selector: 'app-bloger-list-item',
  templateUrl: './bloger-list-item.component.html',
  styleUrls: ['./bloger-list-item.component.css']
})
export class BlogerListItemComponent implements OnInit {

  @Input() item!: IUser;

  ngOnInit(): void {
   
  }

}
