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
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <Desktop />
          <Program id="profile" name="프로필" component={Process}></Program>
          <Program id="project" name="프로젝트" component={Process}></Program>
          <Program id="guestbook" name="방명록" component={Process}></Program>
          <Program id="blog" name="블로그" component={Process}></Program>
        </RecoilRoot>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
