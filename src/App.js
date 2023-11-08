import logo from './logo.svg';
import './App.css';
import Header from './components/home/header'
import Footer from './components/home/footer';
import Hero from './components/home/hero'
import Body from './components/home/body'

function App() {
  return (
    <div className="App">
            <Header />

            <main>
              <Hero />
              {}
            </main>

            <Body />

            <Footer />
        </div>
  );
}

export default App;
