import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../common/HeaderComponent';

describe('Header component', () => {


  it('contains RightCircleOutlined icon', () => {
    render(<Header />);
    expect(screen.getByTestId('right-circle-icon')).toBeInTheDocument();
  });

  it('contains OpenAIOutlined icon', () => {
    render(<Header />);
    expect(screen.getByTestId('openai-icon')).toBeInTheDocument();
  });

  it('icons have correct font size', () => {
    render(<Header />);
    expect(screen.getByTestId('right-circle-icon')).toHaveStyle('font-size: 40px');
    expect(screen.getByTestId('openai-icon')).toHaveStyle('font-size: 40px');
  });

  it('icons have correct color', () => {
    render(<Header />);
    expect(screen.getByTestId('right-circle-icon')).toHaveStyle('color: #08c');
    expect(screen.getByTestId('openai-icon')).toHaveStyle('color: #08c');
  });
});