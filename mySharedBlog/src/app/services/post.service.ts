import { Injectable } from '@angular/core';
import { IPost } from "../shared/IPost";

import { AngularFirestore } from "@angular/fire/compat/firestore";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore: AngularFirestore){}

getPostDoc(id : any){
  return this.angularFirestore
  .collection("posts")
  .doc(id)
  .valueChanges()
}

getPostList(){
  return this.angularFirestore
  .collection("posts")
  .snapshotChanges()
}

createPost(post: IPost){  
  return new Promise<any>((resolve, reject) => {
    this.angularFirestore
    .collection("posts")
    .add(post)
    .then(response => {console.log(response)}, error => reject(error))
  })
}

deletePost(post: any){
return this.angularFirestore
.collection("posts")
.doc(post.id)
.delete()
}

updatePost(post: IPost, id: any){
  return this.angularFirestore
  .collection("posts")
  .doc(id)
  .update({
    title: post.title,
    imageUrl: post.imageUrl,
    text: post.text
  })
}

}
