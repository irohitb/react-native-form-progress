import * as React from 'react';
import { View, Dimensions } from 'react-native';
import SafeAreaViewDecider, {
  SafeAreaDeciderProps,
} from 'react-native-smart-statusbar';

export interface ProgressBarProps {
  colorOfProgressBar?: string;
  hideProgressBar?: boolean;
  colorOfNonProgressBar?: string;
  currentProgress: number;
  totalNumberOfProgressBars: number;
  heightOfProgressBar?: number;
  SafeAreaViewDeciderProps?: SafeAreaDeciderProps;
  blink?: boolean;
  durationForTheBlink?: number;
}

const SafeAreaViewDeciderDefaultProps = {
  statusBarHiddenForNotch: false,
  statusBarHiddenForNonNotch: true,
};

const ProgressBar = ({
  currentProgress,
  colorOfNonProgressBar = 'white',
  colorOfProgressBar = 'black',
  heightOfProgressBar = 5,
  SafeAreaViewDeciderProps = SafeAreaViewDeciderDefaultProps,
  totalNumberOfProgressBars,
  blink = true,
  durationForTheBlink = 500,
  hideProgressBar = false,
}: ProgressBarProps) => {
  const width = Dimensions.get('window').width;
  const [blinkVisibility, setBlinkVisiblity] = React.useState(false);
  const blinkInterval: any = React.useRef(null);
  const progressBarArray = [];

  React.useEffect(() => {
    if (blink) {
      const timer = setInterval(() => {
        setBlinkVisiblity((blinkVisibility) => !blinkVisibility);
      }, durationForTheBlink);
      return () => {
        clearInterval(timer);
      };
    }
  }, []);

  if (hideProgressBar) {
    return null;
  }

  const widthOfIndividualBlog = width / totalNumberOfProgressBars;
  const currentProgressValue =
    currentProgress > totalNumberOfProgressBars
      ? totalNumberOfProgressBars
      : currentProgress;

  for (let i = 0; i < totalNumberOfProgressBars + 1; i++) {
    if (i < currentProgressValue) {
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
    } else if (i > currentProgressValue) {
      <View
        style={{
          width: widthOfIndividualBlog,
          height: heightOfProgressBar,
          backgroundColor: colorOfNonProgressBar,
        }}
        key={i}
      ></View>;
    } else if (i === currentProgressValue) {
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
