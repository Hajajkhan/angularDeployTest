import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hajaj-detail',
  templateUrl: './hajaj-detail.component.html',
  styleUrls: ['./hajaj-detail.component.css']
})

export class HajajDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
