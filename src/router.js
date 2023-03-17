import { createBrowserRouter } from 'react-router-dom'
import ForgotPassword from './pages/ForgotPassword'

import Login from './pages/Login'
import SignUp from './pages/SignUp'

const router = createBrowserRouter([
{path:'/login', element: <Login />},
{path: '/signup', element: <SignUp/>},
{path: '/forgotpassword', element: <ForgotPassword />},

])

export default router