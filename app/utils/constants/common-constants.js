
  import {
    BookIcon,
    UserListIcon,
    UserIcon,
  } from '../../assets/icons';
  
  export const PAGE_ROUTES = {
    Dashboard: '/dashboard',
    Setting: '/setting',
    Signin: '/auth/signin',
    Signup: '/auth/signup',
    Product: '/product',
    Profile: '/profile',
    UserList: 'userlist',
  };
  

  
  export const SIDEBAR_ITEMS = [
    {
      id: 1,
      iconName: 'Product',
      path: PAGE_ROUTES.Product,
      icon: BookIcon,
      position: 12,
    },
    {
      id: 2,
      iconName: 'Profile',
      path: PAGE_ROUTES.profile,
      icon: UserIcon,
      position: 86,
    },
    {
      id: 3,
      iconName: 'User List',
      path: PAGE_ROUTES.UserList,
      icon: UserListIcon,
      position: 160,
    },
  ];