import iconHome from '../../assets/images/000-home.svg';
import iconAbout from '../../assets/images/000-user-3.svg';
import iconGallery from '../../assets/images/000-internet.svg';
import iconResume from '../../assets/images/000-document-1.svg';

const linkStyle = 'f6 fw4 hover-white no-underline white-70 ml2 pv1 pl1 grow';
const imageStyle = 'w2 br-100 b--white ba';

const INTERNALLINKS = [
  {
    id: 1,
    title: 'Home',
    image: iconHome,
    imageStyle: imageStyle + " bg-black-70",
    link: '/home',
    linkStyle: linkStyle + ' dib-ns aaz-home dn'
  },
  {
    id: 2,
    title: 'About',
    image: iconAbout,
    imageStyle: imageStyle + " bg-white-70",
    link: '/about',
    linkStyle: linkStyle + ' dib'
  },
  {
    id: 3,
    title: 'Gallery',
    image: iconGallery,
    imageStyle: imageStyle + " bg-white-70",
    link: '/gallery',
    linkStyle: linkStyle + ' dib'
  },
  {
    id: 4,
    title: 'Resume',
    image: iconResume,
    imageStyle: imageStyle + " bg-white-70",
    link: '/resume',
    linkStyle: linkStyle + ' dib-ns dn'
  }
];

export default INTERNALLINKS;