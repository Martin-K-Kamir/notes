import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotals, fetchCartItems } from './features/cart/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Modal from './components/Modal.jsx';

function App() {
    const { cartItems, isLoading } = useSelector(state => state.cart);
    const { modalOpen } = useSelector(state => state.modal);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cartItems.length < 1) return;
        dispatch(calculateTotals());
    }, [cartItems]);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, []);

    if (isLoading || cartItems.length < 1) {
        return (
            <main>
                <Navbar />
                <div className="loading">
                    <h2>Loading...</h2>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Navbar />
            <CartContainer />
            {modalOpen && <Modal />}
        </main>
    );
}

export default App;
