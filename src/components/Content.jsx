import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Container, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const faqsLeft = [
  {
    question: "What services does CraftNova offer?",
    answer:
      "We offer web development, mobile apps, AI solutions, product design, and digital experiences tailored to your needs.",
  },
  {
    question: "How does your process work?",
    answer:
      "We start by understanding your goals, then move through discovery, design, development, testing, and launch—with clear communication at every step.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines depend on the scope and complexity. Most projects are completed within a few weeks.",
  },
];

const faqsRight = [
  {
    question: "Do you only work with startups?",
    answer:
      "No. We work with startups, established businesses, and organizations of different sizes.",
  },
  {
    question: "Can you redesign an existing product?",
    answer:
      "Yes. We can redesign and improve existing websites, applications, and digital products.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. We provide ongoing support and maintenance after your project launches.",
  },
];

const FAQItem = ({ question, answer, open, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        backgroundColor: "#f8f8f5",
        borderRadius: "22px",
        px: { xs: 3, md: 3.5 },
        py: open ? 2.8 : 2.6,
        mb: 2,
        cursor: "pointer",
        transition: "all 0.3s ease",
        minHeight: open ? "150px" : "76px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        "&:hover": {
          backgroundColor: "#fafaf7",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "15px", md: "17px" },
            fontWeight: 400,
            color: "#292929",
            lineHeight: 1.4,
          }}
        >
          {question}
        </Typography>

        <IconButton
          size="small"
          sx={{
            color: "#111",
            p: 0,
            minWidth: "20px",

            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          {open ? (
            <RemoveIcon sx={{ fontSize: 19 }} />
          ) : (
            <AddIcon sx={{ fontSize: 19 }} />
          )}
        </IconButton>
      </Box>

      {open && (
        <Typography
          sx={{
            color: "#777",
            fontSize: { xs: "13px", md: "14px" },
            lineHeight: 1.55,
            maxWidth: "560px",
            mt: 2,
            pr: 3,
          }}
        >
          {answer}
        </Typography>
      )}
    </Box>
  );
};

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  // ظهور القسم مع الـ Scroll
  useEffect(() => {
    // حفظ قيمة الـ ref الحالية حتى نستخدم نفس العنصر في cleanup
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleToggle = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        backgroundColor: "#DCDCDC",
        minHeight: "100vh",
        py: { xs: 7, md: 10 },
        overflow: "hidden",

        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0)"
          : "translateY(80px)",

        transition:
          "opacity 1s ease-out, transform 1s ease-out",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          px: {
            xs: 3,
            sm: 5,
            md: "10%",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },

            opacity: isVisible ? 1 : 0,
            transform: isVisible
              ? "translateY(0)"
              : "translateY(40px)",

            transition:
              "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <Typography
            sx={{
              color: "#999",
              fontSize: {
                xs: "12px",
                md: "14px",
              },
              mb: 1.5,
            }}
          >
            (FAQs)
          </Typography>

          <Typography
            sx={{
              color: "#0b0c0f",
              fontWeight: 600,
              fontSize: {
                xs: "42px",
                sm: "55px",
                md: "72px",
              },
              lineHeight: 1,
              letterSpacing: "-3px",
            }}
          >
            Your Questions, Answered
          </Typography>

          <Typography
            sx={{
              color: "#a0a0a0",
              fontSize: {
                xs: "13px",
                md: "15px",
              },
              mt: 2,
            }}
          >
            Everything you need to know about working with CraftNova.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: {
              xs: 0,
              md: 2.5,
            },
            alignItems: "start",
          }}
        >
          <Box>
            {faqsLeft.map((faq, index) => (
              <Box
                key={index}
                sx={{
                  opacity: isVisible ? 1 : 0,

                  transform: isVisible
                    ? "translateY(0)"
                    : "translateY(40px)",

                  transition:
                    "opacity 0.7s ease, transform 0.7s ease",

                  transitionDelay: `${0.2 + index * 0.15}s`,
                }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  open={openFAQ === index}
                  onClick={() => handleToggle(index)}
                />
              </Box>
            ))}
          </Box>

          <Box>
            {faqsRight.map((faq, index) => {
              const actualIndex =
                index + faqsLeft.length;

              return (
                <Box
                  key={actualIndex}
                  sx={{
                    opacity: isVisible ? 1 : 0,

                    transform: isVisible
                      ? "translateY(0)"
                      : "translateY(40px)",

                    transition:
                      "opacity 0.7s ease, transform 0.7s ease",

                    transitionDelay: `${
                      0.35 + index * 0.15
                    }s`,
                  }}
                >
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    open={openFAQ === actualIndex}
                    onClick={() =>
                      handleToggle(actualIndex)
                    }
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQSection;