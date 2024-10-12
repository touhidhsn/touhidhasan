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
      title: 'Freelancer Frontend web developer',
      company: 'Dewdrop Webdev',
      year: '2023 to present',
      companyLink: '#',
      desc: 'Based on React, nextjs and wordpress, I create websites for my clients. And now I am also working my personal React project and will provide update very soon.',
    },
    {
      title: 'Frontend web developer (Part time & Remote)',
      company: 'Dewdrop Webdev',
      year: '2022 to 2023',
      companyLink: '#',
      desc: 'My responsibility was as a frontend developer to build new websites, refectoring, maintaining and fixing bugs of our existing websites.',
    },
    {
      title: 'Senior Graphic Designer',
      company: 'Imprint Dhaka LTD',
      year: '2019 to present',
      companyLink: 'https://imprint.com',
      desc: 'I have been working as a senior designer. My responsible to check artwork quality, redesign as customers deman and make sure order ready for production.',
    },
    {
      title: 'Frontend web developer',
      company: 'Open IT',
      year: '2018 to 2019',
      companyLink: '#',
      desc: 'I have worked as a front end web developer. We used many popluar themes live thrive, avavada, betheme etc to build websites. Sometimes as per customers requirment we also created websites using HTML, css.',
    },
    {
      title: 'BSc',
      company: 'Computer Science Engineering ',
      year: '2017',
      companyLink: '#',
      desc: 'It was not easy for me but somehow by the grace of Allah, I have completed my bachelor degree successfully!',
    },
  ],
  aboutMe: `Experienced web developer with expertise in HTML, CSS, JavaScript, TypeScript, and React, along with knowledge of Figma for UI/UX design. I have also worked with Wordpress customization. My strong problem-solving skills enable me to tackle complex coding challenges and optimize performance. I have a proven track record of building scalable, responsive web applications, merging design and development seamlessly. With a focus on clean, maintainable code and a passion for creating intuitive user experiences, I bring a blend of technical and creative abilities to every project.`,
};

export default userData;
