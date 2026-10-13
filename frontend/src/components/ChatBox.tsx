import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage, User } from '../types';
import { fetchChatMessages, sendChatMessage } from '../api';
import { playSound } from '../utils/effects';

interface ChatBoxProps {
  currentUser: User;
  currentGame: string;
}

const EMOJIS = ['😀', '🔥', '🏆', '👏', '🎮', '🎲', '👑', '💥', '🐎', '♟️', '😎', '🎉'];

export const ChatBox: React.FC<ChatBoxProps> = ({ currentUser, currentGame }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [sending, setSending] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const loadMessages = async () => {
    try {
      const data = await fetchChatMessages();
      setMessages(data);
    } catch (e) {
      // Ignore polling errors
    }
  };

  useEffect(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 2500); // Poll every 2.5s for realtime feel
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim() || sending) return;

    const text = inputVal.trim();
    setInputVal('');
    setSending(true);

    try {
      playSound('move');
      const saved = await sendChatMessage(
        currentUser.id,
        currentUser.username,
        currentUser.fullName || currentUser.username,
        currentUser.avatar || '🎮',
        text,
        currentGame
      );
      setMessages(prev => [...prev, saved]);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const addEmoji = (em: string) => {
    setInputVal(prev => prev + em);
  };

  return (
    <div className="chatbox-container glass-panel">
      <div className="chatbox-header">
        <div className="chat-title">
          <span className="live-dot" />
          <h3>PHÒNG CHAT TRỰC TUYẾN</h3>
        </div>
        <span className="room-tag">🏷️ {currentGame}</span>
      </div>

      <div className="chat-messages-area">
        {messages.length === 0 ? (
          <div className="chat-empty">Chưa có tin nhắn nào. Hãy gửi lời chào đầu tiên! 👋</div>
        ) : (
          messages.map(msg => {
            const isMe = msg.userId === currentUser.id;
            const isSystem = msg.gameTag === 'Hệ Thống';

            if (isSystem) {
              return (
                <div key={msg.id} className="system-msg">
                  <span className="system-icon">📢</span>
                  <span>{msg.message}</span>
                </div>
              );
            }

            return (
              <div key={msg.id} className={`chat-bubble-row ${isMe ? 'my-row' : 'other-row'}`}>
                {!isMe && <div className="chat-avatar">{msg.avatar || '👤'}</div>}
                <div className={`chat-bubble ${isMe ? 'my-bubble' : 'other-bubble'}`}>
                  {!isMe && (
                    <div className="bubble-meta">
                      <span className="sender-name">{msg.fullName || msg.username}</span>
                      <span className="bubble-tag">{msg.gameTag}</span>
                    </div>
                  )}
                  <div className="bubble-text">{msg.message}</div>
                </div>
              </div>
            );
          })
        )}
        <div ref={endRef} />
      </div>

      <div className="emoji-quick-bar">
        {EMOJIS.map(em => (
          <button key={em} type="button" className="emoji-btn" onClick={() => addEmoji(em)}>
            {em}
          </button>
        ))}
      </div>

      <form className="chat-input-bar" onSubmit={handleSend}>
        <input
          type="text"
          className="chat-input"
          placeholder="Nhập tin nhắn giao lưu, thách đấu..."
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
        />
        <button type="submit" className="chat-send-btn" disabled={!inputVal.trim() || sending}>
          Gửi
        </button>
      </form>
    </div>
  );
};
