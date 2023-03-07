import { Component, Input, OnInit } from '@angular/core';
import { HomeMenuService } from 'app/services/homeMenu.service';
import { HomeMenuItems } from './home-menu.model';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css'],
})
export class HomeMenuComponent implements OnInit {
  @Input() homeItems: HomeMenuItems[];

  constructor(private homeMenuService: HomeMenuService) {}

  ngOnInit(): void {
    this.homeMenuService.getHomeMenuItems().subscribe((response) => {
      this.homeItems = response;
    });
  }
}
