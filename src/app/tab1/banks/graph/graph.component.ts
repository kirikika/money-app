import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subject, delay, map, takeUntil } from 'rxjs';
import { ICard, ICardView } from './model/graph.model';
import { GraphService } from './services/graph.service';
import * as d3 from "d3";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent  implements OnInit {
  public cardSpents: ICardView[]=[]
  public gettingСoordinates: any[] = []
  public coordinates: any[] = []
  private subscriber$: Subject<null> = new Subject<null>();
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private axisWidth = this.width - 2 * this.margin;
  private axisHeight = this.height - 2 * this.margin;
  private offset = 50;

  constructor(
    public datePipe: DatePipe,
    private _routerCard: Router,
    private _graphService: GraphService
  ) {

  }


  public sortedSpent () {
    if (this.cardSpents.length>1) {
      this.cardSpents.sort((a,b) => a.time.getTime()-b.time.getTime())
      let spentsInDay = this.cardSpents[0].spent
      let dayOfSpents = this.cardSpents[0].time
      for (let i = 1; i < this.cardSpents.length; i++) {
        if (this.cardSpents[i].time.toLocaleString() === dayOfSpents.toLocaleString()) {
          spentsInDay = spentsInDay + this.cardSpents[i].spent
        }else{
          this.coordinates.push(dayOfSpents)
          this.coordinates.push(spentsInDay)
          this.gettingСoordinates.push(this.coordinates)
          this.coordinates=[]
          spentsInDay = this.cardSpents[i].spent
          dayOfSpents = this.cardSpents[i].time
        }
      }
      this.coordinates.push(dayOfSpents)
      this.coordinates.push(spentsInDay)
      this.gettingСoordinates.push(this.coordinates)
      this.coordinates=[]
      console.log(this.gettingСoordinates)
    }
  }

  public redirectToCards() {
    this._routerCard.navigate(['tabs/tab1/banks'])
  }

  public ngOnInit() {
    this._graphService.getCardOperations()
    .pipe(
        delay(1000),
        takeUntil(this.subscriber$),
        map((m) => m.cardSpents)
      )
    .subscribe((a) => {
      this.cardSpents = this.formatData(a)
      this.sortedSpent()
      this.createSvg()
    })
  }

  public ionViewWillLeave() {
    this.subscriber$.next(null)
    this.subscriber$.complete()
  }

  private formatData (cardSpents: ICard[]): ICardView[] {
    let result: ICardView[] = []
    cardSpents.forEach((card) => {
      const item = {
        ...card,
        time: new Date(card.time)
      }
      result.push(item)
    })
    console.log(result)
    return result
  }



  private createSvg(): void {
    this.svg = d3.select("#graph")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    this.createAxis()
  }

  private createAxis() {
    let dates = this.gettingСoordinates.map((d) => d[0])
    let scaleX = d3.scaleUtc()
    .domain([dates[0], dates[dates.length-1]])
    .range([0, this.axisWidth]);
    let axisX = d3.axisBottom(scaleX).tickValues(dates);
    this.svg.append("g")
    .attr("transform", "translate("+this.margin+","+(this.offset+this.axisHeight)+")")
    .call(axisX);

    let spents = this.gettingСoordinates.map((s) => s[1])
    let scaleY = d3.scaleLinear()
    .domain([spents.sort((a, b) => b - a)[0],0])
    .range([0, this.axisHeight]);
    let axisY = d3.axisLeft(scaleY).tickValues(spents);
    this.svg.append("g")
    .attr("transform", "translate("+this.margin+","+this.offset+")")
    .call(axisY);
    
    const line = d3.line()
    .x(d => scaleX(d[0]))
    .y(d => scaleY(d[1]))
    .curve(d3.curveBumpX);
    this.svg.append('path')
    .datum(this.gettingСoordinates)
    .attr('d', line)
    .attr("transform", "translate("+this.margin+","+this.offset+")")
    .style("stroke", "#E1EE86")
    .style("fill", "#1e1e1e")
    .style("stroke-width", 5);
  }

}
