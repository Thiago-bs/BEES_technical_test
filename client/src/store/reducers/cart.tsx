import Cart from '../../models/Cart'

const INITIAL_CART_STATE = {
    activeCart: false,
    products: [],
}

export default function cartReducer(cart: Cart = INITIAL_CART_STATE, action: any){
    if(action.type ==='ADD_BEER_TO_CART'){  
        let listProducts = cart.products;
        listProducts.push(action.beer)
        return { ...cart, activeCart:true, products: listProducts};
    }
    if(action.type === 'DELETE_ITEM_ON_CART'){
        return {...cart, products: cart.products}
    }
    return cart
}