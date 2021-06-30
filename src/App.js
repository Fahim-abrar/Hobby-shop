import logo from './logo.svg';
import './App.css';
import Card from './Card'
import {useStateValue} from './StateProvider/StateProvider'

function App() {
  const [state, dispatch] = useStateValue()
  return (
    <div className="App">
      {state.product.map((product) => <Card
        title={product.title}
        imageUrl={product.imageUrl}
        body={product.body}
      />)}

    </div>
  );
}

export default App;
