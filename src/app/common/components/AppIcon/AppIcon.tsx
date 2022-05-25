import styled from 'styled-components';
import { variant } from 'styled-system';
import css from '@styled-system/css';

import ic_blog from '@app/asset/icon/ic_blog.png';
import ic_profile from '@app/asset/icon/ic_profile.png';
import ic_project from '@app/asset/icon/ic_project.png';
import ic_note from '@app/asset/icon/ic_note.png';
import Box from '../Box';

const selected = css({
  boxShadow: theme => `0 0 0 1px  ${theme.colors['grey-300']}`,
});

const AppIcon = styled(Box)<{
  selected?: boolean;
  variant: 'bottom' | 'menu' | 'navBar';
  program: 'blog' | 'profile' | 'project' | 'note';
}>`
  ${variant({
    prop: 'program',
    variants: {
      blog: {
        background: `url(${ic_blog})`,
      },
      profile: {
        background: `url(${ic_profile})`,
      },
      project: {
        background: `url(${ic_project})`,
      },
      note: {
        background: `url(${ic_note})`,
      },
    },
  })}

  background-size: cover;

  ${variant({
    variants: {
      bottom: {
        width: '50px',
        height: '50px',
        border: '7.5px solid white',
        boxSizing: 'border-box',
        borderRadius: '5px',
      },
      menu: {
        width: '50px',
        height: '50px',
        border: '7.5px solid white',
        boxSizing: 'border-box',
        borderRadius: '5px',
      },
      navBar: {
        width: '24px',
        height: '24px',
      },
    },
  })};

  ${props => props.selected && selected}
`;

export default AppIcon;
