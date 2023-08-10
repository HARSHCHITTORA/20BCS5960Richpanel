import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Firestore,collection,addDoc, collectionData} from '@angular/fire/firestore';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  selectedPlanData:any;

  constructor(private route: Router,
    private router: ActivatedRoute, private firestore:Firestore) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params: { [x: string]: any }) => {
      const selectedPlanPrice = params['price'];
      
      const collectionInstance = collection(this.firestore, 'Demoplan');
      collectionData(collectionInstance).subscribe(data => {
        const selectedPlanData = data.find(item => item['price'] === selectedPlanPrice);
  
        if (selectedPlanData) {
          // Now you have the data for the selected plan
          console.log(selectedPlanData);
  
          // You can assign selectedPlanData to a component property
          this.selectedPlanData = selectedPlanData;
        } else {
          console.log('Selected plan data not found.');
        }
      });
    });
}

}
