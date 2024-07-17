import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { GroceryState } from '../store/state/grocery.state';
import { BucketState } from '../store/state/bucket.state';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideStore([GroceryState,BucketState], withNgxsReduxDevtoolsPlugin())]
};
