import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function MyPopup(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [txtId, setId] = useState("")
  const [txtName, setName] = useState("");
  const [txtPrice, setPrice] = useState("");

  function priceChange(event) {
    setPrice(event.currentTarget.value);
  }

  async function funUpdate() {
    console.log(txtPrice, txtId);
    let response = await fetch(`https://dummyjson.com/products/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        price: txtPrice,
      })
    });
    let result = await response.json();
    console.log(result.id);
    handleClose();
  }

  async function funDelete() {
    let response = await fetch(`https://dummyjson.com/products/`, {
      method: 'DELETE'
    });
    let result = await response.json();
    console.log(result);
    handleClose();
  }

   async function funAddCart() {
        let response = await fetch(`https://dummyjson.com/products/`, {
    
        });
    let result = await response.json();
    console.log(result);
    handleClose();

  }

  useEffect(() => {
    if (props.rowData) {
      setShow(true);
      console.log(props.rowData);
      setId(props.rowData.id);
      setName(props.rowData.title);
      setPrice(props.rowData.price);
    }
  }, [props.rowData]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            Product Id: <input type="text" value={txtId} />
          </div>
          <div>
            Product Name: <input type="text" value={txtName} />
          </div>
          <div>
            Product Price:
            <input type="text" value={txtPrice} onChange={priceChange} />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={funUpdate}>
            Update
          </Button>
          <Button variant="danger" onClick={funDelete}>
            Delete
          </Button>
          <Button variant="warning" onClick={funAddCart}>
            Add Cart
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyPopup;
