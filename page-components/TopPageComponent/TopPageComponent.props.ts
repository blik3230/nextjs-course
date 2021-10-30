import { MenuItem } from '../../interfaces/menu.interface';
import {
  TopLevelCategory,
  TopPageModel,
} from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface TopPageComponentProps {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
