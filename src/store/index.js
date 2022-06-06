import { createStore } from 'vuex'

function updateLocalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}

export default createStore({
    state:{
        cart:[]
    },
    getters:{
        productQuantity: state=>produk =>{
            const item = state.cart.find(i => i.id_produk === produk.id_produk)
            if(item) return item.quantity
            else return null
        },
        cartItems:state =>{
            return state.cart
        }
    },
    mutations:{
        addToCart(state, produk){
            let item = state.cart.find(i => i.id_produk == produk.id_produk)
            if(item){
                item.quantity++;
            }else{
                state.cart.push({...produk, quantity: 1})
            }
            updateLocalStorage(state.cart);
        },
        removeFromProduct(state, produk){
            let item = state.cart.find(i =>i.id_produk===produk.id_produk)
            if(item){
                if(item.quantity>1){
                    item.quantity--
                }else{
                    state.cart = state.cart.filter(i=>i.id_produk !==produk.id_produk)
                }
            }
            updateLocalStorage(state.cart);
        },
        updateCartFromLocalStorage(state){
            const cart = localStorage.getItem('cart')
            if(cart){
                state.cart = JSON.parse(cart)
            }
        },
        reset(state){
            state.cart=[];
            updateLocalStorage(state.cart);
        }
    },
    actions:{

    },
    modules:{

    }
})