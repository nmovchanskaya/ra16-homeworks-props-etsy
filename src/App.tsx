import { ListingFC } from './components/ListingFC';
import { ItemList } from './components/ItemList';
import './App.css';

let itemsList = new ItemList();
let items = itemsList.data;

function App() {

  return (
    <div className='container'>
      <ListingFC items={items}/>
    </div>
  );
}

export default App;
