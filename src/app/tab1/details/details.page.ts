import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  id: string;
  user: Users[] = [];
  users: Users
  
  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService
    
  ) { 

    this.id = this.route.snapshot.paramMap.get('userId'); 
    this.db.getUserById( this.id ).subscribe(
      usuario => {
        const item : Users = usuario.payload.data() as Users ;
        this.user.push( item ) 
        this.user.slice(0,1)
        
      }
    );


  }

  ngOnInit() {
    
  }

}
