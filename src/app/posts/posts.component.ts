

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

/**Models */
import { Post } from '../models/Posts';

/**servicio */
import { PostsService } from '../serivicios/posts.service';




@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Post[];
  public post_only: Post;
  constructor(private servicePosts: PostsService) { }

  btn_show(id) {

    this.servicePosts.getPostId(id).subscribe(
      data => {
        this.post_only = data;
        alert('este es el Post =' + this.post_only.title);
        console.log(this.post_only.title);

      }
    );

  }

  btn_delete(post) {
    alert('btn delete');
    this.servicePosts.deletePost(post.id).subscribe(
      data =>{
        const pos = this.posts.indexOf(post)
        console.log(pos);
        
        this.posts.splice(pos, 1)
        console.log(data);
        
      }
    )
  }

  createPost(form: NgForm) {
    console.log('data insertions');
    
    console.log(form.value);
    

    const newPost: Post = {
      title: form.value.title,
      description: form.value.description
    };

    this.servicePosts.newPost(newPost).subscribe(
      data => {
        this.posts.push(data);
        console.log(data);

      }
    );

  }
    
  

  ngOnInit() {

    this.servicePosts.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      }

    );


  }

}
