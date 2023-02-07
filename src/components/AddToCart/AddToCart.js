import React from 'react';
import '../AddToCart/AddToCart.css';
import NavBar from '../NavBar/NavBar';

const AddToCart = ({ Allfilter, setAllfilter }) => {

//subTotal of item
  let itemsQuantity = Allfilter.map(e => {
    let total = e.productPrice * e.productQuality
    return total
  })

  //total items
  let totalAmount = itemsQuantity.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);


//decrease items in cart
  const subtraction = (productId) => {
    let maxLimit = 1
    let decrease = Allfilter.filter(e => {
      if (e.productId === productId) {
        let subtractItems = e.productQuality - 1;
        if(subtractItems <= 1) subtractItems = maxLimit;
        e.productQuality = subtractItems;
      }
      return e
    })
    setAllfilter(decrease)
  }


  //increase items in cart
  const addition = (productId) => {
    let increase = Allfilter.filter(e => {
      if (e.productId === productId) {
        let addItems = e.productQuality + 1;
        if(addItems >= e.productQuality){
          addItems = e.productQuality
          alert(`Can not add more than available product quantity : ${e.productQuality}`)
        }
          e.productQuality = addItems;
      }
      return e
    })
    setAllfilter(increase)
  }


  //delete the selected cart
  const deleteProductItem = (productId) => {
    let deleteItem = Allfilter.filter(e => e.productId !== productId)
    setAllfilter(deleteItem)
  }



  return (
    <>
      <NavBar />
      <div className='mainContainer'>
        <div className='productDetailContainer'>
          <div className='title'><h3>Shopping Cart</h3></div>
          {Allfilter.map(ele => (
            <section className='productAdded' key={ele.productId}>
              <div className='productDetails'>
                <img src={ele.image} alt='productImage' />
              </div>
              <div className='productDetails'>
                <p>{ele.productName}</p>
                <p>Rs :{ele.productPrice}</p>
              </div>
              <div className='productDetails'>
                <button onClick={() => subtraction(ele.productId)}>-</button>
                <span>{ele.productQuality}</span>
                <button onClick={() => addition(ele.productId)}>+</button>
              </div>
              <div className='productDetails'>
                <button className='delete' onClick={() => deleteProductItem(ele.productId)}>Delete</button>
              </div>
            </section>
          ))
          }
          <div className='borderLine'></div>
          <section className='productTotal'>
            <div className='total'><h4>Total Amount :</h4></div>
            <div className='amount'><h4>Rs : {totalAmount}</h4></div>
          </section>
        </div>
      </div>
    </>
  )
}

export default AddToCart