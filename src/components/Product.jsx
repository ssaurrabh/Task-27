import { useEffect, useState } from 'react'
import './product.css'

function Product(props) {

  let [count, setCount] = useState(1)
  let [indx, setIndx] = useState(null)
  let [cart, setCart] = useState([])

  useEffect(() => {
    window.minus = (name) => {
      setCart((prevcart) => {
        const mainitm = prevcart.find((itm) => itm.name === name);

        if (mainitm && mainitm.quantity === 1) {
          return prevcart.filter((itm) => itm.name !== name)
        } else {
          return prevcart.map((itm) =>
            itm.name === name ? { ...itm, quantity: itm.quantity - 1 } : itm
          )
        }
      })
    }


    window.plus = (name) => {
      setCart((prevcart) =>
        prevcart.map((itm) =>
          itm.name === name ? { ...itm, quantity: itm.quantity + 1 } : itm
        )
      )
    }
    return () => {
      delete window.plus;
      delete window.minus;
    }
  }, [])


  function add(index) {
    setIndx(index)
    let prodname = props.product[index]
    let prodimage = props.images[index]
    let prodprice = props.price[index]

    let items = cart.find((item) => item.name === prodname);

    if (items) {
      window.plus(prodname)
    } else {
      setCart([...cart, { name: prodname, price: prodprice, img: prodimage, quantity: 1 }])
    }

  }

  useEffect(() => {

    let ins = document.getElementById("items")
    let gtotal = cart.reduce((total, items)=> total + (items.price * items.quantity),0)

    let addList = "";

    cart.forEach((item) => {
      addList += `
   <div class='list'>
    <img src = '${item.img}' alt='{item.name}'/>
    <div>
      <h3>${item.name}</h3>
      <p>Price: Rs${item.price * item.quantity}</p>
    </div>
    <div>
                <button onclick="window.minus('${item.name}')"><i class="fa-solid fa-minus"></i></button>
                <span>${item.quantity}</span>
                <button onclick="window.plus('${item.name}')"><i class="fa-solid fa-plus"></i></button>
              </div>
    
   </div>
    `
    })

    if(cart.length>0){
      addList += `
      <div class='total'>
      <h3>Grand Total</h3>
      <h3>Rs ${gtotal}</h3>
      </div>
      `
    }else{
      addList = "Your cart is empty"
    }

    ins.innerHTML = addList;
  }, [cart])




  return (

    <>
      {
        props.product.map((name, index) => (
          <div key={index}>
            <img src={props.images[index]} alt="{name}" />
            <div>
              <h3>{name}</h3>
              <p>Price: Rs {props.price[index]}</p>
              <button onClick={() => {
                setCount(1)
                add(index)
              }}>Add to Cart</button>
            </div>
          </div>

        ))

      }
    </>
  )
}

export default Product
