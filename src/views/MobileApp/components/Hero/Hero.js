/* eslint-disable react/no-unescaped-entities */
import { alpha, useTheme } from '@mui/material/styles';
import {
  useMediaQuery,
  Box,
  Button,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={0}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box
          data-aos={isMd ? 'fade-right' : 'fade-up'}
          style={{ paddingLeft: 10, paddingRight: 10 }}
        >
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{
                fontWeight: 700,
              }}
            >
              Turn your content
              <br />
              into{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                learning questions.
              </Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Questable analyzes your content and generates a variety of
              questions to greatly improve your learning effectiveness.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            marginTop={4}
          >
            <Button
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
              fullWidth={isMd ? false : true}
              href={'/home'}
            >
              Get Started
            </Button>
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: '100%', md: 'auto' }}
            ></Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent={'center'}
        xs={12}
        md={6}
        sx={{
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <CardMedia
          component="video"
          autoPlay
          controls
          loop
          src="images/questable_intro_720.mp4"
          sx={{
            borderStyle: 'solid',
            borderColor: '#cccccc',
            borderRadius: 3,
            width: 400,
            height: 400,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Hero;

// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { alpha, useTheme } from '@mui/material/styles';
// import Container from 'components/Container';

// const images = [
//   {
//     group: [
//       {
//         cover: '/images/web_image_1.png',
//         coverDark:
//           'https://assets.maccarianagency.com/screenshots/the-front/img1--dark.png',
//       },
//       {
//         cover: '/images/web_image_6.png',
//         coverDark:
//           'https://assets.maccarianagency.com/screenshots/the-front/img4--dark.png',
//       },
//     ],
//   },
//   {
//     group: [
//       {
//         cover: '/images/web_image_1.png',
//         coverDark:
//           'https://assets.maccarianagency.com/screenshots/the-front/img13--dark.png',
//       },
//       {
//         cover: '/images/web_image_8.png',
//         coverDark:
//           'https://assets.maccarianagency.com/screenshots/the-front/img10--dark.png',
//       },
//       {
//         cover: '/images/web_image_11.png',
//         coverDark:
//           'https://assets.maccarianagency.com/screenshots/the-front/img7--dark.png',
//       },
//     ],
//   },
//   {
//     group: [
//       {
//         cover: '/images/web_image_2.png',
//         coverDark:
//           'https://assets.maccarianagency.com/screenshots/the-front/img6--dark.png',
//       },
//       {
//         cover: '/images/web_image_3.png',
//         coverDark:
//           'https://assets.maccarianagency.com/screenshots/the-front/img24--dark.png',
//       },
//       {
//         cover: '/images/web_image_4.png',
//         coverDark:
//           'https://assets.maccarianagency.com/screenshots/the-front/img17--dark.png',
//       },
//       {
//         cover: '/images/web_image_5.png',
//         coverDark:
//           'https://assets.maccarianagency.com/screenshots/the-front/img12--dark.png',
//       },
//     ],
//   },
// ];

// const Hero = () => {
//   const theme = useTheme();
//   const isMd = useMediaQuery(theme.breakpoints.up('md'), {
//     defaultMatches: true,
//   });

//   return (
//     <Box
//       sx={{
//         backgroundImage: `linear-gradient(to bottom, ${alpha(
//           theme.palette.background.paper,
//           0,
//         )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
//         backgroundRepeat: 'repeat-x',
//         position: 'relative',
//       }}
//     >
//       <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
//         <Container>
//           <Box maxWidth={{ xs: 1, sm: '50%' }}>
//             <Typography
//               variant="h3"
//               color="text.primary"
//               gutterBottom
//               sx={{
//                 fontWeight: 700,
//               }}
//             >
//               Turn your content
//               <br />
//               into{' '}
//               <Typography
//                 color={'primary'}
//                 component={'span'}
//                 variant={'inherit'}
//                 sx={{
//                   background: `linear-gradient(180deg, transparent 82%, ${alpha(
//                     theme.palette.secondary.main,
//                     0.3,
//                   )} 0%)`,
//                 }}
//               >
//                 learning questions.
//               </Typography>
//             </Typography>
//             <Typography
//               variant="h6"
//               component="p"
//               color="text.secondary"
//               sx={{ fontWeight: 400 }}
//             >
//               Questable analyzes your content and generates a variety of
//               questions to greatly improve your learning effectiveness.
//             </Typography>
//             <Box
//               display="flex"
//               flexDirection={{ xs: 'column', sm: 'row' }}
//               alignItems={{ xs: 'stretched', sm: 'flex-start' }}
//               marginTop={4}
//             >
//               <Button
//                 component={'a'}
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 fullWidth={isMd ? false : true}
//                 href={'/home'}
//               >
//                 View pages
//               </Button>
//               <Box
//                 marginTop={{ xs: 2, sm: 0 }}
//                 marginLeft={{ sm: 2 }}
//                 width={{ xs: '100%', md: 'auto' }}
//               >
//                 <Button
//                   component={'a'}
//                   href={'/docs/introduction'}
//                   variant="outlined"
//                   color="primary"
//                   size="large"
//                   fullWidth={isMd ? false : true}
//                 >
//                   Documentation
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Container>
//         <Box
//           sx={{
//             transform: 'rotate(-20deg)',
//             display: { xs: 'none', sm: 'block' },
//           }}
//         >
//           <Box
//             display={'flex'}
//             width={'50rem'}
//             left={'50%'}
//             top={0}
//             position={'absolute'}
//             sx={{ transform: 'translate3d(20%, -50%, 0)' }}
//           >
//             {images.map((item, i) => (
//               <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
//                 {item.group.map((g, j) => (
//                   <Box
//                     key={j}
//                     padding={1}
//                     bgcolor={'background.paper'}
//                     borderRadius={2}
//                     boxShadow={3}
//                     marginTop={2}
//                   >
//                     <Box
//                       component={'img'}
//                       loading="lazy"
//                       src={
//                         theme.palette.mode === 'dark' ? g.coverDark : g.cover
//                       }
//                       height={1}
//                       width={1}
//                       maxWidth={320}
//                     />
//                   </Box>
//                 ))}
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//       <Box
//         component={'svg'}
//         preserveAspectRatio="none"
//         xmlns="http://www.w3.org/2000/svg"
//         x="0px"
//         y="0px"
//         viewBox="0 0 1920 100.1"
//         sx={{
//           width: '100%',
//           marginBottom: theme.spacing(-1),
//         }}
//       >
//         <path
//           fill={theme.palette.background.paper}
//           d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
//         ></path>
//       </Box>
//     </Box>
//   );
// };

// export default Hero;

// const Hero = () => {
//   const theme = useTheme();
//   const isMd = useMediaQuery(theme.breakpoints.up('md'), {
//     defaultMatches: true,
//   });

//   return (
//     <Grid container spacing={0}>
//       <Grid item container alignItems={'center'} xs={12} md={6}>
//         <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
//           <Box marginBottom={2}>
//             <Typography
//               variant="h3"
//               color="text.primary"
//               sx={{
//                 fontWeight: 700,
//               }}
//             >
//               Turn your content
//               <br />
//               into{' '}
//               <Typography
//                 color={'primary'}
//                 component={'span'}
//                 variant={'inherit'}
//                 sx={{
//                   background: `linear-gradient(180deg, transparent 82%, ${alpha(
//                     theme.palette.secondary.main,
//                     0.3,
//                   )} 0%)`,
//                 }}
//               >
//                 learning questions.
//               </Typography>
//             </Typography>
//           </Box>
//           <Box marginBottom={3}>
//             <Typography variant="h6" component="p" color="text.secondary">
//               Questable analyzes your content and generates a variety of
//               questions to greatly improve your learning effectiveness.
//             </Typography>
//           </Box>
//           <Box
//             display="flex"
//             flexDirection={{ xs: 'column', sm: 'row' }}
//             alignItems={{ xs: 'stretched', sm: 'flex-start' }}
//             marginTop={4}
//           >
//             <Button
//               component={'a'}
//               variant="contained"
//               color="primary"
//               size="large"
//               fullWidth={isMd ? false : true}
//               href={'/home'}
//             >
//               Get Started
//             </Button>
//             <Box
//               marginTop={{ xs: 2, sm: 0 }}
//               marginLeft={{ sm: 2 }}
//               width={{ xs: '100%', md: 'auto' }}
//             ></Box>
//           </Box>
//         </Box>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <Box
//           sx={{
//             maxWidth: 450,
//             position: 'relative',
//             marginX: 'auto',
//             perspective: 1500,
//             transformStyle: 'preserve-3d',
//             perspectiveOrigin: 0,
//           }}
//         >
//           <Box
//             sx={{
//               position: 'relative',
//               borderRadius: '2.75rem',
//               boxShadow: 1,
//               width: '75% !important',
//               marginX: 'auto',
//               transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
//             }}
//           >
//             <Box>
//               <Box
//                 position={'relative'}
//                 zIndex={2}
//                 maxWidth={1}
//                 height={'auto'}
//                 sx={{ verticalAlign: 'middle' }}
//               >
//                 <PhoneSkeletonIllustration />
//               </Box>
//               <Box
//                 position={'absolute'}
//                 top={'2.4%'}
//                 left={'4%'}
//                 width={'92.4%'}
//                 height={'96%'}
//               >
//                 <Box
//                   component={'img'}
//                   src={
//                     theme.palette.mode === 'light'
//                       ? '/images/app_image_1.png'
//                       : 'https://assets.maccarianagency.com/screenshots/crypto-mobile--dark.png'
//                   }
//                   loading={'lazy'}
//                   width={1}
//                   height={1}
//                   sx={{
//                     objectFit: 'cover',
//                     borderRadius: '2.5rem',
//                     filter:
//                       theme.palette.mode === 'dark'
//                         ? 'brightness(0.7)'
//                         : 'none',
//                   }}
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Hero;
