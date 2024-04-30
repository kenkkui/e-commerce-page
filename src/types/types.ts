// For universal types
export interface CartQuantity {
  addItemCart: () => void;
  removeItemCart: () => void; 
}

export interface cartContent {
  removeAll: () => void;
  cart: number;
}