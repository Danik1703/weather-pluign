import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlatformHelper } from '@natec/mef-dev-platform-connector';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {
  slideIndex: number = 1;
  timer: any;

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startSlider() {
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.slideIndex = (this.slideIndex % 7) + 1;
  }



  getAsset(path: string): string {
    return `assets${path}`;
  }

  getBssImage(): string {
    return PlatformHelper.getAssetUrl() + '/imgs/bss.png';
  }
}
