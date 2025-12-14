'use client';

import React from 'react';
import { Fab, Tooltip, Box } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';

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
        @keyframes pulse-instagram {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(225, 48, 108, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(225, 48, 108, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(225, 48, 108, 0);
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

            {/* Instagram Button */}
            <Tooltip title="Follow us on Instagram" placement="left" arrow>
                <Fab
                    aria-label="instagram"
                    href="https://www.instagram.com/zuprides.ranchi?igsh=a2JvY3F1NXg2ZW0y"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                        color: 'white',
                        animation: 'pulse-instagram 2s infinite',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #d87e2e 0%, #c95a34 25%, #b8223a 50%, #a81e5a 75%, #9a1476 100%)',
                        },
                    }}
                >
                    <InstagramIcon sx={{ fontSize: 28 }} />
                </Fab>
            </Tooltip>
        </Box>
    );
}
