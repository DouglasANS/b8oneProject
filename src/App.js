import { useContext } from 'react';
import './App.css';
import CardComponent from './components/CardComponent';
import MenuComponent from './components/MenuComponent';
import ShoppingCartPopupComponent from './components/ShoppingCartPopupComponent';
import WishListPopupComponent from './components/WishListPopupComponent';
import { DataContext } from './context/DataContext';

function App() {

  const {wishListPopup, shoppingCartPopup, data } = useContext(DataContext)

  return (
    <div className="App">
      <MenuComponent />

      <div className="card_product">
      { data.produtos.map((val)=>{
        return(
          <div key={val.id_Product}>
              <CardComponent 
                id_Product={val.id_Product}
                imgProduct={val.imgProduct}
                description={val.description}
                oldPrice={val.oldPrice}
                price={val.price}
                installments={val.installments}
              />
          </div>
        )
      })}

      </div>

      {wishListPopup && (
        <WishListPopupComponent />
      )}

      {shoppingCartPopup && (
        <ShoppingCartPopupComponent />
      )}
      
    </div>
  );
}

export default App;
