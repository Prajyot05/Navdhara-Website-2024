{/* <iframe src="https://konfhub.com/widget/navdhara-a-stream-of-innovation?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10" id="konfhub-widget" title="Register for NAVDHARA - A Stream of Innovation" width="100%" height="500"></iframe> */}
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const style = (theme) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Default width for small screens
    maxWidth: 600, // Maximum width for larger screens
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    [theme.breakpoints.up('sm')]: {
      width: '70%', // Width for small and up screens
    },
    [theme.breakpoints.up('md')]: {
      width: '50%', // Width for medium and up screens
    },
    [theme.breakpoints.up('lg')]: {
      width: '40%', // Width for large and up screens
    },
});

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  return (
    <div>
        <Button onClick={handleOpen}><button className='register-btn'>Register</button></Button>
        {/* <div><script src="https://widget.konfhub.com/widget.js" button_id="btn_c081a7ce3d07"></script></div> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe src="https://konfhub.com/widget/navdhara-a-stream-of-innovation?desc=false&secondaryBg=F7F7F7&ticketBg=F7F7F7&borderCl=F7F7F7&bg=FFFFFF&fontColor=572148&ticketCl=572148&btnColor=fb5850&fontFamily=Prompt&borderRadius=10" id="konfhub-widget" title="Register for NAVDHARA - A Stream of Innovation" width="100%" height="500"></iframe>
        </Box>
      </Modal>
      
    </div>
  );
}