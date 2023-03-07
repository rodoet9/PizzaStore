import { Component, Input, OnInit } from '@angular/core';
import { HomeMenuService } from '../services/homeMenu.service';
import { HomeMenuItems } from './home-menu/home-menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeLeft: HomeMenuItems[];
  homeRight: HomeMenuItems[];

  constructor(private homeMenuService: HomeMenuService) {}

  ngOnInit(): void {
    this.homeMenuService.getHomeMenuItems().subscribe((response) => {
      this.homeLeft = response;
    });
  }
}
