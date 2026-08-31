import React from 'react';
import { Box, Typography, keyframes } from '@mui/material';
import Star from "../Image/Star.svg"
import "../App.css"

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const TickerTape = ({ textItems, bgColor, textColor, rotateAngle, zIndex, reverse = false }) => {
  const repeatedText = [...textItems, ...textItems, ...textItems, ...textItems];

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '-10%',
        width: '120%',
        backgroundColor: bgColor,
        color: textColor,
        transform: `rotate(${rotateAngle}deg)`,
        transformOrigin: 'center center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        py: 1.5,
        boxShadow: 3,
        zIndex: zIndex,
        fontFamily: "Cal Sans",
        fontSize: "32px",
        fontStyle: "normal" ,
        fontweight: "400" ,
        lineheight: "40px" ,
        
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 3,
          animation: `${marqueeAnimation} 25s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {repeatedText.map((item, index) => (
          <React.Fragment key={index}>
            <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', textTransform: 'none' }}>
              {item}
            </Typography>
            
            {/* التعديل هنا: تكبير شكل الفاصل */}
            <Box
              component="span"
              sx={{
                // fontSize: '1.4rem', // تكبير الحجم
                // fontWeight: 900,   // زيادة سمك الخط
                // opacity: 0.9,      // توضيح اللون
                px: 1,
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily:"Cal Sans",
                fontSize: "32px",
                fontStyle: "normal" ,
                fontweight: "bold" ,
                lineheight: "40px" ,
                color:"white"
              }}
            >
            <img src={Star} alt="logo"/>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default function DualMarquee() {
  const blackTapeTexts = ['Scale', 'Growth', 'Senior Designer', 'Clean Code', 'Web Apps'];
  const orangeTapeTexts = ['Development', 'Mobile Apps', 'AI Solutions', 'Product Strategy', 'SaaS Development'];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DCDCDC',
      }}
    >
      <TickerTape
        textItems={blackTapeTexts}
        bgColor="#1a1a1a"
        textColor="#ffffff"
        rotateAngle={-6}
        zIndex={1}
      />

      <TickerTape
        textItems={orangeTapeTexts}
        bgColor="#ff5722"
        textColor="#ffffff"
        rotateAngle={5.8}
        zIndex={2}
        reverse={true}
      />
    </Box>
  );
}