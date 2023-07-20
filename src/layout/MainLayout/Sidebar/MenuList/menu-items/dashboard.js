// assets
import {
    IconDashboard,
    IconUsers,
    IconNews,
    IconBrandGit,
    IconBrandAppleArcade,
    IconQuestionMark,
    IconCertificate,
    IconSchool,
    IconUserPlus,
} from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconUsers,
    IconNews,
    IconBrandGit,
    IconBrandAppleArcade,
    IconQuestionMark,
    IconCertificate,
    IconSchool,
    IconUserPlus,
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: '',
            title: 'Dashboard',
            type: 'item',
            url: '/',
            icon: icons.IconDashboard,
            breadcrumbs: false,
            disabled: true,
        },
        {
            id: 'members',
            title: 'Members',
            type: 'item',
            url: '/members',
            icon: icons.IconUsers,
            breadcrumbs: false,
        },
        {
            id: 'posts',
            title: 'Posts',
            type: 'item',
            url: '/posts',
            icon: icons.IconNews,
            breadcrumbs: false,
        },
        {
            id: 'projects',
            title: 'Projects',
            type: 'item',
            url: '/projects',
            icon: icons.IconBrandGit,
            breadcrumbs: false,
        },
        {
            id: 'services',
            title: 'Services',
            type: 'item',
            url: '/services',
            icon: icons.IconBrandAppleArcade,
            breadcrumbs: false,
        },
        {
            id: 'courses',
            title: 'Courses',
            type: 'item',
            url: '/courses',
            icon: icons.IconCertificate,
            breadcrumbs: false,
        },
        {
            id: 'quizzes',
            title: 'Quizzes',
            type: 'item',
            url: '/quizzes',
            icon: icons.IconQuestionMark,
            breadcrumbs: false,
        },
        {
            id: 'students',
            title: 'Students',
            type: 'item',
            url: '/students',
            icon: icons.IconSchool,
            breadcrumbs: false,
        },
        {
            id: 'appliers',
            title: 'Appliers',
            type: 'item',
            url: '/appliers',
            icon: icons.IconUserPlus,
            breadcrumbs: false,
        },
    ],
};

export default dashboard;
