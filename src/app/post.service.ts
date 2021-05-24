import { Injectable } from '@angular/core';
import { PostList } from '../app/db/post.bd';
import { Post } from '../app/interface/post.interface'



@Injectable({
  providedIn: 'root'
})
export class PostService {

  PostList: Post[];

  constructor() {
    this.PostList = PostList;
    
  }
  

  insert(Post): void{
    this.PostList.push(Post);
    console.log(this.PostList)
  }
 
  getAll(): Post[]{
    return PostList;
  }

  getCategory(pCategory: string):Post[] 
  {
    return PostList.filter((post) => {
      return post.categoria === pCategory;
    })
  }

}
