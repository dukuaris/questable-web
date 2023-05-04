/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 'Extract',
    subtitle:
      'The pre-built crawler scapes text from an entered URL. Also, the PDF reader extracts content from a file.',
  },
  {
    title: 'Analyze',
    subtitle:
      'The AI-powered app analyzes text from a user to get the gist and to define the questions.',
  },
  {
    title: 'Generate',
    subtitle:
      'The quiz creator generates questions and examples categorized by type, difficulty, and topic.',
  },
];

const Features = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [viewPortEntered, setViewPortEntered] = useState(false);
  const setViewPortVisibility = (isVisible) => {
    if (viewPortEntered) {
      return;
    }

    setViewPortEntered(isVisible);
  };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            xs={12}
            md={6}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <img src="/images/robot-with-books.jpg" alt="robot tutor" width="450px" style={{borderRadius: 5}}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Generate from multiple types of content sources
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              You simply have to give text, URLs, or PDF files. And, Questable
              will do the rest of the jobs for you.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  {item.title}
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
