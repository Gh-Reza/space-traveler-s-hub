import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Missions from '../pages/Missions';

describe('Mission Page unit test', () => {
  test('Mission Page Renders Properly ', () => {
    const tree = renderer.create(<Provider store={store}><Missions /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
