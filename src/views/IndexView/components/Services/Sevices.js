/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import WithSwiperAndBrandBackgroundColor from '../../../../blocks/logoGrid/WithSwiperAndBrandBackgroundColor/WithSwiperAndBrandBackgroundColor';

const mock = [
  {
    title: 'For learners',
    subtitle:
      'Learners can notably improve retention and recall of information by answering questions.',
    icon: <img src="/images/service_learner.png" width={34} />,
  },
  {
    title: 'For test takers',
    subtitle:
      'Test takers can be better prepared, especially in case of fewer past exam questions.',
    icon: <img src="/images/service_testprep.png" width={34} />,
  },
  {
    title: 'For educators',
    subtitle:
      'Educators can greatly reduce time and resources to create questions for learners.',
    icon: <img src="/images/service_educator.png" width={34} />,
  },
];

const Services = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Help your learning with custom questions
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            AI-powered Questable app enhances your learning experience with
            questions from your content.
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={1}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
