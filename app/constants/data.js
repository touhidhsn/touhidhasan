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
  socialLinks: [
    {
      title: 'Facebook',
      link: 'http://fb.com/touhidhsn',
    },
    {
      title: 'Instagram',
      link: 'http://www.instagram.com/thdhsn',
    },
    {
      title: 'GitHub',
      link: 'http://github.com/touhidhsn',
    },
    {
      title: 'Behance',
      link: 'http://www.behance.net/thdhsn9ab0',
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
  aboutMe: `Experienced web developer with expertise in HTML, CSS, JavaScript, TypeScript, and React, along with knowledge of Figma for UI/UX design. I have also worked with Wordpress customization. My strong problem-solving skills enable me to tackle complex coding challenges and optimize performance. I have a proven track record of building scalable, responsive web applications, merging design and development seamlessly. With a focus on clean, maintainable code and a passion for creating intuitive user experiences, I bring a blend of technical and creative abilities to every project.`,
};

export default userData;
