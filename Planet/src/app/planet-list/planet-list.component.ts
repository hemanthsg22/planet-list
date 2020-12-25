import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app/app.service'
@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  planetList: any;
  favourateList:any[]=[];
  showFavor  = false;


  constructor(private appService:AppService) { }

  ngOnInit(): void {
    this.appService.getplanets().subscribe((result:any)=>{
      this.planetList = result;
    })
  }
  isChecked($event:any,data:any){
    if($event.target.checked) {
      this.showFavor = true
      this.favourateList.push(data)
    }
  }

}
