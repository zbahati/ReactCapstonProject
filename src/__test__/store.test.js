import store from '../redux/store';

describe('Store', () => {
  test('store matches the snapshot', () => {
    expect(store.getState()).toMatchSnapshot();
  });
});
