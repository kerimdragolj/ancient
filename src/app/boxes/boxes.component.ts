import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BoxesService } from '../boxes.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.scss']
})
export class BoxesComponent implements OnInit, OnDestroy {
  boxes;
  loading: boolean;
  unsubscribe = new Subject();


  constructor(private boxesService: BoxesService) { }

  async ngOnInit(): Promise<void> {
    this.boxesService.getBoxes()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        this.boxes = res;
        console.log(this.boxes);
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
