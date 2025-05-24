import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';
import MyPopUp from './MyPopUp';

function ListProducts() {

    let imgStyle = { width: "100px", height: "100px" };
    const [products, setProducts] = useState([]);

    // ====

    async function getProducts(pgNo) {
        let url = "https://dummyjson.com/products?limit=10&skip=0";
        if (pgNo == 1) {
            url = "https://dummyjson.com/products?limit=10&skip=0"
        }
        else if (pgNo == 2) {
            url = "https://dummyjson.com/products?limit=10&skip=10"
        }
        else if (pgNo == 3) {
            url = "https://dummyjson.com/products?limit=10&skip=20"
        }

        let response = await fetch(url);
        let result = await response.json();
        console.log(result.products);
        setProducts(result.products);
    }

    function funClick(event) {
        event.preventDefault();
        let x = event.target.textContent;
        console.log(x);
        getProducts(x);
    }

    const [rowflag, setRowflag] = useState(false);
    const [rowObj, setRowObj] = useState(false);
    const [rowCount, setRowCount] = useState(0);

    function funRow(x) {
        setRowflag(true);
        setRowObj(x);
        //count
        let cnt = rowCount + 1;
        setRowCount(cnt);

    }
    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div>
            <h3 style={{ textAlign: "center", padding: "10px" }} > * List Products *</h3>
            <div className='container' >
                <Table variant="info" className="table table-bordered border-primary table-responsive table-hover " >
                    <thead className='table-dark' >
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((x) => {
                                return <tr key={x.id} onClick={() => { funRow(x) }} >
                                    <td>{x.id}</td>
                                    <td>{x.title}</td>
                                    <td>{x.price}</td>
                                    <td><img src={x.thumbnail} style={imgStyle} ></img></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
            {/* ==== */}

            <div onClick={funClick} style={{ textAlign: "center" }}>
                <button>1.</button>&nbsp;
                <button>2.</button>&nbsp;
                <button>3.</button>
            </div>

            <div>
                {
                    rowflag && <MyPopUp rowData={rowObj} rowcnt={rowCount} ></MyPopUp>
                }
            </div>

        </div>
    )
}

export default ListProducts;
