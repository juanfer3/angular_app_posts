import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PostsService } from '../servicios/posts.service';
import { Post } from '../models/Posts';



@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicePosts: PostsService
  ) { }


  editPost(form: NgForm) {

    const editPost: Post = {
      id: this.post.id,
      title: form.value.title,
      description: form.value.description
    };

    this.servicePosts.updatePost(editPost).subscribe(
      data => {
        alert(data);
      }
    )

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.servicePosts.getPostId(Number(id)).subscribe(
      data => {
        this.post = data;
        console.log(this.post);

      }
    )
  }

}
