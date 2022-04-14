import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  public postForm: FormGroup
  
  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router
  ){
    this.postForm = this.formBuilder.group({
      title: [''],
      imageUrl: [''],
      text: ['']
    })
  }
  ngOnInit(): void {
    
  }
onSubmit(){
  this.postService.createPost(this.postForm.value);
  this.router.navigate(['home'])
}
}