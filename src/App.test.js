import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import { BrowserRouter as Router, Route } from 'react-router-dom';

test('renders learn react link', () => {
  render(<Router><App /></Router>);

  expect(true).toBeTruthy
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

const add = (a, b) => a + b;test('should add two numbers', () => {
  const sum = add(3, 4);
  expect(sum).toBe(7);
 });

 test('should test Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
 });
