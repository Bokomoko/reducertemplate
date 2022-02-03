import { useContext } from 'react'
import MyContext from '../components/MyContext'


export default function MyButton({ buttonNumber }) {
  function myClick(whichButton) {
    console.log('Inside myClikc');
    dispatch({ type: 'CLICKED', payload: whichButton });
  }

  const [state, dispatch] = useContext(MyContext)
  return (
    <button type='button' onClick={() => myClick(buttonNumber)}>
      {buttonNumber}
    </button>)
}
