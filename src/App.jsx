import { Header } from './components/Header/Header';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Footer } from './components/Footer/Footer';
import { CommentsProvider } from './context/CommentsContext';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {

	return (
		<>
			<CommentsProvider>
				<CartProvider>
					<Header />
					<main>
						<ProductPage />
					</main>
					<Footer />
				</CartProvider>
			</CommentsProvider>
		</>
	)
}

export default App;
