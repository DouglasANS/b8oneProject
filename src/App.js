import './App.css';
import CardComponent from './components/CardComponent';

function App() {


  const data = {
     "produtos": [
       {
        "id_Product": 1,
        "description": "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
        "oldPrice": "R$ 2.813,99",
        "price": "R$ 2.599,00",
        "installments": "em até 10x de R$ 259,90 sem juros",
       },
       {
        "id_Product": 2,
        "description": "Monitor LED 25'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
        "oldPrice": "R$ 2.523,99",
        "price": "R$ 1.399,00",
        "installments": "em até 10x de R$ 159,90 sem juros",
       }
     ]
  }
  
  console.log(data.produtos[0])


  return (
    <div className="App">
      { data.produtos.map((val)=>{
        return(
          <div key={val.id_Product}>
              <CardComponent 
                id_Product={val.id_Product}
                description={val.description}
                oldPrice={val.oldPrice}
                price={val.price}
                installments={val.installments}
              />
          </div>
        )
      })
        
      }
      
    </div>
  );
}

export default App;
