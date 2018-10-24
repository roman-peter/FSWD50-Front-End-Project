import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private firebase: AngularFireDatabase) { }
	customerList: AngularFireList<any>;

     getCustomers(){
         this.customerList = this.firebase.list('students');
         return this.customerList.snapshotChanges();
 	}
}
