import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  param: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.param = params.param);
  }

  ngOnInit() {
  }

}
