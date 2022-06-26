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
    icon: <IconManage active />,
    title: "Manage",
    data: ["Thoughts & Emotions", "Challenges & Decisions", "Stress & Chaos"],
    path: "/manage",
  },
  {
    icon: <IconGrow active />,
    title: "Grow",
    data: ["Inspiration", "Goals & Actions", "Reflections"],
    path: "/grow",
  },
  {
    icon: <IconFocus active />,
    title: "Focus",
    data: ["The Most Important Things"],
    path: "/focus",
  },
  {
    icon: <IconConnect active />,
    title: "Connect",
    data: ["Questions", "Advices", "Coaching"],
    path: "/connect",
  },
];

export const menuData = [
  {
    icon: <IconHome />,
    title: <span className="text-gray">Home</span>,
    path: "/Home",
  },
  {
    icon: <IconManage />,
    title: <span className="text-gray">Manage</span>,
    path: "/manage",
  },
  {
    icon: <IconGrow />,
    title: <span className="text-gray">Grow</span>,
    path: "/grow",
  },
  {
    icon: <IconFocus />,
    title: <span className="text-gray">Focus</span>,
    path: "/Focus",
  },
  {
    icon: <IconConnect />,
    title: <span className="text-gray">Connect</span>,
    path: "/connect",
  },
  {
    icon: <IconNotifications />,
    title: <span className="text-gray">Notifications</span>,
    path: "/notifications",
  },
];

export const posts = [];
