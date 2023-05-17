import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomLabelDirective],
  exports: [CustomLabelDirective],
})
export class SharedModule {}
