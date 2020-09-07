import { makeStyles } from '@material-ui/core/styles'; // styles 기능 추가

export const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    paragraph: {
      margin: theme.spacing(1),
      boxShadow: theme.shadows[1],
      color: (props) => (props.active ? 'red' : 'grey'),
    },
  };
});
