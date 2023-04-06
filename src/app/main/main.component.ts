import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  home:boolean=true;

  constructor(private router: Router) {

    this.home=this.router.url=="/" ;
    router.events.subscribe((val) => {
      // see also 
      this.home=this.router.url=="/" ;
      console.log(this.router.url)
  });
  
   
  
  }

  ngOnInit(): void {
  }

}
