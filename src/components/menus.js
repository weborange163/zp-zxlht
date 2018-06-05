const menus = [
  {id: '0', label: '首页', name:'home', icon: 'iconfont icon-index'},
  {
    id: 'a',
    icon: 'iconfont icon-menu',
    label: '内容管理',
    submenu: [
      {id: 'a1', name: 'news', label: '新闻资讯管理'},
      {id: 'a2', name: 'c-button', label: '行业信息管理'}
    ]
  },
  {
    id: 'b',
    icon: 'iconfont icon-operate',
    label: '运营管理',
    submenu: [
      {id: 'b1', name: 'c-checkbox', label: 'banner管理'},
      {id: 'b2', name: 'c-alert', label: '专题管理'},
      {id: 'b3', name: 'c-input', label: '评论管理'},
      {id: 'b4', name: 'c-keyboard', label: '广播管理'}
    ]
  },
  {
    id: 'c',
    icon: 'iconfont icon-diamond',
    label: '会员中心',
    submenu: [
      {id: 'c1', name: 'member', label: '会员管理'},
      {id: 'c2', name: 'c-data-table', label: '用户反馈'}
    ]
  },
  {
    id: 'd',
    icon: 'iconfont icon-setting',
    label: '系统管理',
    submenu: [
      {id: 'd1', name: 'c-dropdown', label: '规则管理'},
      {id: 'd2', name: 'c-navbar', label: '版本管理'},
      {id: 'd3', name: 'c-container', label: '角色与权限'},
      {id: 'd4', name: 'demo', label: '后台用户管理'}
    ]
  },
  {
    id: 'e',
    icon: 'iconfont icon-data',
    label: '数据统计',
    submenu: [
      {id: 'e1', name: '404', label: '内容数据'},
      {id: 'e2', name: '505', label: '平台用户数据'}
    ]
  }
  /*{
    id: 'components',
    icon: 'fa fa-microchip',
    label: '组件',
    submenu: [
      {
        id: 'test',
        label: '二级测试',
        icon: 'fa fa-hand-o-up',
        submenu: [
          {
            id: 'test',
            label: '二级测试',
            icon: 'fa fa-hand-o-up'
          }
        ]
      },
      ['Form 表单', [
        {id: 'f1', name: 'c-button', label: 'Button 按钮', icon: 'fa fa-hand-o-up'},
        {id: 'f2', name: 'c-switch', label: 'Switch 开关', icon: 'fa fa-square-o'},
        {id: 'f3', name: 'c-checkbox', label: 'Checkbox 多选框', icon: 'fa fa-check-square'},
        // {id: 'f4', label: 'Radio 单选框', icon: 'fa fa-dot-circle-o'},
        {id: 'f5', name: 'c-input', label: 'Input 输入框', icon: 'fa fa-pencil'},
        {id: 'f6', name: 'c-keyboard', label: '虚拟键盘', icon: 'fa fa-keyboard-o'}
      ]],
      ['Notice', [
        {id: 'n1', name: 'c-alert', label: 'Alert 警告', icon: 'fa fa-info'},
        {id: 'n2', name: 'c-loading', label: 'Loading 加载', icon: 'fa fa-circle-o-notch'}
      ]],
      ['Other', [
        {id: 'c-dropdown', name: 'c-dropdown', label: 'Dropdown'},
        {id: 'c-navbar', name: 'c-navbar', label: 'Navbar'},
        {id: 'c-container', name: 'c-container', label: '栅格布局'}
      ]]
    ]
  },
  {
    id: 'pages',
    icon: 'fa fa-circle-o',
    label: 'Pages 页面',
    submenu: [
      {id: 'p-data-table', name: 'p-data-table', label: 'Table 表格数据'},
      {id: 'cnode', name: 'cnode', label: 'Cnode社区'},
      {id: 'p1', name: 'login', label: 'Login 登录'},
      {id: 'p2', name: 'p-login', label: 'Login 登录2'},
      {id: 'p3', name: 'p-register', label: 'Register 注册'},
      {id: '400', path: '/404', label: '404'},
      {id: '500', path: '/500', label: '500'}
    ]
  },
  {
    id: 'examples',
    icon: 'fa fa-paper-plane',
    label: 'Examples',
    submenu: [
      {id: 'e1', path: '/500', label: 'Vuex 例子'}
    ]
  },
  {
    id: 'version',
    icon: 'fa fa-meetup',
    label: '应用'
  }*/
]
export default menus
