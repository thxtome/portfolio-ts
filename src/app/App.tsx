//lib
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

//style
import GlobalStyle from '@common/style/globalStyle';
import theme from '@common/style/theme';

//component
import Desktop from '@common/pages/Desktop';
import Program from '@common/components/Program';
import Process from '@src/app/common/components/Process';
import ProFile from './profile/page/Profile';
import Blog from './blog/page';
import Project from './project/page';
import Note from './note/page';
import ContainerQueryContextProvider from './common/context/containerQuery';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerQueryContextProvider breakpoints={[768, 960]}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <GlobalStyle />
            <Desktop />
            <Program id="profile" name="프로필" component={ProFile}></Program>
            <Program id="project" name="프로젝트" component={Project}></Program>
            <Program id="note" name="메모장" component={Note}></Program>
            <Program id="blog" name="블로그" component={Blog}></Program>
          </RecoilRoot>
        </QueryClientProvider>
      </ContainerQueryContextProvider>
    </ThemeProvider>
  );
}

export default App;
