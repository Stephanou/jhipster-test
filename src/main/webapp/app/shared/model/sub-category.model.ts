import { Moment } from 'moment';
import { IProduct } from 'app/shared/model/product.model';
import { ICategory } from 'app/shared/model/category.model';

export interface ISubCategory {
  id?: number;
  description?: string;
  sortOrder?: number;
  dateAdded?: Moment;
  dateModified?: Moment;
  products?: IProduct[];
  category?: ICategory;
}

export class SubCategory implements ISubCategory {
  constructor(
    public id?: number,
    public description?: string,
    public sortOrder?: number,
    public dateAdded?: Moment,
    public dateModified?: Moment,
    public products?: IProduct[],
    public category?: ICategory
  ) {}
}
