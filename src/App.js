import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import Box from './component/Box'


function App() {
  const num = useSelector(state=>state.num);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({type:'INCREMENT'});
  }
  const decrease = () => {
    dispatch({type:'DECREMENT'});
  }
  const decreaseMore = (e) => {
    e.preventDefault();
    dispatch({type:'DECREMENTMORE',payload:{number:e.target.previousSibling.value}})
  }
  return (
    <div>
      <p>{num}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
      <form action='/'>
        <input type='text'/>
        <button onClick={(e)=>{decreaseMore(e)}} type='submit'>만큼 감소</button>
      </form>
      <Box />
    </div>
  );
}

export default App;
