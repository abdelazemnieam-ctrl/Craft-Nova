import React from 'react';
import { Container, Typography, Stack, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Hello from "../Image/Hello.svg";
import Icon1 from "../Image/Icon1.svg";
import Icon2 from "../Image/Icon2.svg";

const tagsData = [
  // الصف الأول
  [
    { label: 'Web Apps', icon: <img src={Icon1} alt="Icon1" /> },
    { label: 'Branding', icon: <img src={Icon2} alt="Icon2" /> },
  ],
  // الصف الثاني
  [
    { label: 'AI Solutions', icon: <img src={Icon1} alt="Icon1" /> },
    { label: 'Mobile Apps', icon: <img src={Icon1} alt="Icon1" /> },
    { label: 'Development', icon: <img src={Icon1} alt="Icon1" /> },
  ],
];

// تحويل مكونات MUI إلى مكونات متحركة بواسطة framer-motion
const MotionTypography = motion(Typography);
const MotionStack = motion(Stack);

// إعدادات الحركة (Fade in + Move UP)
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// إعدادات تتابع حركة الأزرار
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

export default function HeroSection() {
  return (
    <Container maxWidth="100%" sx={{ textAlign: 'center', py: 10, direction: 'rtl', width: "100%" ,backgroundColor:"#DCDCDC"}}>
      
      {/* 1. كلمة (hello) */}
      <MotionTypography
        variant="subtitle1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInUp}
        sx={{
          color: '#d32f2f',
          fontFamily: 'cursive',
          mb: 2,
        }}
      >
        <img src={Hello} alt="Hello" />
      </MotionTypography>

      {/* 2. النص الرئيسي */}
      <MotionTypography
        variant="h4"
        component="h1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' }
          }
        }}
        sx={{
          fontWeight: 'bold',
          lineHeight: 1.6,
          color: '#010305',
          mb: 4,
          fontFamily: "Cal Sans",
          direction: 'ltr', // تعديل اتجاه النص الإنجليزي ليكون متناسقاً
        }}
      >
        We build modern websites, mobile apps <br/> and AI solutions — designed to grow<br/> businesses with speed and confidence.
      </MotionTypography>

      {/* 3. الأزرار (Chips) */}
      <MotionStack
        justifyContent="center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            my: 4,
          }}
        >
          {tagsData.map((row, rowIndex) => (
            <Box key={rowIndex} sx={{ display: 'flex', gap: 1.5 }}>
              {row.map((item, index) => (
                <Chip
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  sx={{
                    pointerEvents: 'none',
                    backgroundColor: '#595050',
                    color: '#ffffff',
                    borderRadius: '50px',
                    px: 1.5,
                    py: 2.2,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    border: '1px solid #444444',
                    direction: 'ltr', // يجعل اتجاه عناصر الـ Chip من اليسار لليمين
                    flexDirection: 'row', // يضمن ظهور الأيقونة أولاً ثم النص
                    '& .MuiChip-icon': {
                      color: '#ffffff',
                      ml: 1,
                      mr: 0, // إضافة مسافة بين الأيقونة والنص
                    },
                  }}
                />
              ))}
            </Box>
          ))}
        </Box>
      </MotionStack>
      

    </Container>
  );
}