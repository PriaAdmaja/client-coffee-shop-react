import { createBrowserRouter } from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword'

import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Homepage from './pages/Homepage'

const router = createBrowserRouter([
{path:'/login', element: <Login />},
{path: '/signup', element: <SignUp/>},
{path: '/forgotpassword', element: <ForgotPassword />},
{path: '/products', element: <Products />},
{path: '/productdetail', element: <ProductDetail />},
{path: '/profile', element: <Profile />},
{path: '/', element: <Homepage />},

])

export default router