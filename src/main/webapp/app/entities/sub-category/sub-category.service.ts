import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { ISubCategory } from 'app/shared/model/sub-category.model';

type EntityResponseType = HttpResponse<ISubCategory>;
type EntityArrayResponseType = HttpResponse<ISubCategory[]>;

@Injectable({ providedIn: 'root' })
export class SubCategoryService {
  public resourceUrl = SERVER_API_URL + 'api/sub-categories';

  constructor(protected http: HttpClient) {}

  create(subCategory: ISubCategory): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(subCategory);
    return this.http
      .post<ISubCategory>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(subCategory: ISubCategory): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(subCategory);
    return this.http
      .put<ISubCategory>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<ISubCategory>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<ISubCategory[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(subCategory: ISubCategory): ISubCategory {
    const copy: ISubCategory = Object.assign({}, subCategory, {
      dateAdded: subCategory.dateAdded && subCategory.dateAdded.isValid() ? subCategory.dateAdded.format(DATE_FORMAT) : undefined,
      dateModified:
        subCategory.dateModified && subCategory.dateModified.isValid() ? subCategory.dateModified.format(DATE_FORMAT) : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dateAdded = res.body.dateAdded ? moment(res.body.dateAdded) : undefined;
      res.body.dateModified = res.body.dateModified ? moment(res.body.dateModified) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((subCategory: ISubCategory) => {
        subCategory.dateAdded = subCategory.dateAdded ? moment(subCategory.dateAdded) : undefined;
        subCategory.dateModified = subCategory.dateModified ? moment(subCategory.dateModified) : undefined;
      });
    }
    return res;
  }
}
