const getStoredCart = () => {
    const stringCart = localStorage.getItem('cart');
    if (stringCart) {
        return JSON.parse(stringCart);
    } else {
        return [];
    }
}

const saveCartToLS = cart => {
    const stringifiedCart = JSON.stringify(cart);
    localStorage.setItem('cart', stringifiedCart);
}

const addtoLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart)
}
export { addtoLS, getStoredCart }
