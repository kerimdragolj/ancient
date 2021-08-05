import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BoxesService } from '../boxes.service';
import { Box } from '../models/box.model';

@Component({
  selector: 'app-box-details',
  templateUrl: './box-details.component.html',
  styleUrls: ['./box-details.component.scss']
})
export class BoxDetailsComponent implements OnInit, OnDestroy {
  box: Box;
  unsubscribe = new Subject();

  constructor(
    private route: ActivatedRoute,
    private boxesService: BoxesService
  ) { }

  ngOnInit(): void {
    this.boxesService.getBoxeById(this.route.snapshot.params.id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res: Box) => {
        this.box = res;
        console.log(res);
      });

  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  openBox(id: string, amount = 1) {
    this.boxesService.openBox(id, amount)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        console.log("You have won this item: " + res);
      })
  }

}
