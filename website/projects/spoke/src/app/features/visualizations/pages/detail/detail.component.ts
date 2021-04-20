import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'spoke-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
  readonly disease$ = this.route.paramMap.pipe(map(p => p.get('disease') as string));
  readonly food$ = this.route.paramMap.pipe(map(p => p.get('food') as string));

  constructor(private route: ActivatedRoute) { }
}
