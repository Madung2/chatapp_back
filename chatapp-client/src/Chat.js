import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://www.tashaworld.net:3000',{
    transports: ['websocket']
});

function ChatApp() {
    const [message, setMessage] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        socket.on('receive', (msg) => {
            setChatLog([...chatLog, msg]);
        });

        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });  // chatLog가 업데이트될 때마다 스크롤 위치를 맨 아래로 조정합니다.
        return () => {
            console.log('message received');
        };
    }, [chatLog]);
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();  // 기본 동작(예: 줄 바꿈)을 막습니다.
            handleSendMessage();
        }
    };

    const handleSendMessage = () => {
        console.log(message)
        socket.emit('send', message);
        console.log('sent')
        setMessage('');
    };



    const Msg = ((props)=> { 
        const styles = {
            messageBox: {
                padding: '10px',
                margin: '10px 0',
                borderRadius: '5px',
                backgroundColor: '#f1f1f1',
                maxWidth: '80%',
                width: '100%',
                display: 'block',
                clear: 'both'
            },
            messageContainer: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',  // 오른쪽 정렬
                justifyContent: 'flex-end', // 아래쪽 정렬
                height: '100%'  // 컨테이너 높이 설정
            }
        };
        
    
        return (
            // <div style={styles.messageContainer}>
                <div style={styles.messageBox}>{props.text}</div>
            // </div>

        );
    }
    );
    return (
    <div>
        <div style={{height:'100vh', width:'470px'}}>
            <div style={{ 
                display: 'flex',        // flexbox 사용
                justifyContent: 'center', // 가로축에서 중앙 정렬

            }}>
                <h1> Tasha T v1. Test2 </h1>
            </div>
            <div style={{
                height: '590px',       // div의 높이를 300px로 고정
                overflowY: 'auto',    // 세로 방향으로 스크롤을 허용
                border: '1px solid black',
                padding: '10px',
                marginBottom: '10px',

            }}>
                {chatLog.map((msg, idx) => <Msg key={idx} text={msg}/>)}
                <div ref={messagesEndRef} /> {/* 스크롤 위치를 조정할 때 사용할 엘리먼트입니다. */} 
            </div>
            <div style ={{
                width: '100%',
                height: '50px',
                display: 'flex', // flexbox를 사용하여 가로로 요소를 배치
                alignItems: 'center', // 중앙 정렬 (세로)
                justifyContent: 'space-between' // 양쪽 요소 사이에 공간 배치
            }}>
                <input value={message} style={{flexGrow:1, marginRight:'10px', height:'100%'}} onChange={(e) => setMessage(e.target.value)} onKeyPress={handleKeyPress} />
                <button onClick={handleSendMessage} style={{height:'100%'}}>Send</button>
            </div>
        </div>
    </div>
    );
}

export default ChatApp;
