import styled from 'styled-components';
import { variant, color } from 'styled-system';
import { TypographyVariants, ColorVariants } from '@common/style/theme';

export interface TypographyProps extends React.HTMLAttributes<HTMLSpanElement | HTMLParagraphElement> {
  kind: TypographyVariants;
  color?: ColorVariants;
  as?: 'p' | 'span';
}

const TypographyRoot = styled.span<{ kind: TypographyVariants; color: ColorVariants }>`
  ${variant({ prop: 'kind', scale: 'typographys' })}
  ${color}
`;

const Typography = ({ as = 'span', kind, color = 'black', ...props }: TypographyProps) => {
  return <TypographyRoot as={as} kind={kind} color={color} {...props} />;
};

export default Typography;
