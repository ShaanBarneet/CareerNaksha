import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.css']
})
export class Part3Component implements OnInit {
  fname="Robert Lee";
  lname="Robert Lee";
  mail="kevinjonas@mail.com";
  d_city="Select One";
  d_message="Enter your message";
  JoinUs(value: any){
    console.log(value);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
