import async from "../components/Async";

const Homepage = async(() => import("../pages/homepage/homepage"));

const homepageRoute = {
  id: "Homepage",
  path: `${process.env.PUBLIC_URL}/`,
  component: Homepage,
  children: null,
};

export const homepageLayoutRoute = [homepageRoute];
