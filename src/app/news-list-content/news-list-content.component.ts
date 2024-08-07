import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Card {
size: any;
  price: number;
  address: string;
  title: string;
  id: number;
  code: number;
  date:string;
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
    { id: 1,
      code: 743562, 
      date: '7/5/2024', 
      status: 'Đang hiển thị', 
      isHidden: false,
      title: 'Cho thuê căn hộ vinhome 4 phòng ngủ vip nhất',
      price: 10,
      size: '40m²',
      address: 'Quận 1',
    }
    
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
    // Điều hướng đến trang chỉnh sửa với id của bài viết
    this.router.navigate(['/edit-post', cardId]); // Thay '/edit-post' bằng đường dẫn của trang muốn chuyển đến
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
