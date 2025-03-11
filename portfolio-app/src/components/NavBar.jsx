import React from 'react';
import { AppBar, Toolbar, Button, patch } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ sections }) => {
  const navigate = useNavigate();
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleRedirect = (path) => {
    navigate(path);
  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        {sections.map((section) => (
          <Button key={section.id} color="inherit" onClick={() => handleScroll(section.id)}>
            {section.label}
          </Button>
        ))}
        <Button color="inherit" onClick={() => handleRedirect('/api')}>
            Manejo Api
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
