import '@testing-library/jest-dom'
import {fireEvent, render, screen } from "@testing-library/react";
import { CardProducts } from './CardProducts';
import { formatMoney } from '../../../utils/formatMoney';

describe('Testing in <CardProducts/>', () => {
    it('should render the product image and details correctly', () => {
      const product = {
        name: 'Refrigeracion Liquida Aorus Waterforce X360',
        image: 'image-url',
        price: 1000000,
        shippingPrice: 0,
        discountedPrice: 900000,
        discount: 10
      };

      render(<CardProducts {...product} />);
      
      // expect(screen.getByAltText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`-${product.discount}%`)).toBeInTheDocument();
      // expect(screen.getByText(formatMoney(product.price))).toBeInTheDocument();
      // expect(screen.getByText(formatMoney(product.discountedPrice))).toBeInTheDocument();
    });
})