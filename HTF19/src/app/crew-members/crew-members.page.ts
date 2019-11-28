import { Component, OnInit } from '@angular/core';
import {CrewHttpService} from '../http/crew-http.service';
import {Crew} from '../interfaces/Crew';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-crew-members',
  templateUrl: './crew-members.page.html',
  styleUrls: ['./crew-members.page.scss'],
})
export class CrewMembersPage implements OnInit {

  crewList:Crew[];

  constructor(private screwService:CrewHttpService,private alertCtrl: AlertController) { }

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
          name: 'Crew Name',
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
          handler: () => {
            // this.geoLocation.getCurrentPosition(result=>{
            //   console.log(result.coords.latitude);
            //   console.log(result.coords.longitude);
            // })
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }




}
