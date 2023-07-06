import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import CountriesDetails from '../components/main/CountriesDetails';

test('DetailsPage matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <CountriesDetails />
      </Router>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
