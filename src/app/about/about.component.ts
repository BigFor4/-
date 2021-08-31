import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerhttpService } from '../Services/serverhttp.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public name = '';
  public age;
  public comments='';
  public posts: any;
  constructor(private common: CommonService,
    private serverHttp: ServerhttpService) { 
    this.age = common.age;
  }
  ngOnInit(): void {
    this.serverHttp.getProfile().subscribe((data)=>{
      console.log(data);
      this.name = data.name;
      this.age = data.age;
    })
    this.serverHttp.getComment().subscribe((data)=>{
      console.log('comments',data);
      this.comments = data;
    })
    this.serverHttp.getPosts().subscribe((data)=>{
      console.log('posts',data);
      this.posts = data;
    })
  }
  public addPost() {
    const newData = { title: 'testing', author: 'author testing' };
    this.serverHttp.addPosts(newData).subscribe((data) => {
      console.log('addPost', data);
      this.posts.push(data);
    });
  }
  public tangTuoi(){
    this.common.age++;
    this.age = this.common.age;
  }

}
