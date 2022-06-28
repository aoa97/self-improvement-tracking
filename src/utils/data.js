import {
  IconHome,
  IconManage,
  IconGrow,
  IconFocus,
  IconConnect,
  IconNotifications,
} from "../components/icons";

export const landingData = [
  {
    icon: <IconManage active={+true} />,
    title: "Manage",
    data: ["Thoughts & Emotions", "Challenges & Decisions", "Stress & Chaos"],
    path: "/manage",
  },
  {
    icon: <IconGrow active={+true} />,
    title: "Grow",
    data: ["Inspiration", "Goals & Actions", "Reflections"],
    path: "/grow",
  },
  {
    icon: <IconFocus active={+true} />,
    title: "Focus",
    data: ["The Most Important Things"],
    path: "/focus",
  },
  {
    icon: <IconConnect active={+true} />,
    title: "Connect",
    data: ["Questions", "Advices", "Coaching"],
    path: "/connect",
  },
];

export const menuData = [
  {
    icon: <IconHome />,
    title: 'Home',
    path: "/Home",
  },
  {
    icon: <IconManage />,
    title: 'Manage',
    path: "/manage",
  },
  {
    icon: <IconGrow />,
    title: 'Grow',
    path: "/grow",
  },
  {
    icon: <IconFocus />,
    title: 'Focus',
    path: "/Focus",
  },
  {
    icon: <IconConnect />,
    title: 'Connect',
    path: "/connect",
  },
  {
    icon: <IconNotifications />,
    title: 'Notifications',
    path: "/notifications",
  },
];

