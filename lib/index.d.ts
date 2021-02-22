/// <reference types="react" />
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
declare const SafeAreaViewDeciderDefaultProps: {
    statusBarHiddenForNotch: boolean;
    statusBarHiddenForNonNotch: boolean;
};
declare const ProgressBar: ({ defaultProgress, colorOfNonProgressBar, colorOfProgressBar, heightOfProgressBar, SafeAreaViewDeciderProps, totalNumberOfProgressBars, blink, durationForTheBlink, hideProgressBar, }: Props) => JSX.Element | null;
export default ProgressBar;
