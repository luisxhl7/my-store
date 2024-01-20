import { dataOfCart } from "../data/dataOfCart";

class Product {
  static addProductForId = (product, setIsInTheCart) => {
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
  
  static deletePorductsForID = (id) => {
      const dataOfCart = JSON.parse(localStorage.getItem('dataOfCart'));
      const index = dataOfCart.findIndex(elemento => elemento.id === id);
      
      if (index !== -1) {
        dataOfCart.splice(index, 1);
      }
      localStorage.setItem('dataOfCart',JSON.stringify(dataOfCart))
      window.location.reload()
  }

  static filterForName = (data, nombre) => {
    return data.filter(producto => producto.name.toLowerCase().includes(nombre.toLowerCase()));
  };
  
  static filterForDiscount = (data) => {
    return data?.filter(producto => producto.discount > 0);
  };

  static searchForLink = (data, link) => {
    return data.filter(producto => producto.link.toLowerCase() === link.toLowerCase());
  };
  
  static filterForId = (data, id) => {
    return data?.filter(producto => producto.category.includes(id));
  };
}

export default Product;