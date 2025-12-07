'use client';

import React from 'react';
import { Fab, Tooltip, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';

export default function FloatingContactButtons() {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 24,
                right: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                zIndex: 9999,
                alignItems: 'center',
            }}
        >
            <style jsx global>{`
        @keyframes pulse-green {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>

            {/* Phone Button */}
            <Tooltip title="Call us" placement="left" arrow>
                <Fab
                    color="primary"
                    aria-label="call"
                    href="tel:9798146740"
                    sx={{
                        backgroundColor: '#007AFF',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#0056b3',
                        },
                    }}
                >
                    <PhoneIcon />
                </Fab>
            </Tooltip>

            {/* WhatsApp Button */}
            <Tooltip title="Chat with us" placement="left" arrow>
                <Fab
                    aria-label="whatsapp"
                    href="https://wa.me/919798146740"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        animation: 'pulse-green 2s infinite',
                        '&:hover': {
                            backgroundColor: '#1da851',
                        },
                    }}
                >
                    <WhatsAppIcon sx={{ fontSize: 32 }} />
                </Fab>
            </Tooltip>
        </Box>
    );
}
