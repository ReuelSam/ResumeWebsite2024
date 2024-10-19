import { Box, Heading } from 'grommet';

const About = () => {
  return (
    <Box 
      align="center" 
      justify="center" 
      pad="large" 
      fill 
      border={{ color: 'accent-1', size: 'medium' }}
      margin="none"  // Remove any default margin
      style={{ minHeight: '100vh', marginTop: 0 }}  // Make sure the box starts at the top
    >
      <Heading level="1">HELLO WORLD ABOUT TESTING TESTING</Heading>
    </Box>
  );
};

export default About;
