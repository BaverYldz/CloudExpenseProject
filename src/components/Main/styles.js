import { makeStyles } from '@material-ui/core/styles';
import '../../assets/fonts/DejaVuSansMono.ttf';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: '#25282c',
    color: '#dde0e3',
    borderRadius: '15px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cardContent: {
    paddingTop: 0,
  },
  divider: {
    margin: '20px 0',
  },
  marquee: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#333840',
    color: '#ffffff',
    height: '50px',
    lineHeight: '50px',
    position: 'relative',
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
  marqueeContent: {
    position: 'absolute',
    whiteSpace: 'nowrap',
    animation: '$slide 10s linear infinite',
  },
  "@keyframes slide": {
    "0%": { transform: 'translateX(100%)' },
    "100%": { transform: 'translateX(-100%)' }
  }
}));