import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

test('Navbar matches snapshot', () => {
  const { container } = render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
