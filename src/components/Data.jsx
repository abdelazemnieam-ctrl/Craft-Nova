import React, { useState, useEffect, useRef } from "react";
import Content from "./Content"
import Footer2 from "./Footer2"
import {
  Box,
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
  Avatar,
} from "@mui/material";

import { motion } from "framer-motion";

import Contant1 from "../Image/Contant1.svg";
import Contant2 from "../Image/Contant2.svg";
import Phone from "../Image/Phone.svg";

// إنشاء عناصر MUI مدعومة بحركات Framer Motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

function ContactPage() {

  // =====================================================
  // HERO SECTION
  // =====================================================

  const HeroSection = () => {
    // الألوان المحددة
    const COLOR_BLACK = "#131312";
    const COLOR_YELLOW = "#FF4D00";
    const COLOR_GRAY = "#5C5C5C";

    // إعدادات حركة الظهور أثناء الـ Scroll
    const fadeInUp = {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      },
    };

    return (
      <Box
        component="section"
        sx={{
          width: "100%",
          mx: "auto",
          py: "88px",
          px: 2,
          textAlign: "center",
          overflow: "hidden",
          backgroundColor: "#F0F0F0",
        }}
      >
        {/* Main Heading with Cal Sans Font & Scroll Animation */}
        <MotionTypography
          variant="h1"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeInUp}
          sx={{
            fontFamily: '"Cal Sans", sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: {
              xs: "40px",
              md: "72px",
            },
            lineHeight: {
              xs: "48px",
              md: "80px",
            },
            color: COLOR_BLACK,
            mb: 3,
          }}
        >
          Let’s Built

          {/* PLACEHOLDER 1 */}
          <Avatar
            src={Contant2}
            sx={{
              width: 64,
              height: 64,
              display: "inline-flex",
              mx: 1,
              verticalAlign: "middle",
            }}
          />

          <Box
            component="span"
            sx={{
              color: COLOR_YELLOW,
            }}
          >
            Something
          </Box>

          <br />

          <span
            style={{
              color: "#5C5C5C",
            }}
          >
            Together
          </span>

          {/* PLACEHOLDER 2 */}
          <Avatar
            src={Contant1}
            sx={{
              width: 64,
              height: 64,
              display: "inline-flex",
              mx: 1,
              verticalAlign: "middle",
            }}
          />

          Contact
        </MotionTypography>

        {/* Subtitle Description with Delayed Scroll Animation */}
        <MotionTypography
          variant="body1"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },

            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              },
            },
          }}
          sx={{
            color: COLOR_GRAY,
            maxWidth: "500px",
            mx: "auto",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Have a project, idea, or challenge? We'd love to hear it. Let's
          collaborate and bring something meaningful to life.
        </MotionTypography>
      </Box>
    );
  };

  // =====================================================
  // CONTACT SECTION
  // =====================================================

  // =========================
  // Scroll Animation
  // =========================
  const contactRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(true);

          // لو عاوز الأنيميشن يحصل مرة واحدة فقط
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // =========================
  // Form State
  // =========================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
  });

  // =========================
  // Error State
  // =========================
  const [errors, setErrors] = useState({});

  // =========================
  // Handle Input Change
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // إزالة الخطأ بمجرد الكتابة
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // =========================
  // Validation
  // =========================
  const validateForm = () => {
    const newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    // Service
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    // Description
    if (!formData.description.trim()) {
      newErrors.description =
        "Please enter your project description";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // Submit
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    // منع الإرسال لو البيانات ناقصة
    if (!validateForm()) {
      return;
    }

    // البيانات بعد التأكد من صحتها
    console.log("Form Data:", formData);

    alert("Your message has been sent successfully!");

    // تفريغ الفورم
    setFormData({
      name: "",
      email: "",
      service: "",
      description: "",
    });

    setErrors({});
  };

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <HeroSection />

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <Box
        ref={contactRef}
        sx={{
          width: "100%",
          backgroundColor: "#DCDCDC",
          py: { xs: 6, md: 10 },

          // =========================
          // Scroll Animation
          // =========================
          opacity: isVisible ? 1 : 0,

          transform: isVisible
            ? "translateY(0)"
            : "translateY(80px)",

          transition:
            "opacity 0.9s ease, transform 0.9s ease",

          willChange: "opacity, transform",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* =========================
              Section Title
          ========================= */}
          <Box sx={{ mb: 5 }}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#555",
                mb: 1.5,
                fontWeight: 400,
              }}
            >
              (Contact)
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "42px",
                  sm: "55px",
                  md: "64px",
                },
                lineHeight: 1,
                fontWeight: 700,
                color: "#111",
                letterSpacing: "-2px",
              }}
            >
              Get In Touch
            </Typography>
          </Box>

          {/* =========================
              Main Contact Container
          ========================= */}
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1.15fr 0.36fr 0.9fr",
              },

              minHeight: {
                xs: "auto",
                md: "620px",
              },

              overflow: "hidden",

              borderRadius: "0 0 8px 8px",
            }}
          >
            {/* =========================
                LEFT - FORM
            ========================= */}
            <Paper
              component="form"
              onSubmit={handleSubmit}
              elevation={0}
              sx={{
                backgroundColor: "#DCDCDC",

                p: {
                  xs: 3,
                  sm: 4,
                  md: 4,
                },

                width: "515px",

                display: "flex",
                flexDirection: "column",

                minHeight: {
                  xs: "auto",
                  md: "620px",
                },

                borderRadius: 0,
              }}
            >
              {/* =========================
                  Name
              ========================= */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#222",
                    mb: 1.2,
                  }}
                >
                  Your Name
                </Typography>

                <TextField
                  fullWidth
                  variant="standard"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "15px",
                      py: 1,
                    },

                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#aaa",
                    },

                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#111",
                    },

                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#111",
                    },
                  }}
                />
              </Box>

              {/* =========================
                  Email
              ========================= */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#222",
                    mb: 1.2,
                  }}
                >
                  Your Email
                </Typography>

                <TextField
                  fullWidth
                  variant="standard"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter the Email"
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "15px",
                      py: 1,
                    },

                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#aaa",
                    },

                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#111",
                    },

                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#111",
                    },
                  }}
                />
              </Box>

              {/* =========================
                  Service
              ========================= */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#222",
                    mb: 1.2,
                  }}
                >
                  What you need from us?
                </Typography>

                <TextField
                  select
                  fullWidth
                  variant="standard"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  error={Boolean(errors.service)}
                  helperText={errors.service}
                  SelectProps={{
                    displayEmpty: true,
                  }}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "15px",
                      py: 1,
                    },

                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#aaa",
                    },

                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#111",
                    },

                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#111",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    Select
                  </MenuItem>

                  <MenuItem value="Web Development">
                    Web Development
                  </MenuItem>

                  <MenuItem value="Mobile App">
                    Mobile App
                  </MenuItem>

                  <MenuItem value="UI/UX Design">
                    UI/UX Design
                  </MenuItem>

                  <MenuItem value="AI Solutions">
                    AI Solutions
                  </MenuItem>
                </TextField>
              </Box>

              {/* =========================
                  Project Description
              ========================= */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: "#222",
                    mb: 1.2,
                  }}
                >
                  Project Description
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="standard"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Type Here..."
                  error={Boolean(errors.description)}
                  helperText={errors.description}
                  sx={{
                    "& .MuiInputBase-input": {
                      fontSize: "15px",
                      py: 1,
                    },

                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#aaa",
                    },

                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#111",
                    },

                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#111",
                    },
                  }}
                />
              </Box>

              {/* =========================
                  SEND NOW BUTTON
              ========================= */}
              <Box
                sx={{
                  marginTop: "auto",
                  width: "100%",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  paddingTop: "20px",
                }}
              >
                <Button
                  type="submit"
                  disableRipple
                  disableFocusRipple
                  sx={{
                    width: "100%",
                    height: "55px",

                    borderRadius: "30px",

                    boxShadow: "2px 2px 2px #9a8f8f",

                    color: "#222",
                    backgroundColor: "#FFFFFF",

                    fontSize: "15px",
                    fontWeight: 400,
                    fontFamily: "inherit",

                    textTransform: "none",

                    padding: 0,

                    transition: "all 0.2s ease",

                    "&:hover": {
                      backgroundColor: "#DCDCDC",
                      color: "#222",

                      boxShadow:
                        "2px 2px 0px #a79696",

                      transform:
                        "translate(2px, 2px)",
                    },

                    "&:active": {
                      boxShadow:
                        "0px 0px 0px #222",

                      transform:
                        "translate(4px, 4px)",
                    },

                    "&:focus": {
                      backgroundColor: "#DCDCDC",
                    },
                  }}
                >
                  Send Now!
                </Button>
              </Box>
            </Paper>

            {/* =========================
                CENTER EMPTY SPACE
            ========================= */}
            <Box
              sx={{
                backgroundColor: "#DCDCDC",

                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            />

            {/* =========================
                RIGHT - IMAGE
            ========================= */}
            <Box
              sx={{
                minHeight: {
                  xs: "400px",
                  md: "620px",
                },

                overflow: "hidden",

                backgroundColor: "#DCDCDC",
              }}
            >
              <Box
                component="img"
                src={Phone}
                alt="Contact"
                sx={{
                  width: "100%",
                  height: "100%",

                  display: "block",

                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Content/>
      <Footer2/>
    </>
  );
}

export default ContactPage;