const header = {
  menu: [
    {
      name: 'Hotels and resorts',
      submenu: true,
      sublinks: {
        featured: [
          {
            link: 'Software product development',
            href: '/development/software-product-development',
          },
          {
            link: 'Web application development',
            href: '/development/web-application-development',
          },
          {
            link: 'DevNetOps services',
            href: '/development/dev-net-ops-services',
          },
          {
            link: 'IT consultant services',
            href: '/development/it-consulting-services',
          },
        ],
      },
      url: '',
    },
    {
      name: 'Offers',
      submenu: true,
      sublinks: {
        featured: [
          {
            link: 'Network operations',
            href: '/services/network-operations',
          },
          {
            link: 'Network security',
            href: '/services/network-security',
          },
          {
            link: 'Cyber security operations',
            href: '/services/cyber-security-operations',
          },
          {
            link: 'System automation',
            href: '/services/system-automation',
          },
        ],
      },
      url: '',
    },
    {
      name: 'Blogs',
      submenu: false,
      url: '/news',
      sublinks: {},
    },
    {
      name: 'Services',
      submenu: false,
      url: '/jobs',
      sublinks: {},
    },
  ],
  logo: '../public/images/pics/logo.png',
  btnText: 'Contact us',
  url: '/about-us',
};
export default header;
