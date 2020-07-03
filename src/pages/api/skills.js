import { skillsData } from '../../utils/Data';

export default (req, res) => {
  if (req.method !== 'GET') {
    res.status(200).json({ msg: 'Sorry we just accept GET requests' });
  }

  res.json(skillsData);
};
