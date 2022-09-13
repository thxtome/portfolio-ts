import { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import useContainerQuery from '../../hooks/useContainerQuery';
import VStack from '../VStack';

const Container = styled(VStack)<{ hasBorder: string }>`
  ${props => props.hasBorder && `border: 1px solid  ${props.theme.colors['grey-300']}`};
  border-radius: 5px;
`;

const Section = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const hasBorder = useContainerQuery(ref, [false, true, true]);

  return (
    <Container gap={36} pt={36} pb={36} pl={24} pr={24} ref={ref} hasBorder={hasBorder}>
      {children}
    </Container>
  );
};
export default Section;
