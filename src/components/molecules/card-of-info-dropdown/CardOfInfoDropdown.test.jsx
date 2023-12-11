import '@testing-library/jest-dom'
import {fireEvent, render, screen } from "@testing-library/react";
import { CardOfInfoDropdown } from './CardOfInfoDropdown';

describe('Testing in <CardOfInfoDropdown/>', () => {
  it('should render the component with the given title and children', () => {
    const title = 'Test Title';
    const children = <div>Test Children</div>;

    render(<CardOfInfoDropdown title={title}>{children}</CardOfInfoDropdown>);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });
  it('should toggle the dropdown open and closed when clicked',() => {
    const title = 'Test Title';
    const children = <div>Test Children</div>;
    render(<CardOfInfoDropdown title={title}>{children}</CardOfInfoDropdown>);

    fireEvent.click(screen.getByTestId('cardOfInfoDropdown'));

    expect(screen.getByTestId('cardOfInfoDropdown')).toHaveClass('--isOpen');

    fireEvent.click(screen.getByTestId('cardOfInfoDropdown'));

    expect(screen.getByTestId('cardOfInfoDropdown')).not.toHaveClass('--isOpen');
  });
  it('should change the direction of the arrow icon based on the open/closed state', () => {
    const title = 'Test Title';
    const children = <div>Test Children</div>;
    render(<CardOfInfoDropdown title={title}>{children}</CardOfInfoDropdown>);

    fireEvent.click(screen.getByTestId('cardOfInfoDropdown'));

    expect(screen.getByTestId('cardOfInfoDropdownArrow')).toHaveClass('--isOpen');

    fireEvent.click(screen.getByTestId('cardOfInfoDropdown'));

    expect(screen.getByTestId('cardOfInfoDropdownArrow')).not.toHaveClass('--isOpen');
  });
  it('should render the component with no children', () => {
    const title = 'Test Title';
    render(<CardOfInfoDropdown title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.queryByText('Test Children')).toBeNull();
  });
  it('should render the component with no title', () => {
    const children = <div>Test Children</div>;
    render(<CardOfInfoDropdown>{children}</CardOfInfoDropdown>);

    expect(screen.queryByText('Test Title')).toBeNull();
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });
})