import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { PostService } from 'src/app/services/post.service';
import { IPost } from '../../../shared/IPost';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
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
 
removePost (Post : IPost){
  if (confirm("Confirm Delete" + Post.title)) {
    this.postService.deletePost(Post)
  }

}

}
