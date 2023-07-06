import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Main from '../components/main/main';

test('Main components matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
