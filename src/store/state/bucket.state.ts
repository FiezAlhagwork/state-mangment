import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Bucket } from '../../modeal/grocery.model';
import { AddToBucket, RemoveFromBucket } from '../actions/bucket.actions';

interface bucketStateModel {
  mybucket: Array<Bucket>;
  bolol:number
}

@State<bucketStateModel>({
  name: 'bucket',
  defaults: {
    mybucket: [],
    bolol:1999
  },
})
@Injectable()
export class BucketState { 
  @Selector()
  static getAllBucket(state: bucketStateModel) {
    return state.mybucket;
  }


  @Action(AddToBucket)
  addToBuket(ctx:StateContext<bucketStateModel>,action:AddToBucket){
    const state = ctx.getState()
    // ctx.setState({
    //   ...state,mybucket:[...state.mybucket,action.payload]
    // })
    const buckeItems = state.mybucket.find(item => item.id === action.payload.id)

    if(buckeItems){
      ctx.patchState({
        mybucket:state.mybucket.map(item => {
          return item.id === action.payload.id ? {...item,quantity:item.quantity + 1} : item
        })
      })
    }else{    
      ctx.patchState({
        mybucket:[...state.mybucket,action.payload]
      })
    }
  }


  @Action(RemoveFromBucket)
  removeFromBucket(ctx:StateContext<bucketStateModel>,action:RemoveFromBucket){
    const state =ctx.getState()
    const exsistingItem = state.mybucket.find(item => item.id === action.payload.id)
    if(exsistingItem && exsistingItem.quantity > 1){
        ctx.patchState({
          mybucket:state.mybucket.map(item => {
            return item.id === action.payload.id ?  {...item,quantity:item.quantity - 1} : item
          })
        })
    }else{
      ctx.patchState({
        mybucket:state.mybucket.filter(item => item.id != action.payload.id)
      })
    }
  }
}
