import './App.css'
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import './index.css'; 
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';


function App() {


  return (
   
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
              <Navbar />
              <BookList />
              <ThemeToggle />
          </ThemeContextProvider>
          </AuthContextProvider>
       
    </div>  
  )
}

export default App
