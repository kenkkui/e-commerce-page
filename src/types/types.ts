// For universal types
export interface CartFunctions {
  addItemCart: () => void;
  removeItemCart: () => void;
}

export interface CartContent {
  setCart: React.Dispatch<React.SetStateAction<number>>;
  cart: number;
}