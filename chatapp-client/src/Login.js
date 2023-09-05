import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // 로그인 로직을 여기에 구현
        console.log('Logging in with', username, password);
    };

    return (
        <div style={styles.flexContainer}>

        <div style={styles.container}>
            <h2>Login</h2>
            <div style={styles.inputGroup}>
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                />
            </div>
            <div style={styles.inputGroup}>
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
            </div>
            
            <button onClick={handleLogin} style={styles.loginButton}>로그인</button>
            <button onClick={()=>navigate('/signup')} style={styles.loginButton}>회원가입</button>
        </div>
        </div>
    );
}

const styles = {
    flexContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // 브라우저 뷰포트의 100% 높이
    },
    container: {
        width: '300px',
        margin: 'auto',
        padding: '20px',
        paddingbottom : '30px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)'
    },
    inputGroup: {
        marginBottom: '15px'
    },
    input: {
        width: '93%',
        padding: '10px',
        margin: '1px',
        borderRadius: '3px',
        border: '1px solid #ccc'
    },
    loginButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        margin: '3px'
    }
};

export default LoginPage;