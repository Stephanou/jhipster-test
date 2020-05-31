import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(m => m.JhipsterTestCategoryModule),
      },
      {
        path: 'sub-category',
        loadChildren: () => import('./sub-category/sub-category.module').then(m => m.JhipsterTestSubCategoryModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.JhipsterTestProductModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.JhipsterTestCustomerModule),
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module').then(m => m.JhipsterTestAddressModule),
      },
      {
        path: 'wish-list',
        loadChildren: () => import('./wish-list/wish-list.module').then(m => m.JhipsterTestWishListModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class JhipsterTestEntityModule {}
