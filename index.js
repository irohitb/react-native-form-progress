import React, {PureComponent} from 'react'
import {Text, View, StatusBar, Dimensions} from 'react-native'
import PropTypes from 'prop-types'
import SafeAreaViewDecider from 'react-native-smart-statusbar'

class ProgressBar extends PureComponent {
	constructor(props) {
		super(props)
		this.width = Dimensions.get('window').width
		this.height = Dimensions.get('window').height
	}

	render() {
		const progressBarArray = []
		const {
			colorOfProgressBar,
			totalNumberOfProgressBars,
			heightOfProgressBar,
			SafeAreaViewDeciderProps
		} = this.props
		const widthOfIndividualBlog = this.width / totalNumberOfProgressBars
		let {currentProgress} = this.props
		if (currentProgress > totalNumberOfProgressBars) currentProgress = totalNumberOfProgressBars
		for (let i = 0; i < totalNumberOfProgressBars; i++) {
			progressBarArray.push(
				<View
					style={{
						width: widthOfIndividualBlog,
						backgroundColor: colorOfProgressBar,
						height: heightOfProgressBar
					}}
					key={i}
				></View>
			)
		}
		return (
			<View>
				<SafeAreaViewDecider {...SafeAreaViewDeciderProps} />
				<View style={{display: 'flex', flexDirection: 'row'}}>{progressBarArray}</View>
			</View>
		)
	}
}

ProgressBar.propTypes = {
	colorOfProgressBar: PropTypes.string,
	currentProgress: PropTypes.number,
	totalNumberOfProgressBars: PropTypes.number.isRequired,
	heightOfProgressBar: PropTypes.number.isRequired,
	SafeAreaViewDeciderProps: PropTypes.object
}

ProgressBar.defaultProps = {
	currentProgress: 0,
	colorOfProgressBar: 'black',
	heightOfProgressBar: 10,
	SafeAreaViewDeciderProps: {
		statusBarHiddenForNotch: false,
		statusBarHiddenForNonNotch: true
	}
}

export default ProgressBar
