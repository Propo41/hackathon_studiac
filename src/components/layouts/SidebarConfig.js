import { Icon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";
import peopleFill from "@iconify/icons-eva/people-fill";
import shoppingBagFill from "@iconify/icons-eva/shopping-bag-fill";
import fileTextFill from "@iconify/icons-eva/file-text-fill";
import lockFill from "@iconify/icons-eva/lock-fill";
import alertTriangleFill from "@iconify/icons-eva/alert-triangle-fill";
import baselineSubject from "@iconify/icons-ic/baseline-subject";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "DASHBOARD",
    path: "/dashboard",
    icon: getIcon(pieChart2Fill),
  },
  {
    title: "USERS",
    path: "/users",
    icon: getIcon(peopleFill),
  },
  {
    title: "CONTRIBUTORS",
    path: "/contributor",
    icon: getIcon(shoppingBagFill),
  },
  // {
  //   title: "job posts",
  //   path: "/job-posts",
  //   icon: getIcon(fileTextFill),
  // },
  {
    title: "SUBJECTS",
    path: "/subject",
    icon: getIcon(lockFill),
  },
  {
    title: "CREATE NEW SUBJECT",
    path: "/create-new-subject",
    icon: getIcon(baselineSubject),
  },
  {
    title: "RECEIPTS",
    path: "/receipt",
    icon: getIcon(alertTriangleFill),
  },
  {
    title: "ENROLLMENTS",
    path: "/enrollment",
    icon: getIcon(alertTriangleFill),
  },
  {
    title: "CLASS",
    path: "/class",
    icon: getIcon(alertTriangleFill),
  },
];

export default sidebarConfig;
