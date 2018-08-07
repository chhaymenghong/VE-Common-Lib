import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ColorDirective } from './directives/color/color.directive';
import { CurrencyPipe } from './pipes/currency/currency.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [LoginComponent, ColorDirective, CurrencyPipe],
  exports: [LoginComponent, ColorDirective, CurrencyPipe]
})
export class VeCommonModule { }
