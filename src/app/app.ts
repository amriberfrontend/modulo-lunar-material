import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RockForm } from "./components/rock-form/rock-form";
import { Rock } from './models/rock';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RockForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('modulo-lunar-material');

  rock = new Rock();

}
