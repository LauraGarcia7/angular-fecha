import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {
  CurrentDate: Date
  Segundo: number
  Minuto: number
  Hora: number
  DiaS: number
  intervalo: string
  

  constructor() {  
    this.CurrentDate=new Date
    this.Fecha()
    this.Cierre()
  }

  ngOnInit() {
  }

  Fecha(){
    console.log("CurrentDate ", this.CurrentDate)
    this.Segundo=this.CurrentDate.getSeconds()
    this.Minuto=this.CurrentDate.getMinutes()
    this.Hora=this.CurrentDate.getHours()
    this.DiaS=this.CurrentDate.getDay()
  }

  Cierre(){
    console.log("Cierre", this.CurrentDate)
  }
}