import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { CartOfCart } from "./CartOfCart";

describe('Testing in <CartOfCart/>', () => {
  it('should render the component with the correct props', () => {
    const props = {
      name: 'Product Name',
      image: 'product-image.jpg',
      price: 10,
      suma: jest.fn(),
      id: 1,
      discount: false,
      discountedPrice: 0
    };

    render(<CartOfCart {...props} />);

    expect(screen.getByAltText('Product Name')).toBeInTheDocument();
    expect(screen.getByText('Product Name')).toBeInTheDocument();
    expect(screen.getByText('$10,00 COP')).toBeInTheDocument();
  });
  it('should display the price of the product', () => {
    const props = {
      name: 'Product Name',
      image: 'product-image.jpg',
      price: 10,
      suma: jest.fn(),
      id: 1,
      discount: false,
      discountedPrice: 0
    };

    render(<CartOfCart {...props} />);

    expect(screen.getByText('$10,00 COP')).toBeInTheDocument();
  });
  it('should display the name and image of the product', () => {
    const props = {
      name: 'Product Name',
      image: 'product-image.jpg',
      price: 10,
      suma: jest.fn(),
      id: 1,
      discount: false,
      discountedPrice: 0
    };

    render(<CartOfCart {...props} />);

    expect(screen.getByAltText('Product Name')).toBeInTheDocument();
    expect(screen.getByText('Product Name')).toBeInTheDocument();
  });
  it('should handle missing name, image, price, and id props', () => {
    const props = {
      suma: jest.fn(),
      discount: false,
      discountedPrice: 0
    };

    render(<CartOfCart {...props} />);

    expect(screen.queryByAltText('Product Name')).not.toBeInTheDocument();
    expect(screen.queryByText('Product Name')).not.toBeInTheDocument();
    expect(screen.queryByText('$10')).not.toBeInTheDocument();
  });
  it('should handle missing discount and discountedPrice props', () => {
    const props = {
      name: 'Product Name',
      image: 'product-image.jpg',
      price: 10,
      suma: jest.fn(),
      id: 1
    };

    render(<CartOfCart {...props} />);

    expect(screen.getByText('$10,00 COP')).toBeInTheDocument();
  });
})