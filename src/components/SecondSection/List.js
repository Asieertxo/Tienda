import { useEffect, useState } from "react";
import Item from "./Item";
import { getAsyncStories, withError} from "./../../api/bbdd"

function List(props) {

  useEffect(() => {
    loadStories();
  }, []);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function loadStories(){
    setIsError(false);
    setIsLoading(true);
    withError(getAsyncStories()).then(result => {
      setList(result.data.stories);
      setIsLoading(false);
    }).catch(_err => setIsError(true));
  }




  if(isError){
    return <>
      <p>Error!</p>
      <button onClick={loadStories}>Retry</button>
    </>
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