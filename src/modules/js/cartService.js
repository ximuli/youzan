import fetch from 'js/fetch.js'
import url from 'js/api.js'

class Cart {
    static add (id) {
        return fetch(url.cartAdd, {
            id,
            number: 1
        })
    }

    static reduce (id) {
        return fetch(url.cartReduce, {
            id,
            number: 1
        })
    }

    static getList () {
        return fetch(url.cartLists)
    }

    static removeConfirm (id) {
        return fetch(url.cartRemove, {
            id
        })
    }

    static mrremoveConfirm (ids) {
        return fetch(url.cartMrremove, {
            ids
        })
    }
}

export default Cart