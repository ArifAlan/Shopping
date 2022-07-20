import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { ProductModel } from "../models/product";

@Injectable({
  providedIn:'root'
})
export class ProductService{
  products: ProductModel[] = [
    {
      name: 'Peynir',
      inventoryQuantity:100,
      price: 26.61,
      imageUrl: 'https://www.peynircibaba.com/image/catalog/urunler/1008.jpg',
    },
    {
      name: 'Zeytin',
      inventoryQuantity:100,
      price: 130.5,
      imageUrl:
        'https://www.organikgurmem.com/images/urunler/Mega-Siyah-Zeytin-1-KG-resim-930.jpg',
    },
    {
      name: 'Tereyağ',
      inventoryQuantity:100,
      price: 70.81,
      imageUrl:
        'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/12010150/12010150-44677f-1650x1650.jpg',
    },
    {
      name: 'Lavaş',
      inventoryQuantity:100,
      price: 25.51,
      imageUrl:
        'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05051773/05051773-2e6f99-1650x1650.jpg',
    },
    {
      name: 'Yeşil Zeytin',
      inventoryQuantity:100,
      price: 98.61,
      imageUrl: 'https://www.peynircibaba.com/image/catalog/urunler/5802-1.jpg',
    },
    {
      name: 'Telefon kablosu',
      inventoryQuantity:100,
      price: 30,
      imageUrl: 'https://productimages.hepsiburada.net/s/6/375/9716892827698.jpg',
    },
    {
      name: 'Priz',
      inventoryQuantity:100,
      price: 19.99,
      imageUrl: 'https://cdn.dsmcdn.com/mnresize/500/-/ty97/product/media/images/20210405/08/d6a0d1c3/61335512/1/1_org.jpg',
    },
  ];

constructor(
  private toastrService:ToastrService
){}

add(model:ProductModel):boolean{
  let length=this.products.filter(p=>p.name.toLocaleLowerCase()==model.name.toLocaleLowerCase()).length
  if(length==0){
    this.products.push(model);
    this.toastrService.success(model.name+" başarıyla eklendi")
    //console.log(this.products)
    return true;

  }else{
      this.toastrService.error("Ekleme çalıştığınız ürün kayıtlarda mevcut!")
      return false;
    }
  }

}
