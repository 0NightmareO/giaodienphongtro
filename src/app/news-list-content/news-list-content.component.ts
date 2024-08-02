import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Card {
  id: number;
  code: string;
  date: string;
  status: string;
  isHidden: boolean;
}

@Component({
  selector: 'app-news-list-content',
  templateUrl: './news-list-content.component.html',
  styleUrl: './news-list-content.component.css'
})


export class NewsListContentComponent {
  cards: Card[] = [
    { id: 1, code: '743562', date: '7/5/2024', status: 'Đang hiển thị', isHidden: false }
    
  ];

  constructor(private router: Router) {}

  hideItem(cardId: number) {
    const card = this.cards.find(c => c.id === cardId);
    if (card) {
      card.isHidden = true;
      card.status = 'Đã ẩn';
    }
  }

  editItem(cardId: number) {
    // Thêm logic chỉnh sửa tại đây nếu cần
  }

  repostItem(cardId: number) {
    const card = this.cards.find(c => c.id === cardId);
    if (card) {
      this.router.navigate(['/new-page']); // Thay '/new-page' bằng đường dẫn của trang muốn chuyển đến
    }
  }
  searchText: string = '';

  onSearchClick() {
    // Thực hiện hành động tìm kiếm ở đây
    console.log('Searching for:', this.searchText);
    // Ví dụ: có thể gọi một service để thực hiện tìm kiếm
  }
}
