import React from 'react';
import { useAppSelector } from '../../redux/store';

function App() {
  // // const state = useSelector(state => state.state)
  const state = useAppSelector(state => state.defaultState)
  return (
    <div className="App">
      {state.map(item => {
        return <div key={item.id}>
          <h2>{item.text}</h2>
        </div>
      })}
    </div>
  );
}

export default App;
