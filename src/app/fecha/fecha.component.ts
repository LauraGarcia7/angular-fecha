import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {
  CurrentDate: Date
  CurrentDate2: Date
  Segundo: number
  Minuto: number
  Hora: number
  DiaS: number
  intervalo: string
  

  constructor() {  
    this.CurrentDate=new Date
    setInterval(()=>{this.Cierre();}, 30000)
  }

  ngOnInit() {
  }

  Cierre(){
    this.CurrentDate2=new Date
    this.Segundo=this.CurrentDate2.getSeconds()
    this.Minuto=this.CurrentDate2.getMinutes()
    this.Hora=this.CurrentDate2.getHours()
    this.DiaS=this.CurrentDate2.getDay()
    console.log("Cierre", this.CurrentDate2 )
    if( this.Minuto==55 && this.DiaS==0 && this.Hora==23){
      console.log("ES HORA DEL CIERRE")
    }
  }
}