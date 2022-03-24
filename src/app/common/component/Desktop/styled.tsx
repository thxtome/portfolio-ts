//lib
import styled from 'styled-components';

//asset
import wallpaperImg from '@asset/img/wallpaper.jpg';

export const StyledDesktop = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('${wallpaperImg}');
  background-size: cover;
`;
