import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { useState } from 'react'
import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import CartPage from 'pages/CartPage/CartPage'
import About from 'pages/About/AboutPage'
import Shipping from 'pages/Shipping/ShippingPage'
import Payment from 'pages/Payment/PaymentPage'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

export type ProductsInCartType = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCartType>({})

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState) => {
            let prevProductsInCart = { ...prevState }
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => addProductToCart(2, 1)}>
                Add to cart (id:2, count: 5)
            </button>
            <button onClick={() => removeProductFromCart(2)}>
                Remove product (id: 2)
            </button>
            <Container
                sx={{
                    padding: '60px 0',
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="/cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </Container>
            <Footer />
        </StyledEngineProvider>
    )
}
export default App
