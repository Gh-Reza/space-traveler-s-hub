import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Rocket from '../components/Rocket';

describe('Rockets Page unit test', () => {
  const tree = render(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  );
  test('Rockets page renders ', () => {
    expect(tree).toMatchSnapshot();
  });
});
