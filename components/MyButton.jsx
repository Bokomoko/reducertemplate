import { useContext } from 'react'
import MyContext from '../components/MyContext'


export default function MyButton({buttonNumber}) {
    function myClikc(qualBotão) {
        console.log('Inside myClikc');
        dispatch({ type: 'CLICKED', payload: qualBotão });
      }

    const [state,dispatch] = useContext(MyContext)
    return
    <button type='button' onClick={() => myClikc(buttonNumber)}>
    {buttonNumber}
  </button>
}
