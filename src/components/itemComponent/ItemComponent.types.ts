import {ElementType} from '../../screens/MainScreen.types';

export type ItemComponentProps = {
  item: ElementType;
  deleteItem: (item: ElementType) => void;
  selectTask: (item: ElementType) => void;
  updateItem: (item: ElementType, text: string) => void;
  setFocused: (focused: boolean)=>void;
};
