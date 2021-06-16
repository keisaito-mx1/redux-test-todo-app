import Styled from '@emotion/styled';
import { ReactNode } from 'react';
import { COLOR, SIZE } from '../../styles/constant';

interface Attributes {
  className?: string;
}

interface Contents {
  type: 'notice' | 'success' | 'error';
  text: ReactNode;
}

type Props = Attributes & Contents;
const Wrapper = Styled('div')<Pick<Props, 'type'>>(
  {
    width: '100%',
    padding: `${SIZE.PADDING.MEDIUM} ${SIZE.PADDING.LARGE}`,
    fontSize: SIZE.FONT.MEDIUM,
    lineHeight: SIZE.LINEHEIGHT.XLARGE,
    borderRadius: '8px',
  },
  ({ type }) =>
    type === 'notice' && {
      backgroundColor: COLOR.BACKGROUND.GRAY,
      color: COLOR.FONT.LIGHT,
      border: `1px solid ${COLOR.BORDER.DEFAULT}`,
    },
  ({ type }) =>
    type === 'success' && {
      backgroundColor: COLOR.BACKGROUND.LIGHT_GREEN,
      color: COLOR.FONT.SUCCESS,
    },
  ({ type }) =>
    type === 'error' && {
      backgroundColor: COLOR.BACKGROUND.LIGHT_RED,
      color: COLOR.FONT.DANGER,
    }
);

const Message: React.FC<Props> = ({ className, type, text }) => (
  <Wrapper className={className} type={type}>
    {text}
  </Wrapper>
);

export default Message;
