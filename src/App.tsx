import './App.css'
import ListItems from './components/ListItems'
import { recievedData } from './data/recievedData'

function App() {

  return (
    <ListItems list={recievedData}/>
  )
}

export default App
