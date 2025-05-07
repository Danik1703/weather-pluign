import { Component } from '@angular/core';
import { PlatformHelper } from  '@natec/mef-dev-platform-connector';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  getAsset(url: string): string {
    return PlatformHelper.getAssetUrl() + url;
  }
}

