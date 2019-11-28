import { Component, OnInit } from '@angular/core';
import {CrewHttpService} from '../http/crew-http.service'
import {Crew} from '../interfaces/Crew'
@Component({
  selector: 'app-crew-members',
  templateUrl: './crew-members.page.html',
  styleUrls: ['./crew-members.page.scss'],
})
export class CrewMembersPage implements OnInit {

  crewList:Crew[];

  constructor(private screwService:CrewHttpService) { }

  ngOnInit() {

    this.screwService.getCrews().subscribe((data:any[])=>{
      this.crewList = data;
    })

  }


}
