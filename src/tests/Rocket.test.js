import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Rocket from '../components/Rocket';

describe('Rocket component unit test', () => {
  const component = (
    <Provider store={store}>
      <Rocket
        isBooked={false}
        onCh={() => {}}
        key={1}
        id={1}
        name="falcon"
        description="description"
        image=""
      />
    </Provider>
  );
  test('Rocket component renders ', () => {
    const tree = render(component);
    expect(tree).toMatchSnapshot();
  });

  test('should have a button component', () => {
    render(component);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
