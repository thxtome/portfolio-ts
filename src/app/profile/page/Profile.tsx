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
import Project from '../components/Project/Project';

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
        </VStack>
        <Contact />
        <Project />
        <Career />
        <Skill />
        <Introduce />
      </Layout>
    </Process>
  );
};

export default ProFile;
