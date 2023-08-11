import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Firestore,collection,addDoc, collectionData} from '@angular/fire/firestore';
import {HttpClient} from '@angular/common/http'
import { loadStripe } from '@stripe/stripe-js';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  selectedPlanData:any;
  cardDetails:any;
  date:any;
  month:any;
  year:any;
  constructor(private route: Router,
    private router: ActivatedRoute, private firestore:Firestore,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((params: { [x: string]: any }) => {
      const selectedPlanPrice = params['price'];
      
      const collectionInstance = collection(this.firestore, 'Demoplan');
      collectionData(collectionInstance).subscribe(data => {
        this.selectedPlanData = data.find(item => item['price'] === selectedPlanPrice);
  
        if (this.selectedPlanData) {
          // Now you have the data for the selected plan
          console.log(this.selectedPlanData);
  
          // You can assign selectedPlanData to a component property
          this.selectedPlanData = this.selectedPlanData;
        } else {
          console.log('Selected plan data not found.');
        }
      });
    });
}

navigateToOtherPage() {
  // Assuming you have a route configured for the other page/component
this.http.post('http://localhost:4242/checkout',{
 
  items:this.cardDetails,
  
})  .subscribe(async (res:any)=>{
  let stripe=await loadStripe('pk_test_51NdCpGSEHjrwEAXuCkGn3c6xiV9PN9ZPZ57HnARi7tuISqnbSkAz3Xya2j4Detp4YRpTlo4TEvBmH67TD8P08iUU00plrCy0Px');
  stripe?.redirectToCheckout({
    sessionId:res.id
  })
})



  this.route.navigate(['/activeplan'], {
  
    queryParams: { price: this.selectedPlanData.price} // Pass the selectedPlanPrice as a query parameter
  });

}

}
