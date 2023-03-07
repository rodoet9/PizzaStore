import { Component, Input, OnInit } from '@angular/core';
import { HomeMenuItems } from '../home-menu.model';

@Component({
  selector: 'app-home-menu-item',
  templateUrl: './home-menu-item.component.html',
  styleUrls: ['./home-menu-item.component.css'],
})
export class HomeMenuItemComponent implements OnInit {
  @Input() homeItem: HomeMenuItems;
  constructor() {}

  ngOnInit(): void {}
}
