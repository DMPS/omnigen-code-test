import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StaffMember from './StaffMember'

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function App() {
  const classes = useStyles();
  const [curStaff, setCurStaff] = React.useState(0);
  const [staff,setStaff] = React.useState(null);
  React.useEffect(() => {
    async function loadStaff() {
        const res = await fetch("http://localhost:8000/staff")
        setStaff(await res.json())
    }
    loadStaff();
 }, [])

  const handleChange = (event, newStaff) => {
    setCurStaff(newStaff);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={curStaff}
        onChange={handleChange}
        aria-label="Staff Members"
        className={classes.tabs}
      >
        {
          staff && staff.map((staffMember,index)=>{
            return <Tab label={staffMember.name} {...a11yProps(index)} />
          })
        }
      </Tabs>
      {staff && staff.map((staffMember,index)=>{
        return <StaffMember curStaff={curStaff} index={index} staffMember={staffMember}/>
      })}
    </div>
  );
}