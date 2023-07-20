import { useEffect, useState } from 'react';

// material-ui
import { IconButton, Tooltip } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';

import { useSelector, useDispatch } from 'react-redux';
import StyledTable from 'ui-component/table/StyledTable';
import { getProject, getProjects } from 'store/actions/projectsActions';
import { clearError, clearProjects } from 'store/types/projectsTypes';
import { Edit, AddOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import moment from 'moment';
import SnackNotify from 'ui-component/notification/snackNotify';
import DeleteProject from './projectForm/deleteProject';
// import DeleteMember from './memberForm/deleteMember';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const tableColumns = [
    {
        key: 'projectTitle',
        label: 'Project Title',
        width: 150,
        align: 'left',
    },
    {
        key: 'author',
        label: 'Author',
        width: 150,
        align: 'left',
    },
    {
        key: 'client',
        label: 'Client',
        width: 100,
        align: 'left',
    },
    {
        key: 'programmingLanguages',
        label: 'Programming languages',
        width: 150,
        align: 'left',
    },
    {
        key: 'tools',
        label: 'Tools',
        width: 200,
        align: 'left',
    },
    {
        key: 'updatedAt',
        label: 'Last update',
        width: 100,
        align: 'left',
    },
    {
        key: 'actions',
        label: 'Actions',
        width: 100,
        align: 'right',
    },
];

const Projects = () => {
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const projectsRed = useSelector((state) => state.projectsState);
    const messageProjects = useSelector((state) => state?.projectsState?.error);

    useEffect(() => {
        dispatch(getProjects());
        return () => dispatch(clearProjects());
    }, [dispatch]);

    useEffect(() => {
        if (projectsRed?.projects) {
            const projectsSet = projectsRed?.projects.map((project) => {
                return {
                    ...project,
                    actions: (
                        <>
                            {' '}
                            <Tooltip title='Edit'>
                                <IconButton onClick={() => dispatch(getProject(project?._id, () => navigate('edit')))}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                            <DeleteProject
                                projectId={project?._id}
                                projectTitle={project?.projectTitle}
                                loading={loading}
                            />
                        </>
                    ),
                    updatedAt: moment(project?.updatedAt).format('ll'),
                    tools: project?.tools?.join(', '),
                };
            });
            setProjects(projectsSet || []);
        }
        setLoading(projectsRed?.loading || false);
    }, [projectsRed, navigate, dispatch, loading]);

    return (
        <>
            <SnackNotify
                open={messageProjects?.message?.length > 0}
                onClose={() => dispatch(clearError())}
                autoHide={1000}
                isError={messageProjects?.status}
                message={messageProjects?.message}
            />
            <MainCard
                title='Projects'
                secondary={<CardSecondaryAction icon={<AddOutlined />} title={'Add project'} link={'add'} />}
            >
                <StyledTable name={'projects'} data={{ rows: projects, columns: tableColumns }} loading={loading} />
            </MainCard>
        </>
    );
};

export default Projects;
