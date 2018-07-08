import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MakeTransferComponent } from './make-transfer/make-transfer.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { SearchFiltersComponent } from './search-filters/search-filters.component';
import { TransactionRowComponent } from './transaction-row/transaction-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MakeTransferComponent,
    RecentTransactionsComponent,
    SearchFiltersComponent,
    TransactionRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
