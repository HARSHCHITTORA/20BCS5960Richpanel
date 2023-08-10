import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  verified: boolean=false;
  constructor() { }

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

  selectplan(option: number) {
    this.selectedplan = option;
  }


  selectCard(cardNumber: number): void {
    if (this.selectedCard === cardNumber) {
      this.selectedCard = null; // Deselect if already selected
    } else {
      this.selectedCard = cardNumber; // Select the clicked card
    }
  }

}
