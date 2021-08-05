import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Queries } from './graphql/queries/boxes.queries';
import { Mutations } from './graphql/mutations/boxes.mutations';


@Injectable({
  providedIn: 'root'
})
export class BoxesService {
  box;

  constructor(
    private apollo: Apollo
    ) { }

  getBoxes() {
    return this.apollo.watchQuery<any>({
      query: Queries.GET_BOXES
    }).valueChanges.pipe(
      map(res => res.data.boxes.edges)
    );
  }

  getBoxeById(id: string) {
    return this.apollo.watchQuery<any>({
      query: Queries.GET_BOX_BY_ID(id)
    }).valueChanges.pipe(map(res => res.data.box));
  }

  openBox(boxId: string, amount: number = 1) {
    return this.apollo.mutate({
      mutation: Mutations.OPEN_BOX,
      variables: {
        boxId,
        amount
      },
      
    });
  }
}

