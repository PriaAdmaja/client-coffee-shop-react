import { createBrowserRouter } from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword'

import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Homepage from './pages/Homepage'
import Checkout from './pages/Checkout'
import History from './pages/History'
import NotFound from './pages/NotFound'
import CheckToken from './utils/wrapper/CheckToken'

const router = createBrowserRouter([
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/forgotpassword', element: <ForgotPassword /> },
    { path: '/products', element: <Products /> },
    {
        path: '/product/:id', element: (
            <CheckToken>
                <ProductDetail />
            </CheckToken>
        )
    },
    {
        path: '/profile', element: (
            <CheckToken>
                <Profile />
            </CheckToken>
        )
    },
    {
        path: '/transaction', element: (
            <CheckToken>
                <Checkout />
            </CheckToken>
        )
    },
    {
        path: '/history', element: (
            <CheckToken>
                <History />
            </CheckToken>
        )
    },
    { path: '/', element: <Homepage /> },
    { path: '*', element: <NotFound /> },

])

export default router