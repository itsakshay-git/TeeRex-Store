import React from 'react'
import { color, gender, price, type } from '../filterConstant'
import '../filterProducts/CheckBoxFilter.css'


const CheckboxFilter = (props) => {


    return (
        <>
            <section className='productFilter'>
                <form>
                    <h3>Colour</h3>
                    {color.map((ele, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                name="checkbox"
                                // checked={Checked.indexOf(ele.id) === -1 ? false : true}
                                onChange={(e) => props.onChangeHandler(e)}
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
                            onChange={(e) => props.onChangeHandler(e)}
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
                            onChange={(e) => props.onChangeHandler(e)} 
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
                            onChange={(e) => props.onChangeHandler(e)} 
                            value={ele} 
                            />
                            <label>{ele}</label>
                        </div>
                    ))}
                </form>

            </section>
        </>
    )
}

export default CheckboxFilter