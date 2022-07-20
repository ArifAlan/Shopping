import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from 'src/app/models/basket';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit,AfterContentChecked{
baskets:BasketModel[]=[]
total:number=0;
  constructor(private toastrService:ToastrService,
    private basketService:BasketService
    ) { }

  ngOnInit(): void {
    this.baskets=this.basketService.baskets;
    this.total=this.basketService.total;
  }

ngAfterContentChecked(): void {
  this.total=this.basketService.total;
}

  deleteProduct(basket:BasketModel){
  this.basketService.deleteProduct(basket);

    }

    calc(){
      this.total=this.basketService.calc();

    }

    changeData(basket:BasketModel,quantity:any){
      console.log(quantity)
this.basketService.changeData(basket,quantity.value);
    }



}
