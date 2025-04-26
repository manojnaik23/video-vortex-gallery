
import React from 'react';
import { Mail, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactInfo = () => {
  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      value: 'videoedit@example.com',
      href: 'mailto:videoedit@example.com'
    },
    {
      icon: PhoneCall,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {contactItems.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          className="group flex items-center space-x-4 p-6 rounded-lg 
            bg-editor-dark/50 backdrop-blur-sm border border-editor-blue/10 
            hover:border-editor-blue/30 transition-all duration-500 
            hover:transform hover:scale-105 hover:shadow-lg hover:shadow-editor-blue/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <item.icon 
            className="w-12 h-12 text-editor-blue 
              transform transition-transform duration-500 
              group-hover:scale-110 group-hover:text-editor-skyblue" 
          />
          <div>
            <h3 className="text-xl font-semibold mb-1 
              text-white group-hover:text-editor-blue 
              transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-editor-gray group-hover:text-white/80 
              transition-colors duration-300">
              {item.value}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  );
};
