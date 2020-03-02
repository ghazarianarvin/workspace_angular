export class ShoppingItemType {
    static shoppingItemTypes: ShoppingItemType[] = [];

    private constructor(type: string, color: string) {
        this.type = type;
        this.color = color;
    }

    type: string;
    color: string;

    static getAllShoppingItemTypes() {
        if (ShoppingItemType.shoppingItemTypes.length === 0) {
            ShoppingItemType.shoppingItemTypes.push(new ShoppingItemType('Meat', 'Salmon'));
            ShoppingItemType.shoppingItemTypes.push(new ShoppingItemType('Grains', 'GoldenRod'));
            ShoppingItemType.shoppingItemTypes.push(new ShoppingItemType('Vegetables', 'GreenYellow'));
            ShoppingItemType.shoppingItemTypes.push(new ShoppingItemType('Fruit', 'Orange'));
        }
        return ShoppingItemType.shoppingItemTypes;
    }
}
