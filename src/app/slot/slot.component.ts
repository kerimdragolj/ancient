import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { Slot } from '../models/slot.model';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {
  @Input() slot: Slot;
  @Input() item: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
