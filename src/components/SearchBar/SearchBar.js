import React, { useState } from 'react'
import { color, gender, price, type } from '../filterConstant'
import '../SearchBar/SearchBar.css'
import '../filterProducts/CheckBoxFilter.css'

const SearchBar = ({ productItems, setFilteredItems, onChangeHandler }) => {
  const [showFilter, setShowFilter] = useState(false)

  const searchFilterHandler = (event) => {
    let filteredSearch = [];
    let userInput = event.target.value;
    filteredSearch = productItems.filter(item => {
      return item.name.toLowerCase().includes(userInput) || item.type.toLowerCase().includes(userInput)
    })
    console.log(filteredSearch)
    setFilteredItems(filteredSearch)
  }

  const filterToggle = () => {
    setShowFilter(!showFilter)
    console.log("clicked", showFilter)
  }

  return (
    <div className='searchContainer'>
      <div className='textContainer'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            // value="text"
            onChange={searchFilterHandler}
            placeholder='Search'
          />
          <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
            </svg>
          </button>
        </form>
      </div>
      {showFilter?( 
      <section className='productFilterMobile'>
        <form>
            <h3>Colour</h3>
            {color.map((ele, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        name="checkbox"
                        // checked={Checked.indexOf(ele.id) === -1 ? false : true}
                        onChange={(e) => onChangeHandler(e)}
                        value={ele}
                    />
                    <label>{ele}</label>
                </div>
            ))}
        </form>

        <form>
            <h3>Gender</h3>
            {gender.map((ele, index)=> (
                <div key={index}>
                    <input 
                    type="checkbox" 
                    name="checkbox"
                    onChange={(e) => onChangeHandler(e)}
                    value={ele} 
                    />
                    <label>{ele}</label>
                </div>
            ))}
        </form>

        <form>
            <h3>Price</h3>
            {price.map((ele, index) => (
                <div key={index}>
                    <input 
                    type="checkbox" 
                    name="checkbox" 
                    onChange={(e) => onChangeHandler(e)} 
                    value={ele} 
                    />
                    <label>{ele}</label>
                </div>
            ))}
        </form>

        <form>
            <h3>Type</h3>
            {type.map((ele, index) => (
                <div key={index}>
                    <input 
                    type="checkbox" 
                    name="checkbox" 
                    onChange={(e) => onChangeHandler(e)} 
                    value={ele} 
                    />
                    <label>{ele}</label>
                </div>
            ))}
        </form>
    </section> ): 
    null}
      <button className='filterBtn' onClick={filterToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
        </svg>
      </button>
    </div>
  )
}

export default SearchBar