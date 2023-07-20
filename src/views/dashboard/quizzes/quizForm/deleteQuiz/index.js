import { useState } from 'react';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteQuiz } from 'store/actions/quizzesActions';

const DeleteQuiz = (props) => {
  const { quizId, quizAuthor, loading } = props;
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <Delete color='primary' />
      </IconButton>
      <ConfirmDialog
        name={`delete-quiz-${quizId}`}
        open={isOpen}
        loading={loading}
        title={`Attention`}
        content={`Are you sure to delete this quiz from ${quizAuthor}?`}
        handleClose={() => setIsOpen(false)}
        handleSubmit={() =>
          dispatch(deleteQuiz(quizId, () => setIsOpen(false)))
        }
      />
    </>
  );
};

DeleteQuiz.defaultProps = {
  quizId: '',
  quizAuthor: '',
  loading: false,
};

DeleteQuiz.propTypes = {
  quizId: PropTypes.string.isRequired,
  quizAuthor: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default DeleteQuiz;
