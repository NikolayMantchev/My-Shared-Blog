import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, switchMap, tap } from 'rxjs';
import { BlogerService, IUser } from '../bloger.service';

@Component({
  selector: 'app-bloger-profile',
  templateUrl: './bloger-profile.component.html',
  styleUrls: ['./bloger-profile.component.css']
})
export class BlogerProfileComponent implements OnInit {
  id: number = 0;

  bloger!: IUser;
  isLoading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private BlogerService: BlogerService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap(params => {
          this.id = +params['id'];

          this.titleService.setTitle('Profile ' + this.id);
          this.isLoading = true;
        }),
        switchMap(params => {
          return this.BlogerService.getUserById$(params['id'])
        })
      )
      .subscribe({
        next: user => {
          this.bloger = user;
          this.isLoading = false;
        },
        error: error => {
          this.isLoading = false;
          console.error('error happened', error);
        }
      })
  }

}
