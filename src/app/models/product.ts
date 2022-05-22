export class Product {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    id: any | undefined;

    constructor(paramName: string, paramDescription: string, paramPrice: number, paramImage: string) {
        this.name = paramName;
        this.description = paramDescription;
        this.price = paramPrice;
        this.imageUrl = paramImage;
    }
}
