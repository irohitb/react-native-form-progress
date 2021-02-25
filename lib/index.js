import * as React from 'react';
import { View, Dimensions } from 'react-native';
import SafeAreaViewDecider from 'react-native-smart-statusbar';
const SafeAreaViewDeciderDefaultProps = {
    statusBarHiddenForNotch: false,
    statusBarHiddenForNonNotch: true,
};
const ProgressBar = ({ defaultProgress, colorOfNonProgressBar = 'white', colorOfProgressBar = 'black', heightOfProgressBar = 5, SafeAreaViewDeciderProps = SafeAreaViewDeciderDefaultProps, totalNumberOfProgressBars, blink = true, durationForTheBlink = 500, hideProgressBar = false, }) => {
    const width = Dimensions.get('window').width;
    const [blinkVisibility, setBlinkVisiblity] = React.useState(false);
    const progressBarArray = [];
    const changeComponentBlinkVisibility = () => {
        setBlinkVisiblity(!blinkVisibility);
    };
    React.useEffect(() => {
        if (blink) {
            setInterval(() => {
                changeComponentBlinkVisibility();
            }, durationForTheBlink);
        }
    }, []);
    if (hideProgressBar) {
        return null;
    }
    const widthOfIndividualBlog = width / totalNumberOfProgressBars;
    const currentProgress = defaultProgress > totalNumberOfProgressBars
        ? totalNumberOfProgressBars
        : defaultProgress;
    for (let i = 0; i < totalNumberOfProgressBars; i++) {
        if (i < currentProgress) {
            progressBarArray.push(React.createElement(View, { style: {
                    width: widthOfIndividualBlog,
                    backgroundColor: colorOfProgressBar,
                    height: heightOfProgressBar,
                }, key: i }));
        }
        else if (i > currentProgress) {
            React.createElement(View, { style: {
                    width: widthOfIndividualBlog,
                    height: heightOfProgressBar,
                    backgroundColor: colorOfNonProgressBar,
                }, key: i });
        }
        else if (i === currentProgress) {
            if (blinkVisibility) {
                progressBarArray.push(React.createElement(View, { style: {
                        width: widthOfIndividualBlog,
                        backgroundColor: colorOfProgressBar,
                        height: heightOfProgressBar,
                    }, key: i }));
            }
        }
    }
    return (React.createElement(View, null,
        React.createElement(SafeAreaViewDecider, Object.assign({}, SafeAreaViewDeciderProps)),
        React.createElement(View, { style: {
                display: 'flex',
                flexDirection: 'row',
                height: heightOfProgressBar,
            } }, progressBarArray)));
};
export default ProgressBar;
