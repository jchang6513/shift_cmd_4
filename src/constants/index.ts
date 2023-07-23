import { StylesConfig } from 'react-select';

export const CAPTURE_DOM_ID = 'capture-dom'

export const DEFAULT_CODE = `import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
`;

export const COLOR_STYLES: StylesConfig<any> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'black',
    border: '2px solid white',
    borderColor: 'white !important',
    borderRadius: '0 6px 6px 0',
    boxShadow: 'none !important',
    cursor: 'pointer',
    outline: 'none',
  }),
  menu: (styles) => ({ ...styles, backgroundColor: 'black', color: 'white' }),
  option: (styles, { isFocused, isSelected }) => {
    const bgColor = isSelected
      ? 'rgba(96, 96, 96, 0.45)'
      : isFocused ? 'rgba(62, 62, 62, 0.45)' : 'transparent'

    return {
      ...styles,
      backgroundColor: bgColor,
      margin: '4px',
      width: 'calc(100% - 8px)',
      ':active': {
        ...styles[':active'],
        backgroundColor: bgColor,
      },
    };
  },
  input: (styles) => ({ ...styles, color: 'white' }),
  singleValue: (styles) => ({ ...styles, color: 'white' }),
}

export * from './language'

export * from './theme'
