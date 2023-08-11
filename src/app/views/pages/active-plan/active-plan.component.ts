import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Firestore,collection,addDoc, collectionData, doc, query, where, getDocs, updateDoc, CollectionReference, DocumentData} from '@angular/fire/firestore';
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-active-plan',
  templateUrl: './active-plan.component.html',
  styleUrls: ['./active-plan.component.css']
})
export class ActivePlanComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute, private firestore: Firestore,
    private datePipe: DatePipe) { }

    verified:boolean=false;

  selectedPlanData: any;
  activePlanData:any;
  ngOnInit(): void {
    this.router.queryParams.subscribe((params: { [x: string]: any }) => {
      const selectedPlanPrice = params['price'];

      const collectionInstance = collection(this.firestore, 'Demoplan');
      collectionData(collectionInstance).subscribe(data => {
        this.selectedPlanData = data.find(item => item['price'] === selectedPlanPrice);

        if (this.selectedPlanData) {
          
          sessionStorage.setItem('price',this.selectedPlanData.price);
          let req = {
            user: sessionStorage.getItem('user'),
            price: this.selectedPlanData.price,
            billing: this.selectedPlanData.billing,
            plan: this.selectedPlanData.plan,
            ActiveStatus: 'active'
          };
  
          console.log(req);
  
         
          const collectionInstance = collection(this.firestore, 'ActivePlan');
          addDoc(collectionInstance, req).then(() => {
            console.log('data saved');
          })
          .catch(err => {
            console.log(err);
          });
  
        } else {
          console.log('Selected plan data not found.');
        }
      });
    });
    
    const collectionInstance = collection(this.firestore, 'ActivePlan');
    collectionData(collectionInstance).subscribe(data => {
      this.activePlanData = data.find(item => item['user'] === sessionStorage.getItem('user')
      &&
    item['price'] === sessionStorage.getItem('price'));

      if (this.activePlanData) {
        // Now you have the data for the selected plan
        // console.log(this.selectedPlanData);  
        console.log(this.activePlanData);
      } else {
        console.log('Selected plan data not found.');
      }
    });
  
}

onCancelClick(): void {
  const user = sessionStorage.getItem('user');
  const price = sessionStorage.getItem('price');
  const newData = {
    // Update properties you want to change
    ActiveStatus: 'cancelled'
  };

  this.updateData(user, price, newData);
}


updateData(user: any, price: any, newData: any): void {
  const collectionInstance = collection(this.firestore, 'ActivePlan');

  const q = query(collectionInstance, 
    where('user', '==', user),
    where('price', '==', price)
  );

  getDocs(q).then((querySnapshot: any) => {
    querySnapshot.forEach((doc:any) => {
      const docRef = doc(collectionInstance, doc.id);
      updateDoc(docRef, newData)
        .then(() => {
          console.log('Document updated successfully.');
        })
        .catch((error) => {
          console.error('Error updating document: ', error);
        });
    });
  });
}


currentDate: Date = new Date();
  
  // Calculate the date one year from now
  oneYearLater: Date = new Date(this.currentDate.getFullYear() + 1, this.currentDate.getMonth(), this.currentDate.getDate());
  
  oneMonthLater: Date = new Date(this.currentDate);
  
  formattedCurrentDate= this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
  formattedOneYearLater= this.datePipe.transform(this.oneYearLater, 'yyyy-MM-dd');

}
