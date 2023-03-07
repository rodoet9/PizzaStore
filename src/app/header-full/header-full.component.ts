import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';
import { DataStorageService } from '../common/data-storage.service';
import { Menu } from '../menus/menu.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header-full',
  templateUrl: './header-full.component.html',
  styleUrls: ['./header-full.component.css'],
})
export class HeaderFullComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  user: User;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  onLogout() {
    this.authService.logout();
  }
 
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
