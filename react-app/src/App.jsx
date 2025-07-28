

import Greeting from './Greeting';
import TodoList from './TodoList';
import Counter from './Counter';
import ToggleSwitch from './ToggleSwitch';
import TodoEnhanced from './TodoEnhanced';
import MessageToggle from './MessageToggle';
import ProductCard from './ProductCard';
import AuthButton from './AuthButton';
import Timer from './Timer';
import Quote from './Quote'


function App(){


   const products = [
    { id: 1, name: 'Laptop Pro', price: 1500.00, inStock: true },
    { id: 2, name: 'Wireless Mouse', price: 25.50, inStock: true },
    { id: 3, name: 'Mechanical Keyboard', price: 99.99, inStock: false },
    { id: 4, name: 'Webcam HD', price: 45.00, inStock: true },
  ];
  return(

    
<div  
style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: 0,
      padding: '20px',
      textAlign: 'center',
      width: '100%',
    }}>
  <h1>Welcome message</h1>
  <Greeting name = "Shova"/>


  <hr style={{ width: '100%' }}/>
  <TodoList />


  <hr style={{ width: '100%' }} />
  <Counter />

  <hr style={{ width: '100%' }}/>
  <ToggleSwitch />

  <hr style={{ width: '100%' }}/>
  <TodoEnhanced />

  <hr style={{ width: '100%' }}/>
  <MessageToggle />
  
   <hr />
      <h2>Our Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <hr style={{ width: '100%' }}/>
      <AuthButton />
  <hr style={{ width: '100%' }}/>
  <Timer />
   <hr style={{ width: '100%' }}/>
   <Quote />
</div>
  );
}

export default App;