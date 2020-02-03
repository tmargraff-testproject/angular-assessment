
export class Item {
    name: string;
    quantity: number;
    price: number;
    isTaxable: boolean;
    isImported: boolean;
}

export class ShoppingBasket {
    basketId: number;
    items: Item[];
    salesTax: number;
    importDuty: number;
    total: number;
}

export class ShoppingList {
    shoppingBasket: ShoppingBasket;
}

export class Shopping {
    shoppingList: ShoppingList[];
}
