import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000',{
    transports: ['websocket']
});

function ChatApp() {
    const [message, setMessage] = useState('');
    const [chatLog, setChatLog] = useState([]);

    useEffect(() => {
        socket.on('receive', (msg) => {
            setChatLog([...chatLog, msg]);
        });

        return () => {
            console.log('socket disconnected')
        };
    }, [chatLog]);

    const handleSendMessage = () => {
        console.log(message)
        socket.emit('send', message);
        console.log('sent')
        setMessage('');
    };

    return (
    <div>
        <div style={{height:'100vh', width:'470px'}}>
            <div style={{ 
                display: 'flex',        // flexbox 사용
                justifyContent: 'center', // 가로축에서 중앙 정렬
                // alignItems: 'center',     // 세로축에서 중앙 정렬
                // height: '100vh'          // 전체 높이
            }}>
                <h1> Chat App</h1>
            </div>
            <div style={{
                height: '590px',       // div의 높이를 300px로 고정
                overflowY: 'auto',    // 세로 방향으로 스크롤을 허용
                border: '1px solid black',
                padding: '10px',
                marginBottom: '10px',
                display:'flex',
                'justifyContent': 'center'
            }}>
                {chatLog.map((msg, idx) => <p key={idx}>{msg}</p>)}
            </div>
            <div style ={{
                // backgroundColor : 'blue',
                width: '100%',
                height: '50px',
                display: 'flex', // flexbox를 사용하여 가로로 요소를 배치
                alignItems: 'center', // 중앙 정렬 (세로)
                justifyContent: 'space-between' // 양쪽 요소 사이에 공간 배치
            }}>
                <input value={message} style={{flexGrow:1, marginRight:'10px', height:'100%'}} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={handleSendMessage} style={{height:'100%'}}>Send</button>
            </div>
        </div>
    </div>
    );
}

export default ChatApp;