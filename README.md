# rn-flashcards
X Platform Mobile Flashcards

The application comes preloaded with 2 decks.

## Usage
1. `yarn install`
2. `yarn start`
3. Follow Expo instructions for running your physical devices or emulators.

Note: `yarn install` will cause Expo to default to `react-navite-debugger`. If you prefer to use the browser debugger, remove line 18 from [`package.json`](https://github.com/luoto/rn-flashcards/blob/master/package.json) or it may cause an error.

## Known Issues
Styles on the iPhone X may not render as expected due to the increased size of the screen.

## Debugging
This project is set up to use [`react-native-debugger`](https://github.com/jhen0409/react-native-debugger), which is integrated with both [React DevTools](https://github.com/facebook/react-devtools) and [Redux DevTools](https://github.com/gaearon/redux-devtools).

To install the debugger for macOS:
`$ brew update && brew cask install react-native-debugger`

## How to Contribute
Contributions in the form of issues and pull requests are welcome and encouraged.

Contributors must follow the [code of conduct](https://github.com/luoto/rn-flashcards/blob/master/code-of-conduct.md).

## License
Copyright 2017 TONY LUO

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
