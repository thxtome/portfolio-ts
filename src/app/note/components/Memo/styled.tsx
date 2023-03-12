import HStack from '@src/app/common/components/HStack';
import styled from 'styled-components';
import css from '@styled-system/css';

const selected = css({
  background: theme => theme.colors.white,
  '&::before': {
    content: `""`,
    position: 'absolute',
    width: '10px',
    height: '100%',
    background: theme => theme.colors['blue-300'],
  },
});

export const Container = styled(HStack)<{ selected?: boolean }>`
  border-bottom: 1px solid ${props => props.theme.colors['grey-300']};
  cursor: pointer;
  ${props => props.selected && selected}
`;
