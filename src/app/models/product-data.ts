import { RawProductData } from "./raw-product-data.interface";

export class ProductData{
        itemName :string;
    itemDescription:string;
    imageURL:string ;

    constructor( data : RawProductData ){
this.itemName= data.item_name;
this.itemDescription=data.item_description;
this.imageURL=data.image;

    }

}
const rawData: RawProductData[] = [

            {
                id: 0,
                item_name: 'Vegetables',
                item_description: 'These are vegetables',
                storage_location: 'Bin number 3',
                inventory_level: 5,
                image: '/assets/images/vegetables.jpg'
            },
            {
                id: 1,
                item_name: 'Fruits',
                item_description: 'These are fruits',
                storage_location: 'Bin number 19',
                inventory_level: 5,
                image: '/assets/images/fruits.jpg'
            },
            {
                id: 2,
                item_name: 'Bread',
                item_description: 'This is bread',
                storage_location: 'Bin number 5',
                inventory_level: 5,
                image: '/assets/images/bread.jpg'
            },
            {
                id: 3,
                item_name: 'Milk',
                item_description: 'This is milk',
                storage_location: 'Bin number 80',
                inventory_level: 5,
                image: '/assets/images/milk.jpg'
                },
                {
                id: 4,
                item_name: 'Toothpaste',
                item_description: 'This is toothpaste',
                storage_location: 'Bin number 32',
                inventory_level: 5,
                image: '/assets/images/toothpaste.jpg'
                },
                {
                id: 5,
                item_name: 'Soap - Bar',
                item_description: 'These are bars of soap',
                storage_location: 'Bin number 90',
                inventory_level: 5,
                image: '/assets/images/soap-bar.jpg'
                }


];

export const productdata : ProductData[] = [];

rawData.forEach (data => {

    const newData = new ProductData(data);
    productdata.push(newData);
})
