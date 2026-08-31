import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography, Container, Stack, Chip } from '@mui/material';
import Star from "../Image/Star.svg";
import  Rectangle  from "../Image/Rectangle.svg";

const ServicesSection = () => {
  
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // كشف وصول الـ Scroll للمكون لتفعيل الظهور التدريجي
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // يظهر المكون بمجرد الوصول إليه
        }
      },
      { threshold: 0.2 } // يشتغل لما يظهر 20% من السكشن في الشاشة
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <Box 
      ref={sectionRef} 
      sx={{ 
        backgroundColor: '#f4f4f0', 
        minHeight: '100vh', 
        py: 8, 
        overflow: 'hidden',
        // انيميشن ظهور المكون بالكامل عند الـ Scroll
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        background:"#DCDCDC",
      }}
    >
      <Container maxWidth="xl" sx={{ pl: { xs: 3, md: '5%' }, pr: { xs: 3, md: '5%' } }}>
        
        {/* 1. العنوان الرئيسي */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="caption" sx={{ color: '#777', display: 'block', mb: 0.5 }}>
            (Services)
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 600, letterSpacing: '-0.5px', color: '#111' }}>
            Web Development
          </Typography>
          <Typography sx={{paddingTop:"53px"}}>
            <hr/>
          </Typography>
        </Box>

        {/* 2. الأربع كلمات مفرودة على عرض الشاشة */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '100%', 
            mb: 5, 
            borderBottom: '1px solid #e0e0e0', 
            pb: 2 
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer' }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#ff4d2e' }} />
            <Typography sx={{ fontWeight: 600, color: '#ff4d2e', fontSize: '0.95rem' }}>
              Web Development
            </Typography>
          </Stack>

          <Typography sx={{ color: '#666', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { color: '#000' } }}>
            Mobile Apps
          </Typography>

          <Typography sx={{ color: '#666', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { color: '#000' } }}>
            AI Solutions
          </Typography>

          <Typography sx={{ color: '#666', cursor: 'pointer', fontSize: '0.95rem', '&:hover': { color: '#000' } }}>
            Product Design
          </Typography>
        </Box>

        {/* 3. النص خلف الصورة (حركة تلقائية مستقلة تماماً من اليسار لليمين) */}
        <Box sx={{ position: 'relative', width: '100%', my: 4, display: 'flex', justifyContent: 'center' }}>
          
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '100vw',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                animation: 'marqueeLeftToRight 20s linear infinite',
                '@keyframes marqueeLeftToRight': {
                  '0%': { transform: 'translateX(-30%)' },
                  '100%': { transform: 'translateX(30%)' },
                },
              }}
            >
              <Typography
                sx={{

                      fontFamily: " sans-serif",
                      fontWeight: 100,
                      textAlign: 'center',
                      width: '70%',
                      userSelect: 'none',
                      whiteSpace: 'nowrap',
                      fontSize: 'clamp(2.5rem, 6vw, 150px)',
                      lineHeight: 1,
                      background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                }}
              >
                <span> <img src={Star}/> </span>Landing Pages &nbsp;&nbsp;&nbsp;&nbsp;  <span> <img src={Star}/> </span>Landing Pages &nbsp;&nbsp;&nbsp;&nbsp;  <span> <img src={Star}/> </span>Landing Pages
              </Typography>
            </Box>
          </Box>

          {/* الصورة المركزية */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              width: { xs: '100%', sm: '85%', md: '680px' },
              height: { xs: '280px', md: '420px' },
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0px 20px 40px rgba(0,0,0,0.08)',
            }}
          >
            <Box
              component="img"
              src={Rectangle}
              alt="Web Development Project"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>

        {/* 4. الجملة التوضيحية والأزرار */}
        <Box sx={{ textAlign: 'center', mt: 5, maxWidth: '550px', mx: 'auto' }}>
          <Typography variant="body1" sx={{ color: '#555', mb: 3, lineHeight: 1.6, fontSize: '1rem' }}>
            We create modern, responsive websites that engage users and drive results.
          </Typography>

          <Stack direction="row" spacing={1.5} justifyContent="center" flexWrap="wrap" gap={1}>
            <Chip 
              label="UX/UI Design" 
              sx={{ backgroundColor: '#4a4a4a', color: '#fff', borderRadius: '20px', px: 1.5, py: 2.2 }} 
            />
            <Chip 
              label="Responsive Layouts" 
              sx={{ backgroundColor: '#4a4a4a', color: '#fff', borderRadius: '20px', px: 1.5, py: 2.2 }} 
            />
            <Chip 
              label="Web Development" 
              sx={{ backgroundColor: '#4a4a4a', color: '#fff', borderRadius: '20px', px: 1.5, py: 2.2 }} 
            />
          </Stack>
        </Box>

      </Container>
    </Box>
  );
};

export default ServicesSection;