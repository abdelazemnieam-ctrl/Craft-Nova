import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import Footer2 from "../Image/Footer2.svg";

function Footer() {
  // =====================================================
  // Navigation Links
  // =====================================================

  const navigationLinks = [
    {
      name: "About",
      id: "hero",
    },
    {
      name: "Works",
      id: "services",
    },
    {
      name: "Services",
      id: "about",
    },
    {
      name: "Blog",
      id: "blog",
    },
  ];

  // =====================================================
  // Smooth Scroll
  // =====================================================

  const handleScroll = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // =====================================================
  // Back To Top
  // =====================================================

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#DCDCDC",

        // المسافة الزرقاء حول الـ Footer
        padding: {
          xs: "20px",
          sm: "30px",
          md: "30px",
        },

        boxSizing: "border-box",
      }}
    >
      {/* =================================================
          FOOTER
          ================================================= */}

      <Box
        component="footer"
        sx={{
          position: "relative",

          width: "100%",

          margin: "0 auto",

          borderRadius: "30px",

          minHeight: {
            xs: "650px",
            sm: "620px",
            md: "700px",
          },

          // صورة الـ Footer كما هي
          backgroundImage: `url(${Footer2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          overflow: "hidden",

          display: "flex",
          flexDirection: "column",

          color: "#fff",
        }}
      >
        {/* =================================================
            BACKGROUND OVERLAY
            ================================================= */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />

        {/* =================================================
            CONTENT
            ================================================= */}

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,

            flex: 1,

            display: "flex",
            flexDirection: "column",

            px: {
              xs: 3,
              sm: 4,
              md: 5,
            },

            pt: {
              xs: 7,
              sm: 8,
              md: 9,
            },
          }}
        >
          {/* =================================================
              TOP LINKS
              ================================================= */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },

              columnGap: {
                xs: 0,
                md: 10,
              },

              rowGap: {
                xs: 5,
                sm: 6,
                md: 0,
              },
            }}
          >
            {/* =================================================
                NAVIGATION
                ================================================= */}

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                  },

                  fontWeight: 400,

                  color: "rgba(255,255,255,0.55)",

                  mb: 1.5,
                }}
              >
                Navigation
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  gap: {
                    xs: 1,
                    md: 1.1,
                  },
                }}
              >
                {navigationLinks.map((item) => (
                  <Typography
                    key={item.name}
                    onClick={() => handleScroll(item.id)}
                    sx={{
                      width: "fit-content",

                      fontSize: {
                        xs: "18px",
                        sm: "19px",
                        md: "20px",
                      },

                      lineHeight: 1.35,

                      fontWeight: 500,

                      color: "#fff",

                      cursor: "pointer",

                      transition: "opacity 0.2s ease",

                      "&:hover": {
                        opacity: 0.65,
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* =================================================
                SOCIAL
                ================================================= */}

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                  },

                  fontWeight: 400,

                  color: "rgba(255,255,255,0.55)",

                  mb: 1.5,
                }}
              >
                Social
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  gap: {
                    xs: 1,
                    md: 1.1,
                  },
                }}
              >
                <Link
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    width: "fit-content",

                    fontSize: {
                      xs: "18px",
                      sm: "19px",
                      md: "20px",
                    },

                    lineHeight: 1.35,

                    fontWeight: 500,

                    color: "#fff",

                    transition: "opacity 0.2s ease",

                    "&:hover": {
                      opacity: 0.65,
                    },
                  }}
                >
                  Twitter(X)
                </Link>

                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    width: "fit-content",

                    fontSize: {
                      xs: "18px",
                      sm: "19px",
                      md: "20px",
                    },

                    lineHeight: 1.35,

                    fontWeight: 500,

                    color: "#fff",

                    transition: "opacity 0.2s ease",

                    "&:hover": {
                      opacity: 0.65,
                    },
                  }}
                >
                  LinkedIn
                </Link>
              </Box>
            </Box>

            {/* =================================================
                LEGALS
                ================================================= */}

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                  },

                  fontWeight: 400,

                  color: "rgba(255,255,255,0.55)",

                  mb: 1.5,
                }}
              >
                Legals
              </Typography>

              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",

                  gap: {
                    xs: 1,
                    md: 1.1,
                  },
                }}
              >
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    width: "fit-content",

                    fontSize: {
                      xs: "18px",
                      sm: "19px",
                      md: "20px",
                    },

                    lineHeight: 1.35,

                    fontWeight: 500,

                    color: "#fff",

                    textDecoration: "none",

                    transition: "opacity 0.2s ease",

                    "&:hover": {
                      opacity: 0.65,
                    },
                  }}
                >
                  Privacy Policy
                </Typography>

                <Typography
                  component="a"
                  href="#"
                  sx={{
                    width: "fit-content",

                    fontSize: {
                      xs: "18px",
                      sm: "19px",
                      md: "20px",
                    },

                    lineHeight: 1.35,

                    fontWeight: 500,

                    color: "#fff",

                    textDecoration: "none",

                    transition: "opacity 0.2s ease",

                    "&:hover": {
                      opacity: 0.65,
                    },
                  }}
                >
                  Term of Service
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* =================================================
              BOTTOM AREA
              ================================================= */}

          <Box
            sx={{
              marginTop: "auto",

              display: "flex",

              alignItems: {
                xs: "flex-start",
                sm: "center",
              },

              justifyContent: "space-between",

              flexDirection: {
                xs: "column",
                sm: "row",
              },

              gap: 3,

              pb: {
                xs: 7,
                sm: 8,
                md: 10,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "11px",
                  sm: "12px",
                },

                fontWeight: 400,

                color: "rgba(255,255,255,0.85)",
              }}
            >
              © 2025 CraftNova. All rights reserved.
            </Typography>

            <Typography
              onClick={handleBackToTop}
              sx={{
                fontSize: {
                  xs: "11px",
                  sm: "12px",
                },

                fontWeight: 500,

                color: "#ff5a00",

                cursor: "pointer",

                transition: "opacity 0.2s ease",

                "&:hover": {
                  opacity: 0.7,
                },
              }}
            >
              Back to top
            </Typography>
          </Box>
        </Container>

        {/* =================================================
            CRAFTNOVA
            ================================================= */}

        <Typography
          sx={{
            position: "relative",

            zIndex: 2,

            width: "90%",

            mx: "auto",

            textAlign: "center",

            fontSize: {
              xs: "14vw",
              sm: "13vw",
              md: "12vw",
              lg: "11vw",
            },

            lineHeight: 0.8,
            
            fontWeight: 500,
            style:"regular",
            size:"204px",

            letterSpacing: {
              xs: "-3px",
              sm: "-6px",
              md: "-9px",
              lg: "-11px",
            },

            color: "#fff",

            whiteSpace: "nowrap",
           

            userSelect: "none",

            mb: {
              xs: 3,
              sm: 4,
              md: 5,
            },
          }}
        >
          CraftNova
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;