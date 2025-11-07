import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const API_URL = 'http://127.0.0.1:8000/chat';

  const send = async () => {
    if(!input.trim()) return;
    const newMsgs = [...messages, {role:'user', text: input}];
    setMessages(newMsgs);
    setInput('');
    try{
      const res = await axios.post(API_URL, { prompt: input });
      setMessages([...newMsgs, { role: 'bot', text: res.data.reply }]);
    }catch(e){
      setMessages([...newMsgs, { role: 'bot', text: 'Lỗi: '+ (e.message || 'Không kết nối') }]);
    }
  };

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding:20}}>
      <h2>💬 THCSKIENHUNG8A6</h2>
      <div style={{width:'100%', maxWidth:720, height:420, background:'#fff', border:'1px solid #ddd', padding:12, overflowY:'auto'}}>
        {messages.map((m,i)=>(
          <div key={i} style={{margin:6, color: m.role==='user' ? '#0b76ef' : '#1a8a3d'}}>
            <strong>{m.role==='user' ? 'Bạn' : 'LyzAI'}:</strong> {m.text}
          </div>
        ))}
      </div>
      <div style={{width:'100%', maxWidth:720, display:'flex', marginTop:10}}>
        <input style={{flex:1, padding:8}} value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=> e.key==='Enter' && send()} placeholder="Nhập tin nhắn..." />
        <button style={{marginLeft:8, padding:'8px 12px'}} onClick={send}>Gửi</button>
      </div>
    </div>
  );
}

export default App;
