import { Injectable } from '@angular/core';
import { createSelector, Selector, State } from '@ngxs/store';
import { Grocery } from '../../modeal/grocery.model';

interface GroceryStateModel {
    groceries: Array<Grocery>;
}

@State<GroceryStateModel>({
  name: 'grocery',
  defaults: {
    groceries:[
        {id:1,name:"milk",type:'fruit'},
        {id:2,name:"banana",type:'fruit'},
        {id:3,name:"lays chips",type:'snacks'},
        {id:4,name:"doritos",type:'snacks'},
        {id:5,name:"orange",type:"drink"}
    ],
}
})
@Injectable()
export class GroceryState {
    @Selector()
    static getAllGrocery(state: GroceryStateModel) {
      return  state.groceries ;
    }

    static getAllGroceryByType(type: string) {
        return createSelector([GroceryState], (state: GroceryStateModel) => {
          return state.groceries.filter(items => items.type == type);
        });
      }
}