import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-2',
  templateUrl: './contact-2.component.html',
  styleUrls: ['./contact-2.component.css'],
})
export class Contact2Component implements OnInit {
  contactId: Number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.contactId = Number(params['id']));
  }
}
