import './App.module.scss'

import Home from './pages/home/Home'
import Navigation from './components/navigation/Navigation'
import Category from './pages/category/Category'
import { Routes, Route,BrowserRouter } from 'react-router-dom'
import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
   uri: 'http://localhost:1337/graphql',
   cache: new InMemoryCache()
})


function App() {
	return (
         <BrowserRouter>
         <ApolloProvider client={client} >
		<div>
				<Navigation />
			<Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/category/:id' element={<Category/>}/>
			</Routes>
		</div>
      </ApolloProvider>
         </BrowserRouter>
	)
}

export default App
