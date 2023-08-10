import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  verified: boolean=false;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  selectedOption: number = 0; // Default selected option is Monthly
  selectedplan:number=0;
  selectedCard: number | null = null;
  selectOption(option: number) {
    this.selectedOption = option;
    if(this.selectedOption==0)
    {
      this.verified = false;
    }
    else if(this.selectedOption==1){
      this.verified = true;
    }
  }

  


  selectCard(cardNumber: number): void {
    if (this.selectedCard === cardNumber) {
      this.selectedCard = null; // Deselect if already selected
    } else {
      this.selectedCard = cardNumber; // Select the clicked card
    }
  }


  selectedPlanPrice: string = ''; // Initialize an empty string to store the selected plan's price

  // Update the selectplan method to also set the selectedPlanPrice
  selectplan(option: number) {
    this.selectedplan = option;

    if (this.selectedplan === 1) {
      this.selectedPlanPrice = this.verified ? '1000' : '100';
    } else if (this.selectedplan === 2) {
      this.selectedPlanPrice = this.verified ? '2000' : '200';
    } else if (this.selectedplan === 3) {
      this.selectedPlanPrice = this.verified ? '5000' : '500';
    } else if (this.selectedplan === 4) {
      this.selectedPlanPrice = this.verified ? '7000' : '700';
    }

    console.log(this.selectedPlanPrice);
  }

  navigateToOtherPage() {
    // Assuming you have a route configured for the other page/component
    this.route.navigate(['/payment'], {
      queryParams: { price: this.selectedPlanPrice } // Pass the selectedPlanPrice as a query parameter
    });

  }
}
