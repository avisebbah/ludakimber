
import { useState } from 'react';
import MessageBubble from './MessageBubble';
import LudaAvatar from './LudaAvatar';

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const ludaReply = { sender: 'luda', text: data.reply };
    setMessages(prev => [...prev, ludaReply]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <LudaAvatar />
      <div className="messages">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="הקלד הודעה ללודה..."
        className="chat-input"
      />
    </div>
  );
}
