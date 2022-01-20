import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LyCarouselModule } from '@alyle/ui/carousel';
import { LyTypographyModule } from '@alyle/ui/typography';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule,
  LyCarouselModule,
  LyTypographyModule],
  exports: [RouterModule, CarouselExample01Component],
  declarations: [CarouselExample01Component]
})
export class AppRoutingModule { }
export class CarouselExample01Module { }
