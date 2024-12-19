import { Component } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
interface ItemData {
  name: string;
  age: number;
  address: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<ItemData> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<ItemData> | null;
}

@Component({
  selector: 'lib-table-nz',
  standalone: true,
  imports: [NzDividerModule, NzTableModule, NzButtonModule, CommonModule,BrowserModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
 
})
export class TableComponent {
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: ItemData, b: ItemData) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.name.indexOf(name) !== -1),
    },
    {
      name: 'Age',
      sortOrder: null,
      sortFn: (a: ItemData, b: ItemData) => a.age - b.age,
      listOfFilter: [],
      filterFn: null,
    },
    {
      name: 'Address',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' },
      ],
      filterFn: (address: string, item: ItemData) =>
        item.address.indexOf(address) !== -1,
    },
  ];
  listOfData: ItemData[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  resetFilters(): void {
    this.listOfColumns.forEach((item) => {
      if (item.name === 'Name') {
        item.listOfFilter = [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ];
      } else if (item.name === 'Address') {
        item.listOfFilter = [
          { text: 'London', value: 'London' },
          { text: 'Sidney', value: 'Sidney' },
        ];
      }
    });
  }
  resetSortAndFilters(): void {
    this.listOfColumns.forEach((item) => {
      item.sortOrder = null;
    });
    this.resetFilters();
  }

}
