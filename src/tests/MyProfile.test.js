import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import MyProfile from '../pages/myprofile';

describe('MyProfile component unit test', () => {
  const component = (
    <Provider store={store}>
      <MyProfile />
    </Provider>
  );
  test('MyProfile component renders ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });
  test('MyProfile Contains Titles ', () => {
    render(component);
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('My Rockets')).toBeInTheDocument();
  });
});
