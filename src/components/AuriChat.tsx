import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, IconButton, Paper, Typography, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';

interface ChatMessage {
  type: 'user' | 'auri';
  message: string;
  timestamp: Date;
}

const AuriChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSend = async () => {
    if (message.trim()) {
      const userMessage: ChatMessage = {
        type: 'user',
        message: message.trim(),
        timestamp: new Date()
      };
      
      setChatHistory(prev => [...prev, userMessage]);
      setMessage('');

      // Simulate Auri's response (replace with actual AI integration)
      setTimeout(() => {
        const auriResponse: ChatMessage = {
          type: 'auri',
          message: "I'm analyzing the markets and will provide insights shortly...",
          timestamp: new Date()
        };
        setChatHistory(prev => [...prev, auriResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        ref={chatContainerRef}
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          mb: 2,
          px: 2,
          '&::-webkit-scrollbar': {
            width: '0.4em'
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(0,0,0,.1)',
            borderRadius: '4px'
          }
        }}
      >
        {chatHistory.map((chat, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: chat.type === 'user' ? 'flex-end' : 'flex-start',
              mb: 2,
              gap: 1,
            }}
          >
            {chat.type === 'auri' && (
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <SmartToyIcon />
              </Avatar>
            )}
            <Paper
              sx={{
                p: 2,
                maxWidth: '70%',
                backgroundColor: chat.type === 'user' ? 'primary.main' : 'background.default',
                color: chat.type === 'user' ? 'white' : 'text.primary',
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">{chat.message}</Typography>
              <Typography variant="caption" sx={{ opacity: 0.7 }}>
                {chat.timestamp.toLocaleTimeString()}
              </Typography>
            </Paper>
            {chat.type === 'user' && (
              <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <PersonIcon />
              </Avatar>
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: 'background.paper' }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            size="small"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Auri anything about markets..."
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
          <IconButton 
            onClick={handleSend}
            color="primary"
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': {
                bgcolor: 'primary.dark',
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default AuriChat;
