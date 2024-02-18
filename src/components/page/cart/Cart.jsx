import React, { useEffect, useState } from 'react'
import { CartOfCart } from '../../molecules/card-of-cart'
import { formatMoney } from '../../../utils/formatMoney'
import { useForm } from '../../../hooks/useForm'
import { Modal } from '../../molecules/modal'
import { InputText } from '../../molecules/input-text'
import { regEx } from '../../../constans/regEx'
import './cart.scss'

export const Cart = () => {
  const [dataCard, setDataCard] = useState(localStorage.getItem('dataOfCart') ? JSON.parse(localStorage.getItem('dataOfCart')) : [])
  const [menuFixed, setMenuFixed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { nombre, apellido, cedula, cvc, numero, expedicion, correo, onInputChange } = useForm({
    nombre: '',
    apellido: '',
    cedula: '',
    cvc: '',
    numero: '',
    expedicion: '',
    correo: ''
  });

  const openModal = () => {
    if (dataCard.length > 0) {
      setModalVisible(true);
    }else{
      alert('No tienes productos en tu carrito')
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (regEx.regexNombre.test(nombre) && 
      regEx.regexNombre.test(apellido) && 
      regEx.regexCedula.test(cedula) && 
      regEx.regexCVC.test(cvc) && 
      regEx.regexNumero.test(numero) && 
      regEx.regexfecha.test(expedicion)) {
        alert(`${nombre} gracias por haber visitado este proyecto, pero actualmente no cuenta con backend`)
    }else{
      alert('Datos incompletos.')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollThreshold = totalHeight * 0.8;
  
      if (window.scrollY >= scrollThreshold) {
        setMenuFixed(true);
      } else {
        setMenuFixed(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const suma = () => {
    let total = 0
    for (const esto of dataCard) {
      if (esto.discount) {
        total = total + esto.discountedPrice
      }else{
        total = total + esto.price 
      }
    }
    return total
  }
  
  return (
    <div className='cart'>
       {modalVisible && (
        <Modal onClose={closeModal}>
          <form onSubmit={handleOnSubmit} autoComplete='off'>
            <h3>My Store</h3>
            <p>Este proyecto es solo ilustrativo, no requieres ingresar datos reales</p>
            
            <InputText 
              id={'nombre'} 
              placeholder={'Ejemplo: Luis'} 
              description={'Nombre:'} 
              onInputChange={onInputChange} 
              value={nombre} 
              errorAlert={'Por favor, ingresa un nombre válido.'}
              regEx={regEx.regexNombre}
              type={'text'}
            />

            <InputText 
              id={'apellido'} 
              placeholder={'Ejemplo: López'} 
              description={'Apellidos:'} 
              onInputChange={onInputChange} 
              value={apellido} 
              errorAlert={'Por favor, ingresa apellidos válidos.'}
              regEx={regEx.regexNombre}  
              type={'text'}  
            />

            <InputText 
              id={'correo'} 
              placeholder={'Ejemplo: ejemplo@dominio.com'} 
              description={'Correo:'} 
              onInputChange={onInputChange} 
              value={correo} 
              errorAlert={'Ingresa un correo electrónico válido'}
              regEx={regEx.regexCorreo}  
              type={'text'}  
            />

            <InputText 
              id={'cedula'} 
              placeholder={'Ejemplo: 1234567890'} 
              description={'Cédula:'} 
              onInputChange={onInputChange} 
              value={cedula} 
              errorAlert={'Ingresa una cédula válida de 10 dígitos.'}
              regEx={regEx.regexCedula}  
              type={'number'}  
            />

            <InputText 
              id={'cvc'} 
              placeholder={'Ejemplo: 123'} 
              description={'cvc:'} 
              onInputChange={onInputChange} 
              value={cvc} 
              errorAlert={'Ingresa un CVC válido de 3 dígitos.'}
              regEx={regEx.regexCVC}   
              type={'text'}
              maxLength={3}
            />

            <InputText 
              id={'numero'} 
              placeholder={'Ejemplo: 1234567890'} 
              description={'Número de la tarjeta de crédito:'} 
              onInputChange={onInputChange} 
              value={numero} 
              errorAlert={'Ingresa un número válido de 16 dígitos.'}
              regEx={regEx.regexNumero}  
              type={'text'}
              maxLength={16}
            />

            
            <InputText 
              id={'expedicion'} 
              placeholder={'Ejemplo: DD/MM/YYYY'} 
              description={'Expedición:'} 
              onInputChange={onInputChange} 
              value={expedicion} 
              errorAlert={'Ingresa una fecha en formato DD/MM/YYYY.'}
              regEx={regEx.regexfecha}
              type={'text'}
            />

            <div>
              <span></span>
            </div>
            <button className='cart__button'>Finalizar Compra</button>
          </form>
        </Modal>
      )}


      <h1 className='cart__title'>
        Carrito de Compras
      </h1>
      {dataCard.map( (item) => (
        <CartOfCart
          key={item?.id}
          id={item?.id}
          name={item?.name}
          image={item?.image}
          price={item?.price}
          discount={item?.discount}
          link={item?.link}
          discountedPrice={item?.discountedPrice}
          suma={suma}
          setDataCard={setDataCard}
        />
      ))}
      <div className='cart__content-info'>
        <div className={`cart__info ${menuFixed ? '--fixed' : ''}`}>
          <div className='cart__info-total'>
            <div className='cart__total'>
              TOTAL:
            </div>
            <div className='cart__price-total'>
              { formatMoney(suma()) }
            </div>
          </div>
          <button onClick={ openModal}>Procesar Compra</button>
        </div>

      </div>

    </div>
  )
}