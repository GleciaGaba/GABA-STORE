export class Product {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    id: any | undefined;
    category: any;

    constructor(paramName: string, paramDescription: string, paramPrice: number, paramImage: string, paramCategory:any) {
        this.name = paramName;
        this.description = paramDescription;
        this.price = paramPrice;
        this.imageUrl = paramImage;
        this.category =paramCategory;
    }
}
