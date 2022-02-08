export const initialState = {contador:1};

export const TYPES = {
  sumar:   "suma",
  restar:  "resta",
};

export function reducerContador(state, action){
  switch(action.type){
    case TYPES.sumar:
      return {contador: state.contador +1};
    case TYPES.restar:
      if(state.contador > 0){
        return {contador: state.contador -1};
      }else{
        return state;
      }
    default:
      return state;
  }
}