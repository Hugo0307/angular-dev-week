import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatToolbarModule,
    MatSortModule,
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
