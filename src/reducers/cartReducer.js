export const TYPES = {
  add:    "add",
  remove: "remove",
  clear:  "clear",
};

export function reducerCart(state,action){
  switch(action.type){
    case TYPES.add:{
		return [...state, action.payload]
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