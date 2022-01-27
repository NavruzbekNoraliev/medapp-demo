import { Router } from '@angular/router';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Entries {
  id: number;
  label: string;
  description: string;
  color: string;
  url: string;
}

const DATA: Entries[] = [
  { id: 1, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 2, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 3, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 4, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 5, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 6, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 7, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 8, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 9, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 10, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
  { id: 11, label: 'Hydrogen', description: '1.0079', color: 'H', url: '' },
];


@Component({
  selector: 'app-all-entries',
  templateUrl: './all-entries.component.html',
  styleUrls: ['./all-entries.component.css']
})
export class AllEntriesComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'label', 'description', 'actions'];
  dataSource = new MatTableDataSource<Entries>(DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private router: Router) { }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  edit(id: string) {
    this.router.navigate(['main/entries/edit', id])
  }

}
