import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import MyMissions from '../components/MyMissions';

describe('My Profile My Missions Component unit test', () => {
  test('MyMissions Renders Properly ', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MyMissions/>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});