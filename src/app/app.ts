import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OptionFactory } from './services/option-factory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  optionsFactory = inject(OptionFactory);
  ngOnInit(): void {
    console.log(this.optionsFactory.getClassificationOptions());
  }
  protected readonly title = signal('modulo-lunar-material');


}
