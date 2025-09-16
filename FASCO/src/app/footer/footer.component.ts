import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
currentYear = new Date().getFullYear();

  footerLinks = [
    { name: 'Support Center', url: '/support' },
    { name: 'Invoicing', url: '/invoicing' },
    { name: 'Contract', url: '/contract' },
    { name: 'Careers', url: '/careers' },
    { name: 'Blog', url: '/blog' },
    { name: 'FAQs', url: '/faqs' }
  ];
}
