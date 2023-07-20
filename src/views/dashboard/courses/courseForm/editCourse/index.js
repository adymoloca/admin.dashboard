import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MainCard from 'ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { ArrowBackIosNewTwoTone } from '@mui/icons-material';
import CourseForm from '..';

const EditCourse = () => {
    const courseRed = useSelector((state) => state?.coursesState?.course);

    const [course, setCourse] = useState(courseRed);

    useEffect(() => {
        setCourse(courseRed);
    }, [courseRed]);

    return (
        <>
            <MainCard
                title='Courses/ Edit'
                secondary={<CardSecondaryAction icon={<ArrowBackIosNewTwoTone />} title={'Back'} link={'/courses'} />}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <CourseForm values={course} setValues={setCourse} type={'Edit'} />
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default EditCourse;
