import { Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'default',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/default',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'page',
    title: 'Pages',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'Authentication',
        title: 'Authentication',
        type: 'collapse',
        icon: 'ti ti-key',
        children: [
          {
            id: 'login',
            title: 'Login',
            type: 'item',
            url: '/guest/login',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'register',
            title: 'Register',
            type: 'item',
            url: '/guest/register',
            target: true,
            breadcrumbs: false
          }
        ]
      }
    ]
  },
  {
    id: 'elements',
    title: 'Elements',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'typography',
        title: 'orderlist',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-list'
      },
      {
        id: 'color',
        title: 'Order Detail',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-paper-bag'
      },
      {
        id: 'color',
        title: 'Customer',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-user',
        target: true,
        external: true,
      },
      {
        id: 'color',
        title: 'Analytics',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-graph',
        target: true,
        external: true
      }, 
      {
        id: 'color',
        title: 'Reviews',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-stars',
        target: true,
        external: true
      }, {
        id: 'tabler',
        title: 'Foods',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-shovel-pitchforks',
        target: true,
        external: true
      },
      {
        id: 'tabler',
        title: 'Food Detail',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-graph',
        target: true,
        external: true
      }, {
        id: 'tabler',
        title: 'Customer Detail',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-graph',
        target: true,
        external: true
      }, {
        id: 'tabler',
        title: 'Calendar',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-calendar-month',
        target: true,
        external: true
      },
      {
        id: 'tabler',
        title: 'Chat',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-message-dots',
        target: true,
        external: true
      },
      {
        id: 'tabler',
        title: 'Wallet',
        type: 'item',
        classes: 'nav-item',
        url: '#',
        icon: 'ti ti-wallet',
        target: true,
        external: true
      }
    ]
  },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-navigation',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'ti ti-brand-chrome'
  //     },
  //     {
  //       id: 'document',
  //       title: 'Document',
  //       type: 'item',
  //       classes: 'nav-item',
  //       url: 'https://codedthemes.gitbook.io/berry-angular/',
  //       icon: 'ti ti-vocabulary',
  //       target: true,
  //       external: true
  //     }
  //   ]
  // }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
