// For universal types
export interface CartFunctions {
  addItemCart: () => void;
  removeItemCart: () => void;
}

export interface cartContent {
  removeAll: () => void;
  cart: number;
}