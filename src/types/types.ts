// For universal types
export interface CartFunctions {
  addItemCart: () => void;
  removeItemCart: () => void;
}

export interface cartContent {
  setCart: React.Dispatch<React.SetStateAction<number>>;
  cart: number;
}