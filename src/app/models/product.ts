export class Product {
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    id?: number;
    categoy: any; 


    constructor(paramName: string, paramDescription: string,
         paramPrice: number, paramImageUrl: string, paramCategory:any) {
        this.name = paramName;
        this.description = paramDescription;
        this.price = paramPrice;
        this.imageUrl = paramImageUrl;
        this.categoy=paramCategory;
    

    }
}
