import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BlogerService, IUser } from '../bloger.service';

@Component({
  selector: 'app-bloger-list',
  templateUrl: './bloger-list.component.html',
  styleUrls: ['./bloger-list.component.css']
})
export class BlogerListComponent implements OnInit, OnDestroy {

  blogers$!: Observable<IUser[]>;

  blogers: IUser[] = [];

  // private subscription!: Subscription;

  constructor(private BlogerService: BlogerService) { }

  ngOnInit(): void {
    // this.subscription = this.BlogerService.getUsers$().subscribe(users => {
    //   this.customers = users;
    // })

    this.blogers$ = this.BlogerService.getUsers$();
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
