import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-1',
  templateUrl: './contact-1.component.html',
  styleUrls: ['./contact-1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Contact1Component implements OnInit {

  contacts: Array<Object> = [
    { id: 100, name: 'Andy' },
    { id: 201, name: 'George' },
    { id: 302, name: 'Max' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  viewDetails(id) {
    this.router.navigate(['contact', id]);
  }
}
