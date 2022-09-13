import Process from '@src/app/common/components/Process';
import VStack from '@src/app/common/components/VStack';
import Img from '@src/app/common/components/Img';
import Typography from '@src/app/common/components/Typography';

import img_profile from '@asset/img/img_profile.png';

import Introduce from '../components/Introduce';
import Career from '../components/Career';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Layout from '@src/app/common/components/Layout';

const ProFile = () => {
  return (
    <Process>
      <Layout>
        <VStack alignItems="center" gap={24}>
          <Img width={'100px'} height={'100px'} src={img_profile}></Img>
          <Typography kind="title1" as="p">
            박종훈
          </Typography>
          <Typography kind="title1" as="p">
            PARK JONG HOON
          </Typography>
          <Typography kind="body3" as="p" color="grey-700">
            주니어 소프트웨어 엔지니어
          </Typography>
        </VStack>
        <Introduce />
        <Career />
        <Skill />
        <Contact />
      </Layout>
    </Process>
  );
};

export default ProFile;
