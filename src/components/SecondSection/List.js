import { useEffect, useState } from "react";
import Item from "./Item";
import { getAsyncStories, withError} from "./../../api/bbdd"

function List(props) {

  useEffect(() => {
    setIsLoading(true);
    withError(getAsyncStories()).then(result => {
      setList(result.data.stories);
      setIsLoading(false);
    }).catch(_err => setIsError(true));
  }, []);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  if(isError){
    return <p>Error!</p>
  }

  return isLoading ? <p>Loading...</p> : 
    <div className="second-products">
      {list.map(function (item){
        return(
            <div key={item.ObjectID} className="second-products__card">
              <Item item={item} second={true} addCart={props.addCart}/>
            </div>
          );
        })}
    </div>
}



export default List;