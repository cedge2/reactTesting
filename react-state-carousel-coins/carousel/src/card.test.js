import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('Card component renders without errors', () => {
  const { container } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
  expect(container).toBeInTheDocument();
});

test('Card component matches snapshot', () => {
  const { container } = render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
  expect(container).toMatchSnapshot();
});