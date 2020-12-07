import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { staffMember, curStaff, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={curStaff !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {curStaff === index && (
          <Box p={3}>
            <Typography variant="h3">{staffMember.name}</Typography>
            <Typography>Age: {staffMember.age}</Typography>
            <Typography>Height: {staffMember.height}</Typography>
            <Typography>Weight: {staffMember.weight}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    staffMember: PropTypes.object.isRequired,
    index: PropTypes.any.isRequired,
    curStaff: PropTypes.any.isRequired,
  };

  export default TabPanel