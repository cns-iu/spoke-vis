import { Shallow } from 'shallow-render';

import { FooterComponent } from './footer.component';
import { FooterModule } from './footer.module';


describe('FooterComponent', () => {
  let shallow: Shallow<FooterComponent>;

  beforeEach(() => {
    shallow = new Shallow(FooterComponent, FooterModule);
  });

  it('creates', async () => {
    const { instance } = await shallow.render();
    expect(instance).toBeDefined();
  });
});
