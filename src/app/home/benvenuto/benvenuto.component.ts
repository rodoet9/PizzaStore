import { Component, OnInit } from '@angular/core';
import { BenvenutoService } from 'app/services/benvenutoCard.service';
import { BenvenutoCard } from './benvenuto-card.model';

@Component({
  selector: 'app-benvenuto',
  templateUrl: './benvenuto.component.html',
  styleUrls: ['./benvenuto.component.css'],
})
export class BenvenutoComponent implements OnInit {
  benvenutoCards: BenvenutoCard[];

  constructor(private benvenutoService: BenvenutoService) {}

  ngOnInit(): void {
    this.benvenutoService.getBenvenutoCards().subscribe((response) => {
      this.benvenutoCards = response;
    });
  }
}
