import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http' ;
import { map } from "rxjs/Operators";
import { Observable } from '../../../node_modules/rxjs/Observable';
@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css']
})
export class TransactionRowComponent implements OnInit {
  public Items = [];
  constructor(private http : Http) {
    
    this.http.get("../assets/transactions.json").subscribe((data) => {
      let response = data.json().data;
      this.Items = response;
      console.log(response);
    });
  }

  ngOnInit() {
  }

}
