import React, { useState } from 'react';
// import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';
// import { IconLogout } from '@tabler/icons';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import { useDispatch, useSelector } from 'react-redux';
import { getAppliers, updateApplier } from 'store/actions/appliersActions';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 420,
//     bgcolor: 'background.paper',
//     border: '3px solid #96cce3',
//     boxShadow: 20,
//     p: 3,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     borderRadius: '10px',
// };

const BasicModal = (props) => {
    const { accept, applierId, applierName } = props;

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state?.appliersState?.loading);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        dispatch(getAppliers());
    };

    return (
        <>
            <Button variant='outlined' color={accept ? 'success' : 'error'} onClick={handleOpen}>
                {accept ? 'Accept' : 'Reject'}
            </Button>
            <ConfirmDialog
                name={`accept-modal-${applierId}`}
                open={open}
                loading={loading}
                title={`Attention`}
                content={
                    accept
                        ? `Do you want to accept ${applierName} as a student?`
                        : `Do you want to reject ${applierName} as a student?`
                }
                handleClose={handleClose}
                handleSubmit={() => dispatch(updateApplier(applierId, accept || false, handleClose))}
            />
            {/* <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div
            style={{
              width: 400,
              display: 'flex',
              flexDirection: 'row',
              gap: '70px',
              marginLeft: '100px'
            }}
          >
            <h3>
              Why the applier was {result}ed?
            </h3>
            <Button color='dark' onClick={handleClose}>
              <IconLogout size='20px' />
            </Button>
          </div>
          <TextareaAutosize
            aria-label='email text'
            minRows={10}
            placeholder='Write an email to the applier!'
            style={{ minWidth: 300, maxWidth: 300 }}
          />
          <div
            style={{
              width: 300,
              marginTop: 10,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button variant='outlined' color={color} onClick={handleClose}>
              Send email and {result}!
            </Button>
            <Button variant='outlined' color='dark' onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Modal> */}
        </>
    );
};
export default BasicModal;
