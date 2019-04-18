import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GhostmodePage } from './ghostmode';

@NgModule({
  declarations: [
    GhostmodePage,
  ],
  imports: [
    IonicPageModule.forChild(GhostmodePage),
  ],
})
export class GhostmodePageModule {}
