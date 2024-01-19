import { dataOfCart } from "../data/dataOfCart";

export const addProductForId = (product, setIsInTheCart) => {
    const cartLength = document.getElementById('card-length')

    if (localStorage.getItem('dataOfCart')) {
      const existingCartDetails = JSON.parse(localStorage.getItem('dataOfCart'))
      existingCartDetails.push(product)
      cartLength.innerHTML = existingCartDetails.length;
      cartLength.className = 'header__content-length'

      setIsInTheCart(existingCartDetails)
      localStorage.setItem('dataOfCart',JSON.stringify(existingCartDetails))
    }else{
      dataOfCart.push(product)
      cartLength.innerHTML = dataOfCart.length
      cartLength.className = 'header__content-length'
      setIsInTheCart(dataOfCart)
      localStorage.setItem('dataOfCart',JSON.stringify(dataOfCart))
      
     }
  }