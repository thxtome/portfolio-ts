import styled from 'styled-components';
import { variant, color, overflow } from 'styled-system';
import { css } from '@styled-system/css';
import { TypographyVariants, ColorVariants } from '@common/style/theme';

export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
  kind: TypographyVariants;
  color?: ColorVariants;
  as?: 'p' | 'span';
  pre?: boolean;
  elipsis?: boolean;
}

const pre = css({
  whiteSpace: 'pre-wrap',
});

const elipsis = css({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

const TypographyRoot = styled.span<{
  kind: TypographyVariants;
  color: ColorVariants;
  pre?: boolean;
  elipsis?: boolean;
}>`
  ${variant({ prop: 'kind', scale: 'typographys' })}
  ${color}
  ${props => props.pre && pre}
  ${props => props.elipsis && elipsis}
`;

const Typography = ({ as = 'span', kind, color = 'black', ...props }: TypographyProps) => {
  return <TypographyRoot as={as} kind={kind} color={color} {...props} />;
};

export default Typography;
