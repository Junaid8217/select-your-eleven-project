import { Suspense, useState } from 'react'


import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'

const fetchPlayers = async () => {
  const res =await fetch('/players.json')
  return res.json()
}
const playerPromise = fetchPlayers()

function App() {
  const [toggle, setToggle] = useState(true) 
  const [availableBalance, setAvailableBalance] = useState(600000)
  


  return (
    <>
      

      <Navbar availableBalance={availableBalance}></Navbar>
      <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>Available Players</h1>
        <div className='font-bold'>
          <button onClick={()=> setToggle(true)} className={`p-3 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true? "bg-green-200": ""}`}>Available</button>
          <button onClick={()=> setToggle(false)} className={`p-3 border-1 border-gray-400 rounded-r-2xl border-r-0 ${toggle===false? "bg-green-200": ""}`}>Selected <span>(0)</span></button>
        </div>
      </div>

      {
        toggle === true? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} playerPromise={playerPromise}></AvailablePlayers>
      </Suspense> : <SelectedPlayers></SelectedPlayers>
      }
     
     


    </>
  )
}

export default App
