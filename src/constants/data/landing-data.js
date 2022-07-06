import {
  IconManage,
  IconGrow,
  IconFocus,
  IconConnect,
} from "../../components/icons";

const landingData = [
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

export default landingData