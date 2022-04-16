import { createStore } from 'vuex'

export default createStore({
  state: {
    direccion: "Av. del Cerro, #123, Col. Jaimito, Cuatitlan",
    horario: "10-18 hrs",
    telefono:"563-466-1234",
    sabores:[
     {
        sabor: "Vainilla",
        precio: 300,
        stock: 3
      },
     {
        sabor: "Fresa",
        precio: 250,
        stock: 1
      }
    ],
    adornos:[
      {
        name:"Vela de numero",
        precio: 23,
        stock: 45
      },
      {
        name:"Vela de Novios",
        precio: 23,
        stock: 45
      },
      {
        name:"Vela de humo",
        precio: 23,
        stock: 45
      },
    ],
    pedidos:[
      {
        Nombre:"Fernando Rodriguez",
        Telefono:"123-456-7890",
        email:"fer@test.com",
        descripcion:"Pastel de tres leches con adorno de feliz cumpleaños mamá",
        adornos:"Numero,2",
        sabores:"Fresa,Chocolate,Vainilla"
      },
      {
        Nombre:"Jorge Maicena",
        Telefono:"645-123-9612",
        email:"jorge@test.com",
        descripcion:"Pastel de tres leches con adorno de boda",
        adornos:"Numero,5",
        sabores:"Fresa"
      },
    ]
  },
  getters: {
    
  },
  mutations: {
    subirStock(state,sabor){
      state.sabores.forEach(s =>{
        if(s.sabor==sabor.sabor){
          s.stock += 1;
        }
      })
    },
    bajarStock(state,sabor){
      state.sabores.forEach(s =>{
        if(s.sabor==sabor.sabor){
          s.stock -= 1;
        }
      })
    },
    addSabor(state,s){
      state.sabores.push(s);
      console.log(state.sabores);
    },
    subirStockAdorno(state,name){
      state.adornos.forEach(s =>{
        if(s.name==name.name){
          s.stock += 1;
        }
      })
    },
    bajarStockAdorno(state,name){
      state.adornos.forEach(s =>{
        if(s.name==name.name){
          s.stock -= 1;
        }
      })
    },
    addAdorno(state,a){
      state.adornos.push(a);
      console.log(state.adornos);
    },
    addPedido(state,p){
      state.pedidos.push(p);
      console.log(state.pedidos);
    },
  },
  actions: {
    
  },
  modules: {
  }
})