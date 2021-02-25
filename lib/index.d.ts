/// <reference types="react" />
import { SafeAreaDeciderProps } from 'react-native-smart-statusbar';
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
declare const ProgressBar: ({ currentProgress, colorOfNonProgressBar, colorOfProgressBar, heightOfProgressBar, SafeAreaViewDeciderProps, totalNumberOfProgressBars, blink, durationForTheBlink, hideProgressBar, }: ProgressBarProps) => JSX.Element | null;
export default ProgressBar;
