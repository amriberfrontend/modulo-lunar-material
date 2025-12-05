import { Injectable } from '@angular/core';
import { IPilot } from '../models/i-pilot';
import { Astronaut } from '../models/astronaut';

@Injectable({
  providedIn: 'root',
})
export class PilotService {
  private pilots: IPilot[] = [];
  getPilots(): IPilot[] {
    if (this.pilots.length == 0) {
      this.addPilot(new Astronaut("NASA-001", "Agmunsen", 31));
      this.addPilot(new Astronaut("SF-1701-1", "Tiberius", 27));
    }
    return this.pilots;
  }
  addPilot(pilot: IPilot) {
    this.pilots.push(pilot);
  }
}
