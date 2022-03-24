type AccentColor1 = 'accent';
type AccentColor2 = 'yellow' | 'purple' | 'blue';
type AccentColor3 = '500' | '300' | '100';

type greyColor1 = 'grey';
type greyColor2 = '900' | '700' | '600' | '300' | '200' | '100';
type statesColor1 = 'states';
type statesColor2 = 'alert' | 'error' | 'info' | 'success';

type ColorTheme =
  | `${AccentColor1}.${AccentColor2}.${AccentColor3}`
  | `${AccentColor1}.${AccentColor2}`
  | `${greyColor1}.${greyColor2}`
  | `${statesColor1}.${statesColor2}`
  | 'black'
  | 'white';

export default ColorTheme;
