import React, { useState } from 'react';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleSignUp = () => {
        // 비밀번호와 비밀번호 확인이 일치하는지 검사
        if (password !== passwordConfirm) {
            alert('Passwords do not match!');
            return;
        }

        // 실제로는 서버에 회원가입 요청을 보내고 응답을 처리해야 합니다.
        // 여기서는 단순히 콘솔에 출력합니다.
        console.log("Name:", name, "Email:", email, "Password:", password);
    };

    return (
        <div style={styles.flexContainer}>

        <div style={styles.container}>
            <h2>회원가입</h2>
            <div style={styles.inputGroup}>
                <label>username</label>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.input}
                />
            </div>
            <div style={styles.inputGroup}>
                <label>Email</label>
                <input 
                    type="text" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
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
            <div style={styles.inputGroup}>
                <label>Confirm Password</label>
                <input 
                    type="password" 
                    value={passwordConfirm} 
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    style={styles.input}
                />
            </div>
            <button onClick={handleSignUp} style={styles.loginButton}>회원가입</button>
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


export default SignUp;
