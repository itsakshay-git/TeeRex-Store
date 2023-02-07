import React, { useEffect, useState } from 'react';
import '../Home/Home.css'
import NavBar from '../NavBar/NavBar';
import CheckboxFilter from '../filterProducts/CheckboxFilter';
import SearchBar from '../SearchBar/SearchBar';
import ProductCart from '../ProductsCart/ProductCart';
import { url } from '../filterConstant'




const Home = ({ setAllfilter }) => {
  const [productItems, setproductItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [cartData, setCartData] = useState([])

  //fetch data from server
  useEffect(() => {
    const getProducts = async () => {
      try {
        let user = await fetch(url)
        let res = await user.json()
        console.log(res)
        setproductItems(res)
      } catch (error) {
        console.log(error);
      }
    }
    getProducts()
  }, [])


//filter event fuction for filtering a product
  function onChangeHandler(e) {
    let matchedItems = [];
    // eslint-disable-next-line
    productItems.map(elem => {
      // filter for color
      if (e.target.value === elem.color) {
        matchedItems.push(elem)
        setFilteredItems(e.target.checked ? [...filteredItems, ...matchedItems] : [])
      }
      //filter for gender
      if (e.target.value === elem.gender) {
        matchedItems.push(elem)
        setFilteredItems(e.target.checked ? [...filteredItems, ...matchedItems] : [])
      }
      //filter for type
      if (e.target.value === elem.type) {
        matchedItems.push(elem)
        setFilteredItems(e.target.checked ? [...filteredItems, ...matchedItems] : [])
      }

      //filter for price
      if (e.target.value === "0-Rs200" && elem.price >= 0 && elem.price <= 200) {
        matchedItems.push(elem)
        console.log(elem)
        setFilteredItems(e.target.checked ? [...filteredItems, ...matchedItems] : [])
      }
      if (e.target.value === "Rs251-450" && elem.price >= 251 && elem.price <= 450) {
        matchedItems.push(elem)
        console.log(elem)
        setFilteredItems(e.target.checked ? [...filteredItems, ...matchedItems] : [])
      }
      if (e.target.value === "Rs 450" && elem.price >= 450) {
        matchedItems.push(elem)
        console.log(elem)
        setFilteredItems(e.target.checked ? [...filteredItems, ...matchedItems] : [])
      }
    })
  }


// add to cart funtion
  function addToCartHandler(imageURL, name, price, quantity, id) {
    let addedItems = [
      {
        image: imageURL,
        productName: name,
        productPrice: price,
        productQuality: quantity,
        productId: id,
      },
    ]
    setCartData([...cartData, ...addedItems])
    setAllfilter([...cartData, ...addedItems])
    console.log(cartData)
  }



  return (
    <>
      <NavBar />
      <aside className='mainProductSection'>
        <CheckboxFilter
          productItems={productItems}
          setproductItems={setproductItems}
          onChangeHandler={onChangeHandler}
        />
        {/* product cards */}
        <section className='productContainer'>
          <SearchBar
            productItems={productItems}
            setFilteredItems={setFilteredItems}
            onChangeHandler={onChangeHandler}
          />
          <ProductCart 
          filteredItems={filteredItems}
          productItems={productItems}
          addToCartHandler={addToCartHandler}
          />
        </section>
      </aside>
    </>

  )
}

export default Home;