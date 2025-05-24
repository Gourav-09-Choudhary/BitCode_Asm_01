import React, { useRef } from 'react'

function BuyProducts() {

    let txtTitle = useRef();
    let txtPrice = useRef();

    async function funInsert() {
        let txtName = txtTitle.current.value;
        let txtValue = txtPrice.current.value;

        console.log(txtName, txtValue);

        let obj = { title: txtName, price: txtValue };
        let response = await fetch("https://dummyjson.com/products/add", {
            method: "POST",
            body: JSON.stringify(obj),
            headers: { 'Content-type': 'application/json' }
        })
        let result = await response.json();
        console.log(result);
    }
    return (
        <div>
            <h3> Buy Products From Here !!</h3>
            <div>
                1. Title :  <input type='text' ref={txtTitle} /> &nbsp;
            </div>
            <div>
                2. Price :  <input type='text' ref={txtPrice} />
            </div><br />
            <div>
                <input type='button' onClick={funInsert} value='add Products' variant='secondary' />
            </div>

        </div>
    )
}

export default BuyProducts
