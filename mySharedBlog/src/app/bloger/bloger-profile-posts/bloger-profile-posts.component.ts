import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogerService, IPost } from '../bloger.service';

@Component({
  selector: 'app-bloger-profile-posts',
  templateUrl: './bloger-profile-posts.component.html',
  styleUrls: ['./bloger-profile-posts.component.css']
})
export class BlogerProfilePostsComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private blogerService: BlogerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.parent!.snapshot.params['id'];
    this.blogerService.getPostsByUserId$(id).subscribe(posts => {
      this.posts = posts;
    })

    // this.activatedRoute.data.subscribe((data) => {
    //   console.log('data',data);
    //   this.posts = data['posts'];
    // })
  }

}
