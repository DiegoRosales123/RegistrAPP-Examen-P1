import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppPageRoutingModule } from './app-routing.module';

import { AppPage } from './app.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRCodeModule,
    AppPageRoutingModule
  ],
  declarations: [AppPage]
})
export class AppPageModule {}
