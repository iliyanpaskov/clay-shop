import { Header } from './components/Header/Header';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {

	return (
		<>
			<Header />
			<main>
				<ProductPage />
			</main>
			<Footer />
		</>
	)
}

export default App;
