import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase  from 'firebase/app';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public recaptchaVerifier:firebase.auth.RecaptchaVerifier;

  phone_number: Number;
  area_code: string;


  constructor(

    private afAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController,
    ) { }

  ngAfterViewInit(){
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
    'size':'invisible',
    'callback':function(response){
      console.log('recaptcha resolved auto');
    }
    });
  }
  


  ngOnInit() {
    
  }

  savePhone() {
    this.afAuth.signInWithPhoneNumber(this.area_code+this.phone_number,this.recaptchaVerifier).then(
      (data) => {
        console.log('success',data)
        this.askCode( data );
      },
      (err) => {
        console.log('err',err)
      }
    )
    
  }

  async askCode( smsRequest: any) {
    const alert = await this.alertController.create({
      header: 'Verificacion',
      subHeader: 'Por favor introduce el codigo que hemos enviado por SMS',
      inputs: [
        {
          name: 'confirmationCode',
          placeholder: 'Codigo SMS'
        }
      ],
      buttons: [{
        text: 'Validar',
        handler:data =>{
          console.log(data.confirmationCode);
          smsRequest.confirm( data.confirmationCode ).then((result) => {
            console.log('signed in',result);
            
           
            this.router.navigate(['']);
  
          }).catch(function(error){
            console.error('error',error);
          });
        }
      }]
    });

    await alert.present();
  }


}
