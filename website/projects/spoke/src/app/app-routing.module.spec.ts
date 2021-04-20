import { createFeatureLoader, moduleNameForFeature } from './app-routing.module';


describe('moduleNameForFeature(feature)', () => {
  const feature1 = 'simple';
  const feature2 = 'with-hyphen';
  const feature3 = 'withUpperCaseLetters';

  it('upper cases the first letter', () => {
    expect(moduleNameForFeature(feature1)).toMatch(/^Simple/);
  });

  it('adds a `Module` suffix', () => {
    expect(moduleNameForFeature(feature1)).toMatch(/Module$/);
  });

  it('removes hyphens and upper case the following letter', () => {
    expect(moduleNameForFeature(feature2)).toMatch(/[^-]Hyphen/);
  });

  it('preserves upper case letters', () => {
    expect(moduleNameForFeature(feature3)).toMatch(/UpperCaseLetters/);
  });
});


describe('createFeatureLoader(feature, [module])', () => {
  const feature = 'test-feature';

  it('returns a callback', () => {
    expect(createFeatureLoader(feature)).toEqual(jasmine.any(Function));
  });
});
