import { Component, Input } from '@angular/core';

import { Spec } from 'ngx-vega'
import { vis1Spec } from './vis1.vega';


@Component({
  selector: 'spoke-vis1',
  templateUrl: './vis1.component.html',
  styleUrls: ['./vis1.component.scss']
})
export class Vis1Component {

  @Input() spec?: Spec = vis1Spec();

  constructor() { }

}
