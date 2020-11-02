import { projectsData, skillsData } from 'utils/Data';

export default (req, res) => {
  if (req.body.data === 'projects') {
    res.json(projectsData);
  } else if (req.body.data === 'skills') {
    res.json(skillsData);
  }
};
