import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import ConfirmDialog from 'ui-component/modal/confirmDialog';
import { deleteCourse } from 'store/actions/coursesActions';
import PropTypes from 'prop-types';

const DeleteCourse = (props) => {
  const { courseId, courseTitle, loading } = props;
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <Delete color='primary' />
      </IconButton>
      <ConfirmDialog
        name={`delete-course-${courseId}`}
        open={isOpen}
        loading={loading}
        title={`Attention`}
        content={`Are you sure to delete ${courseTitle} from courses?`}
        handleClose={() => setIsOpen(false)}
        handleSubmit={() =>
          dispatch(deleteCourse(courseId, () => setIsOpen(false)))
        }
      />
    </>
  );
};

DeleteCourse.defaultProps = {
  courseId: '',
  courseTitle: '',
  loading: false,
};

DeleteCourse.propTypes = {
  courseId: PropTypes.string.isRequired,
  courseTitle: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default DeleteCourse;
