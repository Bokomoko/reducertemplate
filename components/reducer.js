export default function Reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CLICKED': {
      console.log(`Clicked the ${payload} button`);
      console.log(`Previou button was ${state.clickedButton}`);
      return { ...state, clickedButton: payload };
    }
    default:
      console.log('It shouldn´t reach it here');
      return state;
  }
}
