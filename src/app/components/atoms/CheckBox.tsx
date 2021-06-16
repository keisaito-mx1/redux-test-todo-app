import Checkbox from '@material-ui/core/Checkbox';
import { ControllerRenderProps } from 'react-hook-form';

type Props = {
  field: ControllerRenderProps;
};

const CheckBox: React.FC<Props> = ({ field }) => {
  return (
    <Checkbox
      checked={field.value}
      inputRef={field.ref}
      name={field.name}
      onChange={field.onChange}
      onBlur={field.onBlur}
    />
  );
};

export default CheckBox;
