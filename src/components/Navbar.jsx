import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Logo from "../Image/Logo.svg";

// ======================================================
// Available for New Projects
// ======================================================
const TopBadgeWithCurve = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor:"#F0F0F0",

        width: {
          xs: "260px",
          sm: "300px",
          md: "330px",
        },

        height: {
          xs: "48px",
          md: "55px",
        },

        zIndex: 10,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        pointerEvents: "none",
      }}
    >
      {/* شكل الشريط */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 330 55"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <path
          d="
            M0 0
            H330
            C322 0 317 7 315 15
            C311 34 296 43 276 43
            H54
            C34 43 19 34 15 15
            C13 7 8 0 0 0
            Z
          "
          fill="#313538"
        />
      </svg>

      {/* النص */}
      <Box
        sx={{
          position: "relative",

          display: "flex",
          alignItems: "center",

          gap: 1.2,

          mt: "-7px",

          color: "#fff",

          whiteSpace: "nowrap",
        }}
      >
        {/* Green Dot */}
        <Box
          sx={{
            width: {
              xs: 7,
              md: 9,
            },

            height: {
              xs: 7,
              md: 9,
            },

            borderRadius: "50%",

            backgroundColor: "#65e51b",

            boxShadow:
              "0 0 6px rgba(101, 229, 27, 0.8)",
          }}
        />

        <Typography
          sx={{
            color: "#fff",

            fontSize: {
              xs: "11px",
              md: "13px",
            },

            fontWeight: 500,

            lineHeight: 1,
          }}
        >
          Available for New Projects
        </Typography>
      </Box>
    </Box>
  );
};

// ======================================================
// Navbar
// ======================================================
function Navbar() {
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [language, setLanguage] = useState("English");

  const navigate = useNavigate();
  const location = useLocation();

  // ======================================================
  // Links
  // ======================================================
  const links = [
    {
      name: "Works",
      id: "services",
    },
    {
      name: "Services",
      id: "about",
    },
    {
      name: "About",
      id: "hero",
    },
    {
      name: "Blog",
      id: "blog",
    },
  ];

  // ======================================================
  // Scroll
  // ======================================================
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  // ======================================================
  // Language
  // ======================================================
  const handleOpenLangMenu = (event) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleCloseLangMenu = () => {
    setLangAnchorEl(null);
  };

  const handleSelectLanguage = (lang) => {
    setLanguage(lang);
    handleCloseLangMenu();
  };

  // ======================================================
  // JSX
  // ======================================================
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,

        zIndex: 1000,

        width: "100%",

        maxWidth: "none",

        margin: 0,

        borderRadius: 0,

        backgroundColor: "#F0F0F0",

        color: "#000",

        boxShadow: "none",

        backdropFilter: "none",
      }}
    >
      {/* ==================================================
          Available for New Projects
          ================================================== */}
      <TopBadgeWithCurve />

      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            position: "relative",

            minHeight: {
              xs: "100px",
              md: "125px",
            },

            height: {
              xs: "100px",
              md: "125px",
            },

            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

            px: {
              xs: 3,
              sm: 6,
              md: "13%",
            },

            pt: {
              xs: 2,
              md: 3,
            },
          }}
        >
          {/* ==================================================
              LOGO
              ================================================== */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",

              alignItems: "center",

              textDecoration: "none",

              zIndex: 2,

              flexShrink: 0,
            }}
          >
            <img
              src={Logo}
              alt="CrafNova"
              style={{
                height: "60px",

                width: "auto",

                display: "block",
              }}
            />
          </Box>

          {/* ==================================================
              CENTER LINKS
              ================================================== */}
          <Box
            sx={{
              position: "absolute",

              left: "50%",

              transform: "translateX(-50%)",

              display: "flex",

              alignItems: "center",

              gap: {
                xs: 1,
                sm: 2,
                md: 3,
              },

              zIndex: 2,
            }}
          >
            {links.map((item) => (
              <Button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  minWidth: "auto",

                  color: "#777",

                  fontSize: {
                    xs: "11px",
                    sm: "13px",
                    md: "14px",
                  },

                  fontWeight: 400,

                  textTransform: "none",

                  padding: {
                    xs: "5px 7px",
                    md: "6px 10px",
                  },

                  position: "relative",

                  transition:
                    "color 0.3s ease",

                  "&::after": {
                    content: '""',

                    position: "absolute",

                    left: "50%",

                    bottom: 0,

                    width: 0,

                    height: "1px",

                    backgroundColor: "#222",

                    transform:
                      "translateX(-50%)",

                    transition:
                      "width 0.3s ease",
                  },

                  "&:hover": {
                    backgroundColor:
                      "transparent",

                    color: "#222",
                  },

                  "&:hover::after": {
                    width: "75%",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* ==================================================
              RIGHT SIDE
              ================================================== */}
          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              gap: {
                xs: 1,
                md: 1.5,
              },

              zIndex: 2,

              flexShrink: 0,
            }}
          >
            {/* ==================================================
                Language
                ================================================== */}
            <IconButton
              onClick={handleOpenLangMenu}
              sx={{
                color: "#777",

                padding: "6px",

                "&:hover": {
                  color: "#222",

                  backgroundColor:
                    "transparent",
                },
              }}
            >
              <LanguageIcon
                sx={{
                  fontSize: {
                    xs: 17,
                    md: 20,
                  },
                }}
              />
            </IconButton>

            {/* ==================================================
                Language Menu
                ================================================== */}
            <Menu
              anchorEl={langAnchorEl}
              open={Boolean(langAnchorEl)}
              onClose={handleCloseLangMenu}
              PaperProps={{
                elevation: 3,

                sx: {
                  mt: 1,

                  borderRadius: 2,

                  minWidth: 120,
                },
              }}
            >
              <MenuItem
                selected={
                  language === "English"
                }
                onClick={() =>
                  handleSelectLanguage(
                    "English"
                  )
                }
              >
                English
              </MenuItem>

              <MenuItem
                selected={
                  language === "العربية"
                }
                onClick={() =>
                  handleSelectLanguage(
                    "العربية"
                  )
                }
              >
                العربية
              </MenuItem>
            </Menu>

            {/* ==================================================
                Contact
                ================================================== */}
            <Button
              component={Link}
              to="/data"
              variant="contained"
              sx={{
                backgroundColor: "#4a4a4a",

                color: "#fff",

                borderRadius: "30px",

                minWidth: {
                  xs: "70px",
                  md: "88px",
                },

                px: {
                  xs: 2,
                  md: 2.5,
                },

                py: {
                  xs: 0.7,
                  md: 0.9,
                },

                fontSize: {
                  xs: "11px",
                  md: "13px",
                },

                fontWeight: 500,

                textTransform: "none",

                boxShadow: "none",

                "&:hover": {
                  backgroundColor: "#333",

                  boxShadow: "none",
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

// git test 