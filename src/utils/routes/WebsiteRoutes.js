/* eslint-disable no-unused-vars */
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Members = Loadable(lazy(() => import('views/dashboard/members')));
const AddMember = Loadable(lazy(() => import('views/dashboard/members/memberForm/addMember')));
const EditMember = Loadable(lazy(() => import('views/dashboard/members/memberForm/editMember')));
const Posts = Loadable(lazy(() => import('views/dashboard/posts')));
const AddPost = Loadable(lazy(() => import('views/dashboard/posts/postForm/addPost')));
const EditPost = Loadable(lazy(() => import('views/dashboard/posts/postForm/editPost')));
const Projects = Loadable(lazy(() => import('views/dashboard/projects')));
const AddProject = Loadable(lazy(() => import('views/dashboard/projects/projectForm/addProject')));
const EditProject = Loadable(lazy(() => import('views/dashboard/projects/projectForm/editProject')));
const Services = Loadable(lazy(() => import('views/dashboard/services')));
const AddService = Loadable(lazy(() => import('views/dashboard/services/serviceForm/addService')));
const EditService = Loadable(lazy(() => import('views/dashboard/services/serviceForm/editService')));
const Quiz = Loadable(lazy(() => import('views/dashboard/quiz')));
const Quizzes = Loadable(lazy(() => import('views/dashboard/quizzes')));
const AddQuiz = Loadable(lazy(() => import('views/dashboard/quizzes/quizForm/addQuiz')));
const EditQuiz = Loadable(lazy(() => import('views/dashboard/quizzes/quizForm/editQuiz')));
const Courses = Loadable(lazy(() => import('views/dashboard/courses')));
const AddCourse = Loadable(lazy(() => import('views/dashboard/courses/courseForm/addCourse')));
const EditCourse = Loadable(lazy(() => import('views/dashboard/courses/courseForm/editCourse')));
const Students = Loadable(lazy(() => import('views/dashboard/students')));
const Appliers = Loadable(lazy(() => import('views/dashboard/appliers')));
const SubmitedQuizzes = Loadable(lazy(() => import('views/dashboard/submitted-quizzes')));

// ==============================|| MAIN ROUTING ||============================== //

const WebsiteRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Members />,
        },
        {
            path: 'dashboard',
            element: <Members />,
        },
        {
            path: 'members',
            element: <Members />,
        },
        {
            path: 'members/add',
            element: <AddMember />,
        },
        {
            path: 'members/edit',
            element: <EditMember />,
        },
        {
            path: 'posts',
            element: <Posts />,
        },
        {
            path: 'posts/add',
            element: <AddPost />,
        },
        {
            path: 'posts/edit',
            element: <EditPost />,
        },
        {
            path: 'projects',
            element: <Projects />,
        },
        {
            path: 'projects/add',
            element: <AddProject />,
        },
        {
            path: 'projects/edit',
            element: <EditProject />,
        },
        {
            path: 'quizzes',
            element: <Quizzes />,
        },
        {
            path: 'quizzes/add',
            element: <AddQuiz />,
        },
        {
            path: 'quizzes/edit',
            element: <EditQuiz />,
        },
        {
            path: 'services',
            element: <Services />,
        },
        {
            path: 'services/add',
            element: <AddService />,
        },
        {
            path: 'services/edit',
            element: <EditService />,
        },
        {
            path: 'courses',
            element: <Courses />,
        },
        {
            path: 'courses/add',
            element: <AddCourse />,
        },
        {
            path: 'courses/edit',
            element: <EditCourse />,
        },
        {
            path: 'students',
            element: <Students />,
        },
        {
            path: 'students/:id/submitted-quizzes',
            element: <SubmitedQuizzes />,
        },
        {
            path: 'students/:id/submitted-quizzes/:quizId',
            element: <Quiz />,
        },
        {
            path: 'appliers',
            element: <Appliers />,
        },
    ],
};

export default WebsiteRoutes;
