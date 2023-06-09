import { sculptureList } from '../mock/scultptures';
import { wrapPromise } from '../utils/wrapPromise';

import { Server } from 'miragejs';

new Server({
  routes() {
    this.get('/api/sculptures', () => {
      /**
       * mock data
       */
      return sculptureList;
    });
  },
});

function fetchSculptures(): Promise<I_Sculpture[]> {
  return fetch('/api/sculptures').then(
    (res) => res.json(),
    (err) => err
  );
}

// 透過 wrapPromise + Suspense 將 fetch 到的結果外部化。
// 取代將 fetch 放在 useEffect 的作法
export const useSculptureList = wrapPromise(fetchSculptures()).read;