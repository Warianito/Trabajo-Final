import React, {createContext, useContext, useState} from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
    const products =[
        {
            img:  "../../public/imagenCard1.png",
            tipo: 'LAPTOPS',
            nombre: 'Apple Mac Book Pro',
            precio: '950.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '1',
        },
        {
            img:  "../../public/imagenCard2.png",
            tipo: 'TABLETS',
            nombre: 'iPad Pro 11',
            precio: '650.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '2',
        },
        {
            img:  "../../public/imagenCard3.png",
            tipo: 'COMPUTERS',
            nombre: 'Samsung Qled 4K',
            precio: '850.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '3',
        },
        {
            img:  "../../public/imagenCard4.png",
            tipo: 'PHONES',
            nombre: 'Samsung Galaxy s10',
            precio: '550.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '4',
        },
        {
            img:  "../../public/imagenCard5.png",
            tipo: 'TABLETS',
            nombre: 'iPad Pro 11',
            precio: '450.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '5',
        },
        {
            img:  "../../public/imagenCard6.png",
            tipo: 'COMPUTERS',
            nombre: 'Samsung Qled 4K',
            precio: '950.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '6',
        },
        {
            img:  "../../public/imagenCard7.png",
            tipo: 'TABLETS',
            nombre: 'Microsoft Surface Studio',
            precio: '850.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '7',
        },
        {
            img:  "../../public/imagenCard8.png",
            tipo: 'WATCHES',
            nombre: 'Samsung Watch',
            precio: '350.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '8',
        },
        {
            img:  "../../public/imagenCard9.png",
            tipo: 'COMPUTERS',
            nombre: 'Pro Display XDR',
            precio: '450.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '9',
        },
        {
            img:  "../../public/imagenCard10.png",
            tipo: 'BLACK FRIDAY',
            nombre: 'Gamepad Xbox One X',
            precio: '150.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '10',
        },
        {
            img:  "../../public/imagenCard11.png",
            tipo: 'WATCHES',
            nombre: 'Smart Watch',
            precio: '250.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '11',
        },
        {
            img:  "../../public/imagenCard12.png",
            tipo: 'GADGET',
            nombre: 'Google Nest',
            precio: '350.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '12',
        },
        {
            img:  "../../public/imagenCard13.png",
            tipo: 'LAPTOPS',
            nombre: 'Lenovo IdeaPad',
            precio: '1150.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '13',
        },
        {
            img:  "../../public/imagenCard14.png",
            tipo: 'WATCHES',
            nombre: 'Apple Watch',
            precio: '550.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '14',
            
        },
        {
            img:  "../../public/imagenCard15.png",
            tipo: 'PHONES',
            nombre: 'Iphone X',
            precio: '750.00',
            stock: 10,
            descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptas, reiciendis atque deserunt aliquam hic, odio asperiores labore sequi repellat rerum! Praesentium sapiente exercitationem est, repudiandae sit at atque',
            id: '15',
        }

    ]

    const getProductById = (id) =>{
        return products.find(producto => producto.id == id)
    }

    const getProductCartById = (id) => {
        return cart.find(producto => producto.id == id)
    }

    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.some(producto => producto.id == id)

    const addProductCart = (id, quantity) =>{
        if(isInCart(id)){
            setCart(cart.map(product =>{
                if(product.id == id){
                    product.quantity = quantity
                }
                return product
            }))
        }
        else{
            setCart([...cart, {...getProductById(id), quantity: quantity}])
        }
        
    }
    const getTotal = () => {
        let total = 0;
        cart.forEach(product => total += product.precio * product.quantity );
        return(total);
    }

    return (
        <Context.Provider value={{products, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
            {children}
        </Context.Provider>
      )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider