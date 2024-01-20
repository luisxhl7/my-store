import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'

import { AddShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import Product from '../../../service/product-service';
import { formatMoney } from '../../../utils/formatMoney';
import { dataProducts } from '../../../data/dataProducts'
import { SimpleSlider } from '../../molecules/simpleSlider';
import { CardProducts } from '../../molecules/card-products';
import './page-product.scss'
import { SectionInfoProduct } from '../../organisms/section-info-product';

export const PageProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const [product, setProduct] = useState()
  
  const productsDiscount = Product.filterForDiscount(dataProducts);
  const pageProductRef = useRef(null);
  
  useEffect(() => {
    setProduct(Product.searchForLink(dataProducts, id)?.[0]);
    pageProductRef.current.scrollIntoView({ behavior: 'smooth' });

    if (Product.searchForLink(dataProducts, id) <= 0) {
      navigate('/home'); 
    }
  }, [id, product, navigate]);

  const customSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: false,
    arrows: false,  
    responsive: [
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className='page-product' ref={pageProductRef}>
      
      <SectionInfoProduct {...product}/>

      <div className='page-product__similar-products'>
        <h2 className='page-product__title-similar-products'>Conoce nuestras promociones</h2>
        <SimpleSlider customSettings={customSettings}>
          {productsDiscount.map( (item ) => (
            <div className='page-product__content-card' key={item?.id}>
              <CardProducts {...item}/>
            </div>
          ))}
        </SimpleSlider>
      </div>
      
    </div>
  )
}
