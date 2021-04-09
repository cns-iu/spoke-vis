import { Shallow } from 'shallow-render';

import { Vis1Component } from './vis1.component';
import { Vis1ComponentModule } from './vis1.module';

describe('Vis1Component', () => {
  let shallow: Shallow<Vis1Component>;

  beforeEach(() => {
    shallow = new Shallow(Vis1Component, Vis1ComponentModule);
  });

  it('creates the vega spec', async () => {
    const { instance } = await shallow.render();
    expect(instance.spec).toHaveBeenCalled();
  });
});
