import Layout from '@src/app/common/components/Layout';
import Process from '@src/app/common/components/Process';
import styled from 'styled-components';

const BlogFrame = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
`;

const Blog = () => {
  return (
    <Process>
      <Layout>
        <BlogFrame src="https://thxtome.github.io/"></BlogFrame>
      </Layout>
    </Process>
  );
};

export default Blog;
