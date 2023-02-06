import { ItemModel } from "./item.interface";

export interface ItemsState {
  loading: boolean;
  items: ReadonlyArray<ItemModel>;
}
