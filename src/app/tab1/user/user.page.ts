import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user={
    nombre:null,
    ubicacion:null,
    saldo:null
  }  
  

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  newUser(){
    this.db.addUser(this.user)
    .then(
      res => {
        this.router.navigate([""]);
      }
    )
    
  }

}
