import { Any } from '@angular-ru/common/typings';

declare module '*.geojson' {
  const value: Any;
  export default value;
}

declare module '*.json' {
  const value: Any;
  export default value;
}
