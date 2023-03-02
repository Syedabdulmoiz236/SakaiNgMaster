import { CustomerService } from './../../../service/customer.service';
import { Customer } from './../../../api/customer';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Product } from 'src/app/demo/api/product';
import { ProductService } from 'src/app/demo/service/product.service';


interface expandedRows {
  [key: string]: boolean;
}
@Component({
  selector: 'app-msoperations',
  templateUrl: './msoperations.component.html',
  styleUrls: ['./msoperations.component.scss'],
  providers: [MessageService, ConfirmationService],
  styles: [`
  :host ::ng-deep  .p-frozen-column {
      font-weight: bold;
  }

  :host ::ng-deep .p-datatable-frozen-tbody {
      font-weight: bold;
  }

  :host ::ng-deep .p-progressbar {
      height:.5rem;
  }
`]
})
export class MsoperationsComponent implements OnInit {
  customers1: Customer[] = [];

    customers2: Customer[] = [];

    customers3: Customer[] = [];

    selectedCustomers1: Customer[] = [];

    selectedCustomer: Customer = {};
    statuses: any[] = [];

    products: Product[] = [];

    rowGroupMetadata: any;

    expandedRows: expandedRows = {};

    activityValues: number[] = [0, 100];

    isExpanded: boolean = false;

    idFrozen: boolean = false;

    loading: boolean = true;

    @ViewChild('filter') filter!: ElementRef;


  constructor(private customerService: CustomerService, private productService: ProductService ) { }

  ngOnInit(): void {
    this.customerService.getCustomersLarge().then(customers => {
      this.customers1 = customers;
      this.loading = false;
        });
        }

  

onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
}

}
