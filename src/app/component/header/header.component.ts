import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchText!: string;
  menuVisible: boolean = false;

  constructor(private router: Router) {}

  handleSearchMovie() {
    if (this.searchText.length > 0) {
      this.router.navigate(['/movies'], { state: { search: this.searchText } });
    }
  }
}
