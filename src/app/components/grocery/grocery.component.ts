import { Component, OnInit, Signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { Grocery } from '../../../modeal/grocery.model';
import { GroceryState } from '../../../store/state/grocery.state';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AddToBucket, RemoveFromBucket } from '../../../store/actions/bucket.actions';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css',
})
export class GroceryComponent {
  grocer$: Observable<Array<Grocery>> = this.store.select(GroceryState.getAllGrocery);
  filteredGroceries$?: Observable<Array<Grocery>>;
  constructor(private store: Store) {
    // this.store.select((state => state.grocery.groceries)).subscribe((data) => {
    //   console.log(data);
    // })
  }


  onTypeChange(e: Event) {
    const selectedType = (e.target as HTMLSelectElement).value;
    if (selectedType) {
      this.filteredGroceries$ = this.store.select(
        GroceryState.getAllGroceryByType(selectedType)
      );
    } else {
      this.filteredGroceries$ = undefined;
    }
  }


  increment(grac:Grocery){
    const payload ={
      id:grac.id,
      name:grac.name,
      quantity:1
    }
    this.store.dispatch( new AddToBucket(payload))
  }
  descrement(grac:Grocery){
    const payload ={
      id:grac.id
    }
    this.store.dispatch( new RemoveFromBucket(payload))
  }
}

//state.grocery.groceries
