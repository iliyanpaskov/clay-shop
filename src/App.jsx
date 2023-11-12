import { Header } from './components/Header/Header';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Footer } from './components/Footer/Footer';
import { CommentsProvider } from './context/CommentsContext';
import { CartProvider } from './context/CartContext';
import { TotalPriceProvider } from './context/TotalPriceContext';

function App() {

	return (
		<>
			<CommentsProvider>
				<CartProvider>
					<TotalPriceProvider>
						<Header />
						<main>
							<ProductPage />
						</main>
						<Footer />
					</TotalPriceProvider>
				</CartProvider>
			</CommentsProvider>
		</>
	)
}

export default App;
