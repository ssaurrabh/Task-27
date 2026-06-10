import { useState } from 'react'
import './App.css'
import Product from './components/Product'

function App() {

  let price = [3000, 7000, 8900, 7800, 9300, 8400, 10500, 7600]

  let product = ['Nike Sneaker','Nike Black Sneaker','Reebok Sneaker','Nike Orange Sneaker','Nike Women Sneaker','Nike Red Sneaker','Nike Neon Sneaker','Nike Traditional Sneaker']

  let images = ['../public/images/1.jpg','../public/images/2.jpg','../public/images/3.jpg','../public/images/4.jpg','../public/images/5.jpg','../public/images/6.jpg','../public/images/7.jpg','../public/images/8.jpg']
  
  // let [count, setCount] = useState(1)

  
  //    let mminus = () => {
  //   if (count > 0) {
  //     setCount(count - 1)
  //   }
  // }
  // let pplus = () => {
  //   setCount(count + 1)
  // }

  // window.minus = mminus;
  // window.plus = pplus;
    
  // function add1() {
  //   let ins = document.getElementById("items")
  //   ins.innerHTML = `
  //  <div>
  //   <img src = '../public/images/1.jpg'/>
  //   <div>
  //     <h3>Nike Sneaker</h3>
  //     <p>Price: Rs3000</p>
  //   </div>
  //   <div>
  //               <button onclick="window.minus()"><i class="fa-solid fa-minus"></i></button>
  //               <span>${count}</span>
  //               <button onclick="window.plus()"><i class="fa-solid fa-plus"></i></button>
  //             </div>
    
  //  </div>
  //   `
  // }
  




  return (
    <>
      <header>
        <nav>
          <div className='logo'>
            <img src="../public/rocket.png" alt="logo" />
            <h1>Rocket Mart</h1>
          </div>
          <div>
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">About Us</a>
          </div>
        </nav>
      </header>

      <section>
        <div className='main'>
          <div className='gridding'>
            <Product price={price} product={product} images={images}/>

          </div>
          <div className='cart'>
            <h3>Cart Items</h3>
            <div id='items'>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
