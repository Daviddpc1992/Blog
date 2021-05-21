import { Component, OnInit } from '@angular/core';
import { Post } from '../interface/post.interface';
import {PostService} from '../post.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  
  constructor(private PostService: PostService) { }

  ngOnInit(): void {
  }

}
