import { Shallow } from 'shallow-render';

import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';


describe('HomeComponent', () => {
  let shallow: Shallow<HomeComponent>;

  beforeEach(() => {
    shallow = new Shallow(HomeComponent, HomeModule);
  });

  it('creates', async () => {
    const { instance } = await shallow.render();
    expect(instance).toBeDefined();
  });
});
