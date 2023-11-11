import { Header } from './components/Header/Header';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { Footer } from './components/Footer/Footer';
import './App.css';
import { CommentsProvider } from './context/CommentsContext';

function App() {

	return (
		<>
			<CommentsProvider>
				<Header />
				<main>
					<ProductPage />
				</main>
				<Footer />
			</CommentsProvider>
		</>
	)
}

export default App;
