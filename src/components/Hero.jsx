import { Box, Typography, Button } from "@mui/material";
import Banner from "../Image/Banner.svg";
import Loge2 from "../Image/Logo2.svg";
import Vector from "../Image/Vector.svg";
import Logo3 from "../Image/Logo3.svg";
import "../App.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import F1 from "../Image/F1.svg";
import F2 from "../Image/F2.svg";
import F3 from "../Image/F3.svg";
import Bar1 from "../Image/Bar1.svg";
import Bar2 from "../Image/Bar2.svg";
import Bar3 from "../Image/Bar3.svg";
import Bar4 from "../Image/Bar4.svg";
import Bar5 from "../Image/Bar5.svg";
import { motion } from "framer-motion";

const bars = [Bar1, Bar2, Bar3, Bar4, Bar5];

// إعدادات حركة الظهور عند التمرير
const scrollAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

function Hero() {
  return (
    <Box
      sx={{
        width:"100%",
        textAlign: "center",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent:" flex-end",
        alignItems:"center",
        boxShadow: "0px 15px 25px -10px rgba(0,0,0,0.3)",
        height:"1500px",
        paddingTop:"70px",
        backgroundColor:"#F0F0F0",
      }}
    >

      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          lineHeight: 1.2,
          mb: 3,
        }}
      >
        {/* الخطوة 1: الشعار والعناوين الصغيرة */}
        <motion.div {...scrollAnimation}>
          <Typography
            sx={{
              color: "#5C5C5C",
              fontWeight: 600,
              mb: 2,
              display:"flex",
              textAlign:"center",
              alignItems:"center",
              justifyContent:"center"
            }}
          >
            <Stack direction="row" spacing={-1}>
              <Avatar src={F1}/>
              <Avatar src={F2} />
              <Avatar src={F3} />
              <span style={{padding:"10px"}}>Trusted by founders.</span>
            </Stack>
          </Typography>
        </motion.div>

        {/* الخطوة 2: العنوان الرئيسي */}
        <motion.div 
          {...scrollAnimation} 
          transition={{ ...scrollAnimation.transition, delay: 0.15 }}
        >
          <Typography>
            <Typography sx={{
              fontFamily: "Manrope",
              fontSize: "72px",
              lineHeight:"90px",
              fontWeight: 700,
              color: "#161C2D",
            }}>Premium <img src={Vector} alt="logo" style={{borderRadius:"50px",paddingLeft:"16px",paddingRight:"16px"}}/><span style={{color:"#FF4D00"}}>Software</span></Typography>

            <Typography sx={{
              fontFamily: "Manrope",
              fontSize: "72px",
              lineHeight:"90px",
              fontWeight: 700,
              color: "#161C2D",
            }}><span style={{color:"#5C5C5C"}}>For</span><img src={Loge2} alt="logo" style={{paddingLeft:"16px",paddingRight:"16px"}}/>Growing Startups</Typography>

            <Typography sx={{
              fontFamily: "Manrope",
              fontSize: "72px",
              lineHeight:"90px",
              fontWeight: 700,
              color: "#161C2D",
            }}><span style={{color:"#5C5C5C"}}>Based in</span> Egypt,<img src={Logo3} alt="logo" style={{paddingLeft:"16px",paddingRight:"16px"}}/>Worldwide</Typography>
          </Typography>
        </motion.div>
      </Typography>

      {/* الخطوة 3: النص الوصفي */}
      <motion.div 
        {...scrollAnimation} 
        transition={{ ...scrollAnimation.transition, delay: 0.25 }}
      >
        <Typography
          sx={{
            color: "#777",
            maxWidth: "700px",
            mx: "auto",
            mb: 4,
          }}
        >
          We design, develop, and launch digital products that help startups<br/> and businesses grow faster with confidence.
        </Typography>
      </motion.div>

      {/* الخطوة 4: الزر */}
      <motion.div 
        {...scrollAnimation} 
        transition={{ ...scrollAnimation.transition, delay: 0.35 }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#0C0C0CD1",
            borderRadius: "30px",
            px: 4,
            py: 1.5,
            textTransform: "none",
            mb: 6,
          }}
        >
          View Projects <ArrowForwardIcon/>
        </Button>
      </motion.div>

      {/* الخطوة 5: الصورة الرئيسية (Banner) */}
      <motion.div 
        {...scrollAnimation} 
        transition={{ ...scrollAnimation.transition, delay: 0.45 }}
        style={{ width: "100%" }}
      >
        <Box
          sx={{
            width: "100uv",
            height: "750px",
            flexShrink: "0" ,
          }}
        >
          <img src={Banner} alt="logo" />
        </Box>
      </motion.div>

      {/* الخطوة 6: شريط الشعارات المتقدم المتحرك */}
      <motion.div 
        {...scrollAnimation} 
        transition={{ ...scrollAnimation.transition, delay: 0.55 }}
      >
        <Box style={{ 
          display:" flex",
          width: "1128px",
          height:" 160px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:"50px",
        }}>
          <Box
            sx={{
              display: "inline-flex",
              height: "32px",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              gap:" 80px",
            }}
          >
            <Box
              sx={{
                width: "1100px",
                overflow: "hidden",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "max-content",
                  gap: 10,
                  paddingLeft: "150px",
                  paddingRight: "150px",
                  animation: "slide 18s linear infinite",
                  "@keyframes slide": {
                    "0%": {
                      transform: "translateX(-20%)",
                    },
                    "100%": {
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                {[...bars, ...bars].map((bar, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={bar}
                    alt=""
                    sx={{
                      width: 100,
                      height: 150,
                      flexShrink: 0,
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>

    </Box>
  );
}

export default Hero;