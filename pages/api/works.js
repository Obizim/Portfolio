const works = [
  {
    id: 1,
    title: "CF (Blog)",
    url: "https://cringe-flicks.vercel.app/",
    description: "A blog site using Sanity.io for Content Management"
  },
  {
    id: 2,
    title: "Gradlink",
    url: "https://filmmax.netlify.app/",
    description: "An online job portal application"
  },
  {
    id: 3,
    title: "Shoppies",
    url: "https://shoppies21.netlify.app/",
    description: "A movie awards nomination site, data from IMDB API"
  },
];

export default function WorksAPI(req, res) {
  res.status(200).json({ data: works });
}
