import logo from './logo.svg';
import './App.css';
import Header from './components/home/header'
import Footer from './components/home/footer';
import Hero from './components/home/hero'

function App() {
  return (
    <div className="App">
            <Header />

            <main>
              <Hero />
              {}
            </main>

            <Footer />
        </div>
  );
}

export default App;
