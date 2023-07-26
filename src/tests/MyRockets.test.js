import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import MyRockets from '../components/MyRockets';

describe('MyRocket component unit test', () => {
  const component = (
    <Provider store={store}>
      <MyRockets />
    </Provider>
  );
  test('MyRockets component renders ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });

  test('Should renders the correct heading', () => {
    render(component);
    const element = screen.getByText('My Rockets');
    expect(element).toBeInTheDocument();
  });
});
