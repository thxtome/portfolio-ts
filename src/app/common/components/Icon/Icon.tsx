import styled from 'styled-components';
import HStack from '@common/components/HStack';

interface Props {
  icon: string;
  size: number;
  onClick?: () => void;
}

const Container = styled(HStack)<Props>`
  justify-content: center;
  align-items: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  padding: 3px;
  cursor: pointer;

  > div {
    width: 20px;
    height: 20px;
    background: url(${props => props.icon});
    background-size: cover;
  }
`;

const Icon = (props: Props) => {
  return (
    <Container {...props}>
      <div />
    </Container>
  );
};

export default Icon;
