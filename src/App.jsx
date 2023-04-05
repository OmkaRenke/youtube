import './App.scss'
import AppContext from './context/contextApi'

import Header from "./components/header/Header"
import Feed from "./components/feed/Feed"
import SingleVideoDetails from './singlevideodetails/SingleVideoDetails'
import SearchResult from "./components/searchResult/SearchResult"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <AppContext>
     	<BrowserRouter>
			<div>
				<Header/>
				<Routes>
					<Route path='/' exact element={<Feed/>}/>
					<Route path='/searchResult/:query' element={<SearchResult/>}/>
					<Route path='/video/:id' element={<SingleVideoDetails/>}/>
				</Routes>
			</div>
     	</BrowserRouter>
    </AppContext>
  )
}

export default App
