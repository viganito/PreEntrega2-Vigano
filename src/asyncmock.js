const misProductos = [ 
    { id: "1", nombre: "Zamna Tulum 2025", stock: 15, precio: 250000, img: "../img/zamna.jpg", idCat:"events" },
    { id: "2", nombre: "Las Vegas 2024", stock: 12, precio: 220000, img: "../img/anyma.jpg", idCat:"events" },
    { id: "3", nombre: "Amsterdam 2024", stock: 7, precio: 180000, img: "../img/amster.jpg", idCat:"events" },
    { id: "4", nombre: "Abu Dhabi 2024", stock: 13, precio: 200000, img: "../img/abuda.jpg", idCat:"events" },
    { id: "5", nombre: "Remera Blanca", stock: 6, precio: 110000, img: "../img/remera1.jpg", idCat: "shop" },
    { id: "6", nombre: "Buzo Dark", stock: 10, precio: 140000, img: "../img/buzo.jpg", idCat:"shop" },
    { id: "7", nombre: "Gorra", stock: 8, precio: 80000, img: "../img/gorra1.jpg", idCat:"shop" },
    { id: "8", nombre: "Buzo by 44", stock: 4, precio: 120000, img: "../img/remera2.jpg", idCat:"shop" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 200)
    })
}


export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 200)
    })

}


export const getProductosPorCategorias = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.filter(item => item.idCat === idCategoria)
            resolve(producto)
        }, 200);

    })

}