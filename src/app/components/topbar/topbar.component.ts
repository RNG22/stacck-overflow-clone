import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public userService:UserService, private router:Router) { }

  ngOnInit(): void {
    
  }
  login(){
    if(this.userService.user == undefined){
      let str = localStorage.getItem('user');
      if(str != null){
        this.userService.user = JSON.parse(str);
      }
      else{
        this.router.navigate(['/login']);
      }

    }
  }
register(){
  this.userService.user = undefined;
    this.router.navigate(['/create-account']);
    localStorage.clear();
}
  logout(){
    this.userService.user = undefined;
    this.router.navigate(['/login']);
    localStorage.clear();
  }

}
