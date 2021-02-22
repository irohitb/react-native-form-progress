|  | Status |
| - | - |
| Dependencies | [![Dependencies](https://img.shields.io/david/blendtale/react-native-form-progress)](https://david-dm.org/blendtale/react-native-form-progress) [![Dev dependencies](https://img.shields.io/david/dev/blendtale/react-native-form-progress)](https://david-dm.org/blendtale/react-native-form-progress) [![Peer dependencies](https://img.shields.io/david/peer/blendtale/react-native-form-progress)](https://david-dm.org/blendtale/react-native-form-progress)|
| Package | [![npm package version](https://img.shields.io/npm/v/react-native-form-progress)](https://www.npmjs.com/package/react-native-form-progress) [![npm downloads](https://img.shields.io/npm/dt/react-native-form-progress)](https://www.npmjs.com/package/react-native-form-progress) ![Type definitions](https://img.shields.io/badge/types-TypeScript-blue.svg)

# React Native Form progress 

A react native component super useful in displaying progress when user is filling up forms like signup page, setting, information catering etc

### Note
- If you find this repo interesting do not forgot to give it a star. 
- If you have a feature request than open it on github and feature should be added within 2-7 days (author of the repo would keep you updated)
- If you find a bug, open an issue on github and author would fix it less than 24 hours

## Installing 


```
npm i react-native-device-info
npm i react-native-form-progress
```

#### For IOS 

```
cd ios
pod install
``` 

for people using RN <= 0.59, please read the installation instruction from `react-native-device-info` [repo](https://github.com/react-native-community/react-native-device-info)



### Using 

```import ProgressBar from react-native-form-prorgress```

And then 

```
	<ProgressBar 
					defaultProgress={7} 
					totalNumberOfProgressBars={8}
					colorOfProgressBar="#2E7D32"
					 />
```

and just keep incrementing current progress 

### Working GIFS 

### With blink 

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/32276134/64683540-1180fd00-d4a1-11e9-9711-c87b2905b8d4.gif)

###  Props 

| **Prop** | **Type** | **Default** | **Required** | **description** |
|----------|----------|-------------|--------------|--------------|
| hideProgressBar | Boolean | false | No | hides progress bar ( returns auxilary component)
| colorOfProgressBar | string | 'black' | No | What Color do you want your progress bar to have 
| colorOfNonProgressBar | string | 'white' | No | the space progress bar is yet to take |
| defaultProgress | number | none | Yes | the current progress of your progress bar, **increment this value** on sucessful completion of event |
| totalNumberOfProgressBars | number | none | Yes | Typical this determines how many boxes should progress bar have in all together | 
| heightOfProgressBar | number | 5 | No | what should be the height of your progress bar |
| SafeAreaViewDeciderProps | object |  See below | No | Takes [SafeAreaViewDeciderProps](https://www.npmjs.com/package/react-native-form-progress) Props as an object |
| 	blink | boolean | true | No | Do you wan the progress bar to blink or not | 
|   durationForTheBlink | false | 500 | No | how fast you want the blink to happen

### Props for Safe Area 

Pass Safe Area props like this 

```
	SafeAreaViewDeciderProps: {
		statusBarHiddenForNotch: false,
		statusBarHiddenForNonNotch: false,
	},
  ```

  Default value for Safe Area are 

```
statusBarHiddenForNotch: false,
statusBarHiddenForNonNotch: false,
```
