import * as React from 'react';
import { View, Dimensions } from 'react-native';
import SafeAreaViewDecider from 'react-native-smart-statusbar';

interface Props {
  colorOfProgressBar?: string;
  hideProgressBar?: boolean;
  colorOfNonProgressBar?: string;
  defaultProgress: number;
  totalNumberOfProgressBars: number;
  heightOfProgressBar: number;
  SafeAreaViewDeciderProps?: typeof SafeAreaViewDeciderDefaultProps;
  blink: boolean;
  durationForTheBlink: number;
}

const SafeAreaViewDeciderDefaultProps = {
  statusBarHiddenForNotch: false,
  statusBarHiddenForNonNotch: true,
};

const ProgressBar = ({
  defaultProgress,
  colorOfNonProgressBar = 'white',
  colorOfProgressBar = 'black',
  heightOfProgressBar = 5,
  SafeAreaViewDeciderProps = SafeAreaViewDeciderDefaultProps,
  totalNumberOfProgressBars = 5,
  blink = true,
  durationForTheBlink = 500,
  hideProgressBar = false,
}: Props) => {
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
  const currentProgress =
    defaultProgress > totalNumberOfProgressBars
      ? totalNumberOfProgressBars
      : defaultProgress;

  for (let i = 0; i < totalNumberOfProgressBars; i++) {
    if (i < currentProgress) {
      progressBarArray.push(
        <View
          style={{
            width: widthOfIndividualBlog,
            backgroundColor: colorOfProgressBar,
            height: heightOfProgressBar,
          }}
          key={i}
        ></View>
      );
    } else if (i > currentProgress) {
      <View
        style={{
          width: widthOfIndividualBlog,
          height: heightOfProgressBar,
          backgroundColor: colorOfNonProgressBar,
        }}
        key={i}
      ></View>;
    } else if (i === currentProgress) {
      if (blinkVisibility) {
        progressBarArray.push(
          <View
            style={{
              width: widthOfIndividualBlog,
              backgroundColor: colorOfProgressBar,
              height: heightOfProgressBar,
            }}
            key={i}
          ></View>
        );
      }
    }
  }
  return (
    <View>
      <SafeAreaViewDecider {...SafeAreaViewDeciderProps} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: heightOfProgressBar,
        }}
      >
        {progressBarArray}
      </View>
    </View>
  );
};

export default ProgressBar;
