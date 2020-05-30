import { Component, OnInit, Input } from "@angular/core";
import { Satellite } from "../satellite";
@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  satellitesCount: number = 0;

  constructor() {}

  ngOnInit() {}
  countSatellites(typeStr: string, emptyCount: number): number {
    this.satellitesCount = emptyCount;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type === typeStr) {
        this.satellitesCount = this.satellitesCount + 1;
      }
    }
    return this.satellitesCount;
  }
}
