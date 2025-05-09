import companyLogo1 from './assets/company-icon1.png';
import companyLogo2 from './assets/company-icon2.png';
import companyLogo3 from './assets/company-icon3.png';
import companyLogo4 from './assets/company-icon4.png';
import companyLogo5 from './assets/company-icon5.png';
import avatar1 from './assets/testimonial-1.jpg';
import avatar2 from './assets/testimonial-2.jpg';
import avatar3 from './assets/testimonial-3.jpg';

export const statsData = [
  { value: '30+', label: 'Years Teaching Excellence' },
  { value: '200+', label: 'Average SAT Score Increase' },
  { value: '500+', label: 'Students Empowered' },
  { value: '15%', label: 'Average Grade Improvement' },
];

export const resultsData = [
  {
    value: '93%',
    text: '...of our students improved their math grades within one semester',
  },
  {
    value: '90%',
    text: '...of our students report feeling more confident in their math abilities after just 3 months',
  },
  {
    value: '4x more likely',
    text: '...to pursue STEM careers at top companies',
  },
  {
    value: '85%',
    text: '...of our students maintain A/A-grade in advanced math courses',
  },
];

export const testimonialData = [
  {
    id: 1,
    title: 'Interactive Learning Experience',
    quote: 'Learning here is hands-on and engaging. My child looks forward to school every day!',
    user: {
      name: 'Indigo Violet',
      position: 'Director, Thump Coffee',
      avatar: avatar1,
    },
  },
  {
    id: 2,
    title: 'Amazing Teacher Support',
    quote: 'Teachers truly care and guide the children individually. It’s more than just academics.',
    user: {
      name: 'Emily Sun',
      position: 'Parent of 6th Grader',
      avatar: avatar2,
    },
  },
  {
    id: 3,
    title: 'Fun & Educational Curriculum',
    quote: 'The blend of creativity and structure helped my son thrive in math and science.',
    user: {
      name: "Carlos D'Souza",
      position: 'Engineer & Parent',
      avatar: avatar3,
    },
  },
];

export const topCompanies = [
  { name: 'logo1', logo: companyLogo1 },
  { name: 'logo2', logo: companyLogo2 },
  { name: 'logo3', logo: companyLogo3 },
  { name: 'logo4', logo: companyLogo4 },
  { name: 'logo5', logo: companyLogo5 },
];

export const stepsData = [
  {
    number: 1,
    title: 'Book a free math session',
    description: 'Pick a date and time that works for you with a Brighterly math tutoring expert and get started',
  },
  {
    number: 2,
    title: "Evaluating your child's level",
    description: "During the 1st free lesson, the math tutor assesses the student's level and provides feedback.",
  },
  {
    number: 3,
    title: 'Start learning!',
    description:
      "Looking for a math tutor can be challenging, but now you can exhale and agree on a schedule that's convenient for you and your child.",
  },
];
