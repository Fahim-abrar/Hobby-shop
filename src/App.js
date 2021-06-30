import logo from './logo.svg';
import './App.css';
import Card from './Card'
import {useStateValue} from './StateProvider/StateProvider'
import Navbar from './navbar'

function App() {
  const [state, dispatch] = useStateValue()
  return (
    
    <div className="App">
    <Navbar/>
      {state.product.map((product) => <Card
        title={product.title}
        imageUrl={product.imageUrl}
        body={product.body}
      />)}

    </div>
  );
}

export default App;
