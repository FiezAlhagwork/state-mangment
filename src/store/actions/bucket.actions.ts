import { Bucket } from "../../modeal/grocery.model";

export class AddToBucket {
    static readonly type = '[Bukcet] Add';
    constructor(public payload:Bucket) {}
}
export class RemoveFromBucket {
    static readonly type = '[Bukcet] remove';
    constructor(public payload:Partial<Bucket>) {}
}