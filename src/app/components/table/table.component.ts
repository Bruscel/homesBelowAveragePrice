import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  items: Item[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getItems();
    // this.dataService.getItems().subscribe(
    //   (data: Item[]) => this.items = data,
    //   (error) => console.error('Error fetching items:', error)
    // );
  }

  getItems(): void {
    this.dataService.getItems().subscribe(
      (data) => (this.items = data),
      (error) => console.error('Error fetching items', error)
    );
  }

  goToForm() {
    this.router.navigate(['/form']); // Navigate to the form component
  }
}
