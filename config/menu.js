// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: "帮助",
    path: "https://cn.vuejs.org",
    external: true,
    icon: ""
  },
  {
    name: "设置",
    path: "/#/account/settings",
    external: false,
    icon: ""
  }
];

const asideMenuConfig = [
  {
    name: "仪表盘",
    path: "/dashboard",
    icon: "iconfont icon-dashboard",
    children: [
      {
        name: "分析页",
        path: "/dashboard/analysis"
      },
      {
        name: "监控页",
        path: "/dashboard/monitor"
      },
      {
        name: "工作台",
        path: "/dashboard/workplace"
      }
    ]
  },
  {
    name: "表单页",
    path: "/form",
    icon: "iconfont icon-edit-square",
    children: [
      {
        name: "基础表单",
        path: "/form/basic-form"
      },
      {
        name: "分步表单",
        path: "/form/step-form"
      },
      {
        name: "高级表单",
        path: "/form/advanced-form"
      }
    ]
  },
  {
    name: "列表页",
    path: "/list",
    icon: "iconfont icon-table",
    children: [
      {
        name: "搜索列表",
        path: "/list/search",
        children: [
          {
            name: "搜索列表（文章）",
            path: "/list/search/articles"
          },
          {
            name: "搜索列表（项目）",
            path: "/list/search/projects"
          },
          {
            name: "搜索列表（应用）",
            path: "/list/search/applications"
          }
        ]
      },
      {
        name: "查询表格",
        path: "/list/table-list"
      },
      {
        name: "标准列表",
        path: "/list/basic-list"
      },
      {
        name: "卡片列表",
        path: "/list/card-list"
      }
    ]
  },
  {
    name: "详情页",
    path: "/profile",
    icon: "iconfont icon-detail",
    children: [
      {
        name: "基础详情页",
        path: "/profile/basic"
      },
      {
        name: "高级详情页",
        path: "/profile/advanced"
      }
    ]
  },
  {
    name: "结果页",
    path: "/result",
    icon: "iconfont icon-check-circle",
    children: [
      {
        name: "成功页",
        path: "/result/success"
      },
      {
        name: "失败页",
        path: "/result/fail"
      }
    ]
  },
  {
    name: "异常页",
    path: "/exception",
    icon: "iconfont icon-error",
    children: [
      {
        name: "403",
        path: "/exception/403"
      },
      {
        name: "404",
        path: "/exception/404"
      },
      {
        name: "500",
        path: "/exception/500"
      }
    ]
  },
  {
    name: "个人页",
    path: "/account",
    icon: "iconfont icon-user",
    children: [
      {
        name: "个人中心",
        path: "/account/center"
      },
      {
        name: "个人设置",
        path: "/account/settings"
      }
    ]
  }
];

export { headerMenuConfig, asideMenuConfig };
