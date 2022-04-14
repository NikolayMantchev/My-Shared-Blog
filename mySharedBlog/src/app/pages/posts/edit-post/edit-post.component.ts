import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  public editForm: FormGroup
  postRef: any;
  postId = this.act.snapshot.paramMap.get('id');
  
  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ){
    this.editForm = this.formBuilder.group({
      // id: [''],
      title: [''],
      imageUrl: [''],
      text: ['']
    })
    console.log(this.editForm);
  }
  
  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id');    

    this.postService.getPostDoc(id).subscribe(res =>{
      this.postRef = res;
      this.editForm = this.formBuilder.group({
        title: [this.postRef.title],
        imageUrl: [this.postRef.imageUrl],
        text: [this.postRef.text]
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id')
    this.postService.updatePost(this.editForm.value, id);
    this.router.navigate(['posts'])
  }
}