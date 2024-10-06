import growtheapp from '../images/growthapp.jpg';
import gamepreview from '../images/gamepreview.jpg';
import jobreview from '../images/jobpreview.jpg';

const userData = {
  avatarUrl: '../images/thavatar.png',
  navLinks: [
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Experience', path: '/experience' },
    { title: 'Contact', path: '/contact' },
  ],

  projects: [
    {
      title: 'UI design and developed in ReactJS',
      link: '',
      imgUrl: growtheapp,
    },

    {
      title: 'ReactJS - Data fetching, multiple filerting',
      link: '',
      imgUrl: gamepreview,
    },
    {
      title: 'Job dashboard',
      link: '',
      imgUrl: jobreview,
    },
  ],

  experience: [
    {
      title: 'Software Developer',
      company: 'mroads',
      year: '2021',
      companyLink: 'https://mroads.com',
      desc: 'Contributed to our flagship product - Panna - which is an AI powered candidate interviewing product.',
    },
    {
      title: 'Grahpic Designer',
      company: '24hourwristband.com',
      year: '2019',
      companyLink: 'https://imprint.com',
      desc: 'I have been working as a senior designer. My responsible to check artwork quality, redesign as customers deman and make sure order ready for production.',
    },
  ],
};

export default userData;
