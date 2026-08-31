import React, { useRef } from 'react';
import { Box, Typography, IconButton, Chip } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Assets
import Image from "../Image/Image.svg";
import Noise from "../Image/Noise.svg";
import Frame from "../Image/Frame.svg";
import Cover from '../Image/Cover.svg';

const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

export default function Portfolio() {
  const containerRef = useRef(null);
  const worksRef = useRef(null);

  // 1. تتبع حركة السكرول داخل الحاوية قسم Testimonials
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  // 2. تتبع حركة السكرول لقسم Recent Works
  const { scrollYProgress: worksScrollProgress } = useScroll({
    target: worksRef,
    offset: ["start end", "center center"]
  });

  const worksOpacity = useTransform(worksScrollProgress, [0, 0.7], [0, 1]);
  const worksY = useTransform(worksScrollProgress, [0, 0.7], [100, 0]);

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      {/* ========================================================= */}
      {/* 1. SECTION ONE: TESTIMONIALS & RECENT WORKS              */}
      {/* ========================================================= */}
      <Box
        ref={containerRef}
        sx={{
          width: '100vw',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          left: '50%',
          right: '50%',
          background: "#DCDCDC",
          marginLeft: '-50vw',
          marginRight: '-50vw',
          py: 6,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#8A8A8A',
            fontSize: { xs: '12px', md: '16px' },
            fontFamily: 'sans-serif',
            mb: { xs: -1, md: -3 },
            zIndex: 1,
          }}
        >
          (Why clients love CrafNouva)
        </Typography>

        <MotionTypography
          style={{ opacity, y }}
          sx={{
            fontFamily: '"Cal Sans", sans-serif',
            fontWeight: 400,
            textAlign: 'center',
            width: '100%',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            fontSize: 'clamp(3rem, 15vw, 204px)',
            lineHeight: 1,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Testimonials
        </MotionTypography>

        <MotionBox
          style={{ opacity, y }}
          sx={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'stretch',
            maxWidth: '1128px',
            width: '90%',
            marginTop: '-60px',
            zIndex: 2,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Stats Box */}
          <Box
            sx={{
              width: { xs: '100%', md: '360.95px' },
              height: '460px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '40px',
              borderRadius: '24px',
              boxShadow: '0 8px 32px 0 rgba(239, 222, 222, 0.05)',
              backgroundImage: `url(${Noise})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: "#37393a",
              backdropFilter: 'blur(10px)',
            }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#f4f2f2' }}>
                26+
              </Typography>
              <Typography variant="body2" sx={{ color: '#f5eeee' }}>
                Finalized Projects
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#f6eded' }}>
                98%
              </Typography>
              <Typography variant="body2" sx={{ color: '#ede8e8' }}>
                Client satisfaction rate
              </Typography>
            </Box>

            <Box>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#faf3f3' }}>
                7+
              </Typography>
              <Typography variant="body2" sx={{ color: '#f9f5f5' }}>
                Years of Experience
              </Typography>
            </Box>
          </Box>

          {/* Testimonial Card */}
          <Box
            sx={{
              flex: 1,
              height: '460px',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '32px',
              color: '#fff',
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%), url(${Image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Typography variant="caption" sx={{ opacity: 0.8, letterSpacing: 1 }}>
              01 / 03
            </Typography>

            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.4,
                  mb: 3,
                  maxWidth: '90%',
                  fontSize: { xs: '1.1rem', md: '1.4rem' },
                }}
              >
                "Franklin turned our ideas into a sharp, clean brand. Fast, easy, and right on point."
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    Ethan Moore
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>
                    Co-founder, NovaTech
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    size="small"
                    sx={{
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backgroundColor: 'rgba(235, 228, 228, 0.2)',
                      '&:hover': { backgroundColor: 'rgba(244, 239, 239, 0.2)' },
                    }}
                  >
                    <ArrowBackIosNewIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      color: '#fff',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      '&:hover': { backgroundColor: 'rgba(223, 216, 216, 0.7)' },
                    }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </MotionBox>
      </Box>

      {/* Recent Works Sub-section */}
      <Box
        ref={worksRef}
        sx={{
          width: '100vw',
          minHeight: '100vh',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          background: "#DCDCDC",
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          pt: 4,
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#8A8A8A',
            fontSize: { xs: '12px', md: '16px' },
            fontFamily: 'sans-serif',
            mb: { xs: -1, md: -3 },
            zIndex: 1,
          }}
        >
          (Why clients love Agero)
        </Typography>

        <MotionTypography
          style={{ opacity: worksOpacity, y: worksY }}
          sx={{
            fontFamily: '"Cal Sans", sans-serif',
            fontWeight: 400,
            textAlign: 'center',
            width: '100%',
            userSelect: 'none',
            whiteSpace: 'nowrap',
            fontSize: 'clamp(3rem, 15vw, 204px)',
            lineHeight: 1,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Recent Works
        </MotionTypography>

        <MotionBox
          style={{ opacity: worksOpacity, y: worksY }}
          sx={{
            width: '100%',
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: -4,
          }}
        >
          <Box
            component="img"
            src={Frame}
            alt="Recent Works Frame"
            sx={{
              width: '95%',
              height: '100%',
              objectFit: 'cover',
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </MotionBox>
      </Box>

      {/* ========================================================= */}
      {/* 2. SECTION TWO: HERO SECTION                             */}
      {/* ========================================================= */}
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#DCDCDC',
          py: 4,
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '96%',
            mx: 'auto',
            height: '800px',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            boxSizing: 'border-box',
            p: { xs: 3, md: 6 },
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.25)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.35)',
              zIndex: 1,
              pointerEvents: 'none',
            },
          }}
        >
          {/* Cover Image */}
          <Box
            component="img"
            src={Cover}
            alt="Cover"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              zIndex: 0,
            }}
          />

          {/* Top Info */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              zIndex: 2,
              position: 'relative',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: 'flex-start' }}>
              <Chip
                label="Web & App Design"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontSize: '12px',
                  borderRadius: '20px',
                  px: 1,
                }}
              />
              <Chip
                label="Responsive Frontends"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  fontSize: '12px',
                  borderRadius: '20px',
                  px: 1,
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-end', color: '#ffffff' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1, color: '#ffffff' }}>
                  W.
                </Typography>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block', lineHeight: 1.2, color: '#ffffff' }}>
                    Honor Mentions
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#ffffff', display: 'block', fontSize: '11px', opacity: 0.9 }}>
                    June 2024
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1, color: '#ffffff' }}>
                  Bē
                </Typography>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block', lineHeight: 1.2, color: '#ffffff' }}>
                    UI/UX Featured
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#ffffff', display: 'block', fontSize: '11px', opacity: 0.9 }}>
                    August 2024
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Bottom Title */}
          <Box
            sx={{
              zIndex: 2,
              position: 'relative',
              textAlign: 'left',
              mt: 'auto',
            }}
          >
            <Typography variant="body2" sx={{ color: '#ffffff', opacity: 0.9, mb: 0.5 }}>
              Landing page design for news platform
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 'bold',
                color: '#ffffff',
                letterSpacing: '-1.5px',
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                lineHeight: 1,
              }}
            >
              The News
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}