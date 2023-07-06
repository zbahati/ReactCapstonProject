import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CountriesDetails from '../components/main/CountriesDetails';
import { Provider } from 'react-redux';
import store from '../redux/store';

test('DetailsPage matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
       <Router>
        <CountriesDetails />
      </Router>
    </Provider>

  );
  expect(container).toMatchSnapshot();
});