const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/homepage/:companyCode",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "/app/:companyCode",
        component: () => import("pages/AppPage.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
