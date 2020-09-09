import { makeStyles } from '@material-ui/core/styles'; // styles 기능 추가
import { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme, { active: boolean }>((theme) => {
  return {
    paragraph: {
      margin: theme.spacing(1),
      boxShadow: theme.shadows[1],
      color: (props) => (props.active ? 'red' : 'grey'),
    },
  };
});
