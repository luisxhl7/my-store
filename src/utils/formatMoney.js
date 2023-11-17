export const formatMoney = (value) => {
    const formatOfMoney = value?.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })
    return `$ ${formatOfMoney}`
}