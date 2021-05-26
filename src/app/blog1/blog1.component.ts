import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post.interface';
import { PostList } from '../db/post.bd'
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.css']
})
export class Blog1Component implements OnInit {

  PostList: Post[]
  mostrar: any;


  constructor(private PostService: PostService) {

    this.mostrar = {display: 'none'}

  }
  
  Cambiarmostrar() {
    this.mostrar.display = 'block'
  }

  ngOnInit(): void {
    this.PostList = this.PostService.getAll();
   
  }
  onChange($event) {
    if ($event.target.value === 'todos') {

      this.PostList = this.PostService.getAll();

    } else {

      this.PostList = this.PostService.getCategory($event.target.value);
    }

  }
}
