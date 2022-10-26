import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from 'src/app/bookSchema';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: BookService) {}

  allRecords: Book[] = [];
  ngOnInit(): void {
    this.service.allRecords().subscribe((data: Book[]) => {
      this.allRecords = data;
    });
  }
}
