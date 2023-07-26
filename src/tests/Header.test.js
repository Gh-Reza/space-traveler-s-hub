import React from 'react';
import { screen, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Component Unit Test', () => {
  test('Header Component renders correctly', () => {
    const tree = renderer.create(<Router><Header /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Header Component Contains Title and Menu', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
    expect(screen.getByText('Rockets')).toBeInTheDocument();
    expect(screen.getByText('Missions')).toBeInTheDocument();
    expect(screen.getByText('My profile')).toBeInTheDocument();
  });
});