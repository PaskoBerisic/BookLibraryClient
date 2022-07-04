import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookLibraryService } from 'src/app/services/book-library.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book.model';
import { Location } from '@angular/common';

const API_URL = "https://localhost:44323/api/";


@Component({
  selector: 'app-detailed-book',
  templateUrl: './detailed-book.component.html',
  styleUrls: ['./detailed-book.component.css']
})
export class DetailedBookComponent implements OnInit {
  book: Book = {};
  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location, private bookLibraryService: BookLibraryService) { }

  ngOnInit(): void {
    this.getHeroj();
  }

  getHero(id: number): Observable<Book> {
    const url = `${API_URL + 'Book'}/${id}`;
    return this.http.get<Book>(url);
  }

  getHeroj(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getHero(id).subscribe(book => this.book = book);
  }

  
  goBack(): void {
    this.location.back();
  }
}
