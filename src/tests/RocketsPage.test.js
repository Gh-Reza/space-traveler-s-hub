import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../pages/Rockets';

describe('Rockets Page unit test', () => {
  const component = (
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
  test('Rockets page renders ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
});
