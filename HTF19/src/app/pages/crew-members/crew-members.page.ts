import { Component, OnInit } from '@angular/core';
import {CrewHttpService} from 'src/app/http/crew-http.service';
import {Crew} from 'src/app/interfaces/Crew';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NumberValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-crew-members',
  templateUrl: './crew-members.page.html',
  styleUrls: ['./crew-members.page.scss'],
})
export class CrewMembersPage implements OnInit {

  crewList:Crew[];
  lat:number;
  lng:number;


  constructor(private screwService:CrewHttpService,private alertCtrl: AlertController, public geolocation: Geolocation) { }

  ngOnInit() {

    this.screwService.getCrews().subscribe((data:any[])=>{
      this.crewList = data;
    })

  }


  async addMemberPopup() {
    const alert = await this.alertCtrl.create({
      header: 'Add Member',
      inputs: [
        {
          name: 'CrewName',
          placeholder: 'Crew Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: (alertData) => {
           this.geolocation.getCurrentPosition().then((resp)=>{
             
              this.lat =  resp.coords.latitude;
              this.lng = resp.coords.longitude;

           })
           //post
           this.screwService.postCrew(alertData.CrewName,this.lat,this.lng);

           //call again
           this.screwService.getCrews().subscribe((data:any[])=>{
            this.crewList = data;
          })

           console.log('Confirm Okay');
        }

        }]
    });

    await alert.present();
  }

}
