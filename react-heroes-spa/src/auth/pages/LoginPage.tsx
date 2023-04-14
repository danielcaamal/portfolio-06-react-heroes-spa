import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context';

export const LoginPage = () => {

    const navigate = useNavigate();

    const { authState, login } = useContext(AuthContext);

    const handleLogin = async () => {
        const lastPathObj:any = JSON.parse(localStorage.getItem('lastPath') || '{}');
        const user= {
            id: '1',
            name: 'John Doe',
            email: 'email@email.com'
        }
        await login(user.id, user.email, user.name);
        let lastPath = '/';
        if (lastPathObj.email === user.email) {
            lastPath = lastPathObj.lastPath || '/';
        }
        navigate(lastPath, { replace: true });
    }

    return (
        <div className="container mt-5">
            <h1>Login Page</h1>
            <hr />

            <button 
                id="login-page-button"
                type="button" 
                className=" btn btn-primary"
                onClick={handleLogin}
                >Login
            </button>
        </div>
    )
}