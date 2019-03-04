import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule,MatInputModule,MatIconModule,MatCardModule,MatToolbarModule,MatRadioModule
],
})
export class MaterialModule { }