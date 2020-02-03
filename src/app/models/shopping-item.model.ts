
export interface Item {
    name: string;
    quantity: number;
    price: number;
    isTaxable: boolean;
    isImported: boolean;
}

export interface ShoppingBasket {
    basketId: number;
    items: Item[];
    salesTax: number;
    importDuty: number;
    total: number;
}

export interface ShoppingList {
    shoppingBasket: ShoppingBasket;
}

export interface Shopping {
    shoppingList: ShoppingList[];
}



