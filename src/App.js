import './App.css';
import HomePage from './components/HomePage';
import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';
import LoginForm from './components/LoginForm';
import Header2 from './components/Header2';
import InfoSection from './components/InfoSection'; 


function App() {
  
  const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    // Aquí puedes manejar la lógica de búsqueda
  };

  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
      <SearchBar onSearch={handleSearch} />
      <HomePage />
      <Background />
      <Header /> 
      <Header2 />
      <Footer />
      <LoginForm />
      <InfoSection />
             
    </div>

      </header>
    </div>
  );
}

export default App;
