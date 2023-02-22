export type ElementType = {id: string; title: string; done: false};
export type StoreType = Array<ElementType>;
export enum ButtonNames {
  ADD = 'Add',
  DELETE = 'Delete',
  CANCEL = 'Cancel',
  UPDATE = 'Update',
}
