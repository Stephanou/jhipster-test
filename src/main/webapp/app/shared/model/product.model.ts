import { Moment } from 'moment';
import { IWishList } from 'app/shared/model/wish-list.model';
import { ISubCategory } from 'app/shared/model/sub-category.model';

export interface IProduct {
  id?: number;
  title?: string;
  keywords?: string;
  description?: string;
  rating?: number;
  dateAdded?: Moment;
  dateModified?: Moment;
  wishList?: IWishList;
  subcategory?: ISubCategory;
}

export class Product implements IProduct {
  constructor(
    public id?: number,
    public title?: string,
    public keywords?: string,
    public description?: string,
    public rating?: number,
    public dateAdded?: Moment,
    public dateModified?: Moment,
    public wishList?: IWishList,
    public subcategory?: ISubCategory
  ) {}
}
