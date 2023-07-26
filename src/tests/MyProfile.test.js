import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import MyProfile from '../pages/MyProfile';

describe('MyRocket component unit test', () => {
  const component = (
    <Provider store={store}>
      <MyProfile />
    </Provider>
  );
  test('MyProfile component renders ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
});
