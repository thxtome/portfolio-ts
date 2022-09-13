import { useEffect, useState } from 'react';
import styled from 'styled-components';
import getDatetime from '../../helper/getDatetime';
import Typography from '../Typography';
import VStack from '../VStack';

const Wrap = styled(VStack)`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
`;

const Clock = () => {
  const [datetime, setDatetime] = useState(getDatetime());
  useEffect(() => {
    const timeoutKey = setTimeout(() => {
      setDatetime(getDatetime());
    }, 1000);

    return () => {
      clearTimeout(timeoutKey);
    };
  }, []);
  return (
    <Wrap mr={36} p={4} gap={6}>
      <Typography kind="body3" as="p">
        {datetime.time}
      </Typography>
      <Typography kind="body3" as="p">
        {datetime.date}
      </Typography>
    </Wrap>
  );
};

export default Clock;
