import { Component, Input, OnInit } from '@angular/core';
import { BenvenutoService } from 'app/services/benvenutoCard.service';
import { BenvenutoCard } from '../benvenuto-card.model';

@Component({
  selector: 'app-benvenuto-item',
  templateUrl: './benvenuto-item.component.html',
  styleUrls: ['./benvenuto-item.component.css'],
})
export class BenvenutoItemComponent implements OnInit {
  @Input() benvenutoCard: BenvenutoCard;
  @Input() index: number;

  constructor(private benvenutoService: BenvenutoService) {}

  ngOnInit(): void {}
}
