import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterOutlet,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
 private intervalId: any;

  //  countdown
  targetTime = new Date().getTime() + 5 * 60 * 60 * 1000;

  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.targetTime - now;

      if (distance < 0) {
        clearInterval(this.intervalId);
        this.hours = this.minutes = this.seconds = 0;
      } else {
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }




}
