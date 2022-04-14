import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { PostService } from 'src/app/services/post.service';
import { IPost } from '../../../shared/IPost';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {
 Post!: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPostList()
    .subscribe(res =>{
      this.Post = res.map(e => {
        return{
          id : e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as IPost;
      })
    })
  }

}


