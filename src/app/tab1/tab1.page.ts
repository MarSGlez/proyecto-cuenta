import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: Users[] = [];

  constructor(
    private db: DatabaseService
  ) {}

  ngOnInit() {
    this.db.getUsers().subscribe( user => {
      this.users = []
      user.forEach( user => {
        const item = new Users ( user.payload.doc.data() ) ;
        item.id =  user.payload.doc.id;
        this.users.push( item ) 
      })
    })
  }

}
