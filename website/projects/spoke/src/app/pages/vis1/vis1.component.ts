import { Component, Input, OnInit } from '@angular/core';
import { Options, Spec } from 'ngx-vega';


@Component({
  selector: 'spoke-vis1',
  templateUrl: './vis1.component.html',
  styleUrls: ['./vis1.component.scss']
})
export class Vis1Component implements OnInit {

  @Input() spec?: Spec;
  @Input() options: Options = { renderer: 'canvas', actions: true, width: 1268 };

  constructor() { }

  ngOnInit(): void {
  }

}
