import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Bucket, Grocery } from '../../../modeal/grocery.model';
import { BucketState } from '../../../store/state/bucket.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bucket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bucket.component.html',
  styleUrl: './bucket.component.css'
})
export class BucketComponent {

  bucke$:Observable<Array<Bucket>> = this.store.select(BucketState.getAllBucket)
  constructor(private store:Store){}

}
