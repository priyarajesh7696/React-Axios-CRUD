
import Dashboard from '../components/Dashboard'
import Create from '../components/Create'
import Update from '../components/Update'
import { Navigate } from 'react-router-dom'
const AppRoutes = [
    {
        path:'/dashboard',
        exact:true,
        element:<Dashboard/>
    },
    {
        path:'/create',
        exact:true,
        element:<Create/>
    },
    {
        path:'/update/:id',
        exact:true,
        element:<Update/>
    },
    {
        path:'*',
        exact:false,
        element:<Navigate to=""/>
    }
]

export default AppRoutes