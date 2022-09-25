
import './App.css';

import UserList from './UserList/UserList';


function App() {
  
    // const [data, setData] = useState();// where to store the returned data
    // const [error, setError] = useState(null);// where to store the coming errors
    // useEffect(() => {
    //   function fetchData() {// the function to fetch data from the api 
    //     fetch("https://hn.algolia.com/api/v1/search?query=redux")
    //       .then(res => res.json())
    //       .then(res => setData(res))
    //       .catch(err => setError(err));
    //   }
   
    //   fetchData();
    // }, []);
    
  return (
    <div  className="App">
      <UserList/>
  
    </div>
  );
}

export default App;
