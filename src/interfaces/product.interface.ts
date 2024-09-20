export interface Product {
    id:string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ValidSizes[];
    slug: string;
    tags: string[];
    title: string;
    /* type: ValidTypes; */
    gender: ValidCategory;
   }

export interface CartProduct {
    id:string;
    slug: string;
    title: string;
    price: number;
    quantity: number;
    sizes: ValidSizes;
    image:string;


}

export interface ProductImage {
    id:number,
    url:string,
    productId?: string
}

export type ValidCategory = 'Men'|'Women'|'Kids'|'Unisex'
export type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL';
export type ValidTypes = 'shirts'|'pants'|'hoodies'|'hats';

