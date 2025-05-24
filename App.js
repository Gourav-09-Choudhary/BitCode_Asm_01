import './App.css';
import ListProducts from './Component/ListProducts';
import BuyProducts from './Component/BuyProducts';
import { useState } from 'react';
import MyPopUp from './Component/MyPopUp';
import Navigation from './Component/Navigation';

function App() {

  const [btnFlg, setBtnFlg] = useState(false);

  function funAdd() {
    setBtnFlg(true);
  }
  
  function funRemove() {
    setBtnFlg(false);
  }

  return (
    <div>

<Navigation></Navigation>
      <ListProducts></ListProducts>

      <input type='button' onClick={funAdd} value="Add-Value" /> &nbsp;&nbsp;&nbsp;

      {/* Here: above button click the title and price dialog-Box open. */}

      <input type='button' onClick={funRemove} value="Remove-Value" />

      {
        btnFlg && <BuyProducts></BuyProducts>
      }
       <MyPopUp></MyPopUp>

    </div>
  );
}

export default App;
