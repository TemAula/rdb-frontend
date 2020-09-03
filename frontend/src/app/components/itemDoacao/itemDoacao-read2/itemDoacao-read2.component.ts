import { ItemDoacao } from '../itemDoacao.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ItemDoacaoRead2DataSource } from './itemDoacao-read2-datasource';

@Component({
  selector: 'app-itemDoacao-read2',
  templateUrl: './itemDoacao-read2.component.html',
  styleUrls: ['./itemDoacao-read2.component.css']
})
export class ItemDoacaoRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ItemDoacao>;
  dataSource: ItemDoacaoRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];

  ngOnInit() {
    this.dataSource = new ItemDoacaoRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
