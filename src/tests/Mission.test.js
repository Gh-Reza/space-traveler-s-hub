import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Mission from '../components/Mission';

describe('Mission unit test', () => {
  test('Mission Renders Properly ', () => {
    const mockMission = {
      mission_id: '323333',
      mission_name: 'MockName',
      description: 'Mock detail',
      reserved: false,
    };
    const tree = renderer.create(
      <Provider store={store}>
        <Mission mission={mockMission} />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
