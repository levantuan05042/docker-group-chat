import React, { useState, useEffect, useRef } from 'react';
import type { ChatMessage, User } from '../types';
import { fetchChatMessages, sendChatMessage } from '../api';
import { playSound } from '../utils/effects';

interface ChatBoxProps {
  currentUser: User;
  currentGame: string;
  currentRoomCode?: string | null;
  onJoinRoom?: (code: string) => void;
  onInviteRoom?: () => void;
}

const EMOJIS = ['😀', '🔥', '🏆', '👏', '🎮', '🎲', '👑', '💥', '🐎', '♟️', '😎', '🎉'];

export const ChatBox: React.FC<ChatBoxProps> = ({
  currentUser,
  currentGame,
  currentRoomCode,
  onJoinRoom,
  onInviteRoom
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [sending, setSending] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const loadMessages = async () => {
    try {
      const data = await fetchChatMessages(currentUser.id);
      setMessages(data);
    } catch (e) {
      // Ignore polling errors
    }
  };

  useEffect(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 2500);
    return () => clearInterval(interval);
  }, [currentUser.id]);

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

  const extractRoomCode = (text: string): string | null => {
    const match = text.match(/\[(ROOM-\d{4})\]/);
    return match ? match[1] : null;
  };

  return (
    <div className="chatbox-container glass-panel">
      <div className="chatbox-header">
        <div className="chat-title">
          <span className="live-dot" />
          <h3>PHÒNG CHAT TRỰC TUYẾN</h3>
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {currentRoomCode && (
            <button className="btn btn-primary btn-sm" onClick={onInviteRoom} title="Mời người chơi vào phòng">
              👥 Mời Bạn
            </button>
          )}
          <span className="room-tag">🏷️ {currentGame}</span>
        </div>
      </div>

      <div className="chat-messages-area">
        {messages.length === 0 ? (
          <div className="chat-empty">Chưa có tin nhắn nào. Hãy gửi lời chào đầu tiên! 👋</div>
        ) : (
          messages.map(msg => {
            const isMe = msg.userId === currentUser.id;
            const isTargeted = msg.targetUserId != null;
            const isForMe = msg.targetUserId === currentUser.id;
            const isFromMe = msg.userId === currentUser.id;

            // Nếu tin nhắn riêng tư mà không phải gửi cho mình và không phải do mình gửi -> ẩn
            if (isTargeted && !isForMe && !isFromMe) {
              return null;
            }

            const isSystem = msg.gameTag === 'Hệ Thống' || msg.gameTag === 'Thách Đấu' || msg.gameTag === 'Thách Đấu Riêng';
            const roomCode = extractRoomCode(msg.message);

            // Tin nhắn mời riêng tư hoặc hệ thống
            if (isSystem) {
              const isPrivateInvite = msg.gameTag === 'Thách Đấu Riêng';
              return (
                <div
                  key={msg.id}
                  className="system-msg"
                  style={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    background: isPrivateInvite ? 'rgba(239, 68, 68, 0.15)' : 'rgba(99, 102, 241, 0.1)',
                    border: isPrivateInvite ? '1px solid rgba(239, 68, 68, 0.35)' : '1px solid rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span className="system-icon">{isPrivateInvite ? '🔒' : (msg.gameTag === 'Thách Đấu' ? '⚔️' : '📢')}</span>
                    <span style={{ fontWeight: isPrivateInvite ? 600 : 400, color: isPrivateInvite ? '#fca5a5' : '#cbd5e1' }}>
                      {isPrivateInvite && isForMe && '🎯 [LỜI MỜI RIÊNG DÀNH CHO BẠN]: '}
                      {isPrivateInvite && isFromMe && '🔒 [BẠN ĐÃ GỬI LỜI MỜI RIÊNG]: '}
                      {msg.message}
                    </span>
                  </div>
                  {roomCode && onJoinRoom && isForMe && (
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ marginTop: '8px', alignSelf: 'flex-end', background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)' }}
                      onClick={() => onJoinRoom(roomCode)}
                    >
                      ⚔️ Chấp Nhận &amp; Vào Phòng [{roomCode}] Ngay
                    </button>
                  )}
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
                  {roomCode && onJoinRoom && !isMe && (
                    <button
                      className="btn btn-primary btn-sm"
                      style={{ marginTop: '6px', fontSize: '11px', padding: '4px 8px' }}
                      onClick={() => onJoinRoom(roomCode)}
                    >
                      ⚔️ Vào Chơi Ngay [{roomCode}]
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
        <div ref={endRef} />
      </div>

      <div className="chatbox-footer">
        <div className="emoji-bar">
          {EMOJIS.map(em => (
            <button key={em} className="emoji-btn" onClick={() => addEmoji(em)} type="button">
              {em}
            </button>
          ))}
        </div>

        <form onSubmit={handleSend} className="chat-input-form">
          <input
            type="text"
            className="chat-input"
            placeholder="Nhập tin nhắn..."
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            disabled={sending}
          />
          <button type="submit" className="chat-send-btn" disabled={!inputVal.trim() || sending}>
            {sending ? '...' : 'Gửi'}
          </button>
        </form>
      </div>
    </div>
  );
};
