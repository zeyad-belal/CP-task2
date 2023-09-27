import './App.css'
import Filter from './components/Filter/Filter'
import Results from './components/Results/Results'
import SideNav from './components/SideNav/SideNav'

function App() {

  return (
    <div className='app'>
      <SideNav />
      <div className='page'>
        <Filter />
        <Results />
      </div>
    </div>
  )
}

export default App
