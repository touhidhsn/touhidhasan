const about = {
  // each of these properties is optional - they can be left empty or deleted
  // each element in the `description` array will be treated as a separate paragraph
  name: 'Touhid Hasan',
  greetingEmoji: '👋',
  role: 'Software Engineer',
  company: 'Acme Labs',
  description: [
    'I am a skilled professional with expertise in web development and graphic design. My proficiency lies in seamlessly combining both disciplines to create visually appealing and functional digital experiences. With a strong foundation in web development, I bring a versatile skill set to deliver creative and technically sound solutions.',
  ],
  resume: 'https://example.com',
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 1',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 2',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 3',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Project 4',
    description: [
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    ],
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://example.com',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'johndoe@email.com',
}

export { about, projects, skills, contact }
