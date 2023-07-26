import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Missions from '../pages/Missions';

describe('Mission Page unit test', () => {
  test('Mission Page Renders Properly ', () => {
    const tree = renderer.create(<Provider store={store}><Missions /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('The Mission Page Contains Mission Table Headers', () => {
    render(<Provider store={store}><Missions /></Provider>);
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });
});
