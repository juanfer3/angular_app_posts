import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Post } from '../models/Posts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  private postsUrl = 'http://localhost:3000/posts';
  // private postsUrl = 'https://api-rails-juanfer3.c9users.io/posts'
  private apiUrl = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=d6c8cd5b2e080637e0f3c77eeb023bf5&format=json';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.postsUrl);

    // return this.http.get<User[]>(this.apiMongo + '/users.json');
  }

  getPostId(id: number) {
    return this.http.get<Post>(this.postsUrl + '/' + id );
  }

  newPost(post: Post) {
    const json = JSON.stringify(post);
    const post_params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application]/json');
    return this.http.post<Post>(this.postsUrl   , post);

  }

  updatePost(post: Post) {
    const id = post.id;
    console.log(id);
    return this.http.put<Post>(this.postsUrl + '/' + id , post);
  }

  deletePost(id: number ) {
    return this.http.delete<Post>(this.postsUrl + '/' + id);
  }

}
