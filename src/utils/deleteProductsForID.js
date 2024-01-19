export const deletePorductsForID = (id) => {
    const dataOfCart = JSON.parse(localStorage.getItem('dataOfCart'));
    const index = dataOfCart.findIndex(elemento => elemento.id === id);
    
    if (index !== -1) {
      dataOfCart.splice(index, 1);
    }
    localStorage.setItem('dataOfCart',JSON.stringify(dataOfCart))
    window.location.reload()
}