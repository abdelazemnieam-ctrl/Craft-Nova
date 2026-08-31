import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import Footer1 from "../Image/Footer1.svg";

function ContactSection() {
  // =====================================================
  // FORM DATA
  // =====================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    description: false,
  });

  // =====================================================
  // VALIDATION
  // =====================================================

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Your name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errors.email = "Your email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      errors.email = "Enter a valid email address";
    }

    if (!formData.description.trim()) {
      errors.description = "Project description is required";
    } else if (formData.description.trim().length < 10) {
      errors.description =
        "Description must be at least 10 characters";
    }

    return errors;
  };

  const errors = validate();

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // INPUT BLUR
  // =====================================================

  const handleBlur = (e) => {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      description: true,
    });

    const hasErrors = Object.values(errors).some(Boolean);

    if (hasErrors) return;

    alert("Form submitted successfully!");

    setFormData({
      name: "",
      email: "",
      description: "",
    });

    setTouched({
      name: false,
      email: false,
      description: false,
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        background: "#DCDCDC",
        py: {
          xs: 4,
          sm: 5,
          md: 8,
        },
      }}
    >
      {/* =================================================
          LET'S CONNECT
          ================================================= */}

      <Typography
        sx={{
          fontFamily: '"Cal Sans", sans-serif',
          fontWeight: 400,
          textAlign: "center",
          width: "100%",
          userSelect: "none",
          whiteSpace: "nowrap",

          fontSize: {
            xs: "3.5rem",
            sm: "6rem",
            md: "10rem",
            lg: "12.75rem",
          },

          lineHeight: 1,

          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.05) 75%, rgba(0, 0, 0, 0) 100%)",

          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",

          overflow: "hidden",
        }}
      >
        Let's Connect
      </Typography>

      {/* =================================================
          CONTAINER
          ================================================= */}

      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 1.5,
            sm: 3,
            md: 4,
          },
        }}
      >
        {/* =================================================
            MAIN CONTACT BOX
            ================================================= */}

        <Box
          sx={{
            position: "relative",

            height: {
              xs: "900px",
              sm: "850px",
              md: "850px",
            },

            overflow: "hidden",

            borderRadius: {
              xs: "18px",
              sm: "22px",
              md: "28px",
            },

            color: "#fff",
          }}
        >
          {/* =================================================
              MAIN BACKGROUND IMAGE
              ================================================= */}

          <Box
            sx={{
              position: "absolute",
              inset: 0,

              backgroundImage: `url(${Footer1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />

          {/* =================================================
              CONTENT
              ================================================= */}

          <Box
            sx={{
              position: "relative",
              zIndex: 2,

              minHeight: "100%",

              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },

              gap: {
                xs: 3,
                sm: 4,
                md: 8,
              },

              p: {
                xs: "35px 20px 120px",
                sm: "45px 35px 130px",
                md: "70px 65px 150px",
              },
            }}
          >
            {/* =================================================
                LEFT SIDE
                ================================================= */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",

                paddingLeft: {
                  xs: "0px",
                  sm: "30px",
                  md: "120px",
                },

                paddingTop: {
                  xs: "20px",
                  sm: "30px",
                  md: "50px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "42px",
                    sm: "52px",
                    md: "65px",
                    lg: "75px",
                  },

                  fontWeight: 700,

                  lineHeight: 0.95,

                  letterSpacing: {
                    xs: "-2px",
                    md: "-3px",
                  },

                  color: "#fff",

                  mt: 1,
                }}
              >
                Got a project in
                <br />
                mind?
              </Typography>

              <Typography
                sx={{
                  mt: 3,

                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                    md: "18px",
                  },

                  lineHeight: 1.5,

                  color: "rgba(255,255,255,0.65)",

                  maxWidth: {
                    xs: "280px",
                    md: "350px",
                  },
                }}
              >
                Let's make something happen together
              </Typography>
            </Box>

            {/* =================================================
                RIGHT SIDE - FORM
                ================================================= */}

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",

                gap: {
                  xs: 2.5,
                  sm: 3,
                  md: 9,
                },

                paddingLeft: {
                  xs: "0px",
                  sm: "30px",
                  md: "100px",
                },

                paddingTop: {
                  xs: "0px",
                  sm: "10px",
                  md: "50px",
                },

                paddingRight: {
                  xs: "0px",
                  sm: "20px",
                  md: "50px",
                },
              }}
            >
              {/* =================================================
                  NAME
                  ================================================= */}

              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },
                    mb: 0.5,
                  }}
                >
                  Your Name
                </Typography>

                <TextField
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your Name"
                  variant="standard"
                  error={
                    touched.name &&
                    Boolean(errors.name)
                  }
                  helperText={
                    touched.name ? errors.name : ""
                  }
                  sx={inputStyle}
                />
              </Box>

              {/* =================================================
                  EMAIL
                  ================================================= */}

              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },
                    mb: 0.5,
                  }}
                >
                  Your Email
                </Typography>

                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter the Email"
                  variant="standard"
                  error={
                    touched.email &&
                    Boolean(errors.email)
                  }
                  helperText={
                    touched.email ? errors.email : ""
                  }
                  sx={inputStyle}
                />
              </Box>

              {/* =================================================
                  PROJECT DESCRIPTION
                  ================================================= */}

              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },
                    mb: 0.5,
                  }}
                >
                  Project Description
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  minRows={2}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Type Here..."
                  variant="standard"
                  error={
                    touched.description &&
                    Boolean(errors.description)
                  }
                  helperText={
                    touched.description
                      ? errors.description
                      : ""
                  }
                  sx={inputStyle}
                />
              </Box>

              {/* =================================================
                  BUTTON
                  ================================================= */}

              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",

                  height: {
                    xs: "48px",
                    md: "50px",
                  },

                  mt: 1,

                  borderRadius: "30px",

                  background: "#fff",

                  color: "#111",

                  fontSize: {
                    xs: "14px",
                    md: "14px",
                  },

                  fontWeight: 600,

                  textTransform: "none",

                  transition: "0.3s",

                  "&:hover": {
                    background: "#eee",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Send Now!
              </Button>
            </Box>
          </Box>

          {/* =================================================
              MOVING BOTTOM BAR
              
              Desktop  = 120px
              Tablet   = 60px
              Mobile   = 20px

              Background = Footer1
              Text = White
              ================================================= */}

          <Box
            sx={{
              position: "absolute",

              zIndex: 10,

              left: {
                xs: "20px",
                sm: "60px",
                md: "120px",
              },

              right: {
                xs: "20px",
                sm: "60px",
                md: "120px",
              },

              bottom: 0,

              height: {
                xs: "60px",
                sm: "70px",
                md: "80px",
              },

              overflow: "hidden",

              // نفس صورة الخلفية
              backgroundImage: `url(${Footer1})`,

              backgroundSize: "cover",
              backgroundPosition: "center",

              display: "flex",
              alignItems: "center",
            }}
          >
            {/* =================================================
                MOVING TRACK
                ================================================= */}

            <Box
              sx={{
                display: "flex",
                width: "max-content",

                animation:
                  "movingText 18s linear infinite",

                "@keyframes movingText": {
                  from: {
                    transform: "translateX(0)",
                  },

                  to: {
                    transform: "translateX(-50%)",
                  },
                },
              }}
            >
              {/* =================================================
                  FIRST GROUP
                  ================================================= */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  gap: {
                    xs: 3,
                    sm: 4,
                    md: 5,
                  },

                  pr: {
                    xs: 3,
                    sm: 4,
                    md: 5,
                  },

                  whiteSpace: "nowrap",
                }}
              >
                <Typography sx={movingTextStyle}>
                  franklin@agero.com
                </Typography>

                <Typography sx={movingStarStyle}>
                  ✦
                </Typography>

                <Typography sx={movingTextStyle}>
                  franklin@agero.com
                </Typography>

                <Typography sx={movingStarStyle}>
                  ✦
                </Typography>

                <Typography sx={movingTextStyle}>
                  franklin@agero.com
                </Typography>

                <Typography sx={movingStarStyle}>
                  ✦
                </Typography>

                <Typography sx={movingTextStyle}>
                  franklin@agero.com
                </Typography>
              </Box>

              {/* =================================================
                  SECOND GROUP
                  ================================================= */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  gap: {
                    xs: 3,
                    sm: 4,
                    md: 5,
                  },

                  pr: {
                    xs: 3,
                    sm: 4,
                    md: 5,
                  },

                  whiteSpace: "nowrap",
                }}
              >
                <Typography sx={movingTextStyle}>
                  franklin@agero.com
                </Typography>

                <Typography sx={movingStarStyle}>
                  ✦
                </Typography>

                <Typography sx={movingTextStyle}>
                  franklin@agero.com
                </Typography>

                <Typography sx={movingStarStyle}>
                  ✦
                </Typography>

                <Typography sx={movingTextStyle}>
                  franklin@agero.com
                </Typography>

                <Typography sx={movingStarStyle}>
                  ✦
                </Typography>

                <Typography sx={movingTextStyle}>
                  franklin@agero.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

// =====================================================
// INPUT STYLE
// =====================================================

const inputStyle = {
  "& .MuiInputBase-root": {
    color: "#fff",
  },

  "& .MuiInputBase-input": {
    color: "#fff",
  },

  "& .MuiInputBase-input::placeholder": {
    color: "rgba(255,255,255,0.5)",
    opacity: 1,
  },

  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255,255,255,0.4)",
  },

  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#fff",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },

  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    marginTop: "7px",
  },
};

// =====================================================
// MOVING BAR TEXT
// =====================================================

const movingTextStyle = {
  color: "#fff",

  fontSize: {
    xs: "14px",
    sm: "17px",
    md: "20px",
  },

  fontWeight: 600,

  whiteSpace: "nowrap",
};

const movingStarStyle = {
  color: "#fff",

  fontSize: {
    xs: "14px",
    sm: "17px",
    md: "20px",
  },

  fontWeight: 600,

  whiteSpace: "nowrap",
};

export default ContactSection;