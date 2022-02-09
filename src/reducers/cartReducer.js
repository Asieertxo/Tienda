import { isContentEditable } from "@testing-library/user-event/dist/utils";

export const TYPES = {
  add:    "add",
  remove: "remove",
  clear:  "clear",
};

export function reducerCart(state,action){

  switch(action.type){
    case TYPES.add:{
      let incart = false
      state.map(function (item){
        if(item.ObjectID == action.payload.ObjectID){
          incart = true
          return incart      
        }
      })
      if(incart == false){
        return [...state, {...action.payload, quantity:1}]
      }else{
        return [...state.map(item => item.ObjectID === action.payload.ObjectID ? {...item, quantity:item.quantity +1}:item)]
      }
    }


    case TYPES.remove:{

    }
    case TYPES.clear:{

    }
    default:
      return state;
  }
}

export const initialState = [];