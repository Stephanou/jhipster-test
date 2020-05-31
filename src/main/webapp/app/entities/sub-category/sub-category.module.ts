import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterTestSharedModule } from 'app/shared/shared.module';
import { SubCategoryComponent } from './sub-category.component';
import { SubCategoryDetailComponent } from './sub-category-detail.component';
import { SubCategoryUpdateComponent } from './sub-category-update.component';
import { SubCategoryDeleteDialogComponent } from './sub-category-delete-dialog.component';
import { subCategoryRoute } from './sub-category.route';

@NgModule({
  imports: [JhipsterTestSharedModule, RouterModule.forChild(subCategoryRoute)],
  declarations: [SubCategoryComponent, SubCategoryDetailComponent, SubCategoryUpdateComponent, SubCategoryDeleteDialogComponent],
  entryComponents: [SubCategoryDeleteDialogComponent],
})
export class JhipsterTestSubCategoryModule {}
