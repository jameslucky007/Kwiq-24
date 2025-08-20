'use client';
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const FloatingWhatsappWrapper = () => {
  return (
    <div>
      {/* Your other page content */}

      <FloatingWhatsApp 
        phoneNumber="+91 9211961238" 
        accountName="Kwiq 24" 
        avatar="/Favicon.png" 
        statusMessage="book your services "
        chatMessage="Hello there! Place your order"
      />
    </div>
  );
};

export default FloatingWhatsappWrapper;