import {Routes, Route, Navigate} from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

const MainRoutes = () => {
    return(
        <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
    )
}

export default MainRoutes
