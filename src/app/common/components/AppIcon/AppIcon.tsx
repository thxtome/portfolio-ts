import styled from 'styled-components';
import { variant } from 'styled-system';
import css from '@styled-system/css';

import ic_blog from '@app/asset/icon/ic_blog.png';
import ic_profile from '@app/asset/icon/ic_profile.png';
import ic_project from '@app/asset/icon/ic_project.png';
import ic_note from '@app/asset/icon/ic_note.png';
import ic_menu from '@app/asset/icon/ic_menu.png';
import HStack from '@common/components/HStack';
import { MouseEventHandler } from 'react';

interface Props {
  selected?: boolean;
  opened?: boolean;
  variant: 'bottom' | 'menu' | 'navBar';
  iconId: 'blog' | 'profile' | 'project' | 'note' | 'menu';
  onClick?: () => void;
  onClickCapture?: MouseEventHandler<HTMLDivElement>;
}

const selected = css({
  border: theme => `1px solid ${theme.colors['grey-300']}`,
  background: 'white',
});

const opened = css({
  boxShadow: theme => `0 6px 0 -3px ${theme.colors['blue-500']}`,
});

const Wrap = styled(HStack)<Props>`
  justify-content: center;
  align-items: center;

  ${props => props.selected && selected}
  ${props => props.opened && opened}

  ${variant({
    variants: {
      bottom: {
        width: '50px',
        height: '50px',
        borderRadius: '5px',
        cursor: 'pointer',
        '> div': {
          width: '35px',
          height: '35px',
        },
      },
      menu: {
        width: '50px',
        height: '50px',
        boxSizing: 'border-box',
        borderRadius: '5px',
        cursor: 'pointer',
        '> div': {
          width: '35px',
          height: '35px',
        },
      },
      navBar: {
        width: '24px',
        height: '24px',
        '> div': {
          width: '100%',
          height: '100%',
        },
      },
    },
  })};

  > div {
    ${variant({
      prop: 'iconId',
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
        menu: {
          background: `url(${ic_menu})`,
        },
      },
    })}

    background-size: cover;
  }
`;

const AppIcon = (props: Props) => {
  return (
    <Wrap {...props}>
      <div />
    </Wrap>
  );
};

export default AppIcon;
