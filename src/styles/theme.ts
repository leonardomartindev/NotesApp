// theme.ts
export interface Theme {
  body: string;
  secondary: string;
  secondaryText: string;
  text: string;
  contrast: string,
}

export const lightTheme: Theme = {
  body: '#FFFFFF',
  secondary: '#EAEAEA',
  secondaryText: '#626262',
  text: '#121212',
  contrast: '#EAEAEA',
};

export const darkTheme: Theme = {
  body: '#1C1C1C',
  secondary: '#2C2A2B',
  secondaryText: '#D6D6D6',
  text: '#D6D6D6',
  contrast: '#121212',
};
