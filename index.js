import React, {PureComponent} from 'react'
import {Text, View, StatusBar, Dimensions} from 'react-native'
import PropTypes from 'prop-types'
import SafeAreaViewDecider from './../elements/SafeAreaDecider'

class ProgressBar extends PureComponent {
	constructor(props) {
		super(props)
		this.width = Dimensions.get('window').width
		this.height = Dimensions.get('window').height
	}

	state = {
		blinkComponentVisibility: false
	}

	blink() {
		this.setState({blinkComponentVisibility: !this.state.blinkComponentVisibility})
	}

	componentDidMount = () => {
		const {blink, durationForTheBlink} = this.props
		if (blink)
			setInterval(() => {
				this.blink()
			}, durationForTheBlink)
	}

	render() {
		const progressBarArray = []
		const {
			colorOfProgressBar,
			totalNumberOfProgressBars,
			heightOfProgressBar,
			SafeAreaViewDeciderProps,
			colorOfNonProgressBar,
			hideProgressBar
		} = this.props
		if (hideProgressBar) return (<> </>)
		const widthOfIndividualBlog = this.width / totalNumberOfProgressBars
		let {currentProgress} = this.props
		if (currentProgress > totalNumberOfProgressBars) currentProgress = totalNumberOfProgressBars
		for (let i = 0; i < totalNumberOfProgressBars; i++) {
			if (i < currentProgress) {
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
			} else if (i > currentProgress) {
				<View
					style={{
						width: widthOfIndividualBlog,
						height: heightOfProgressBar,
						backgroundColor: colorOfNonProgressBar
					}}
					key={i}
				></View>
			} else if (i === currentProgress) {
				if (this.state.blinkComponentVisibility) {
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
			}
		}
		return (
			<View>
				<SafeAreaViewDecider {...SafeAreaViewDeciderProps} />
				<View style={{display: 'flex', flexDirection: 'row', height: heightOfProgressBar}}>{progressBarArray}</View>
			</View>
		)
	}
}

ProgressBar.propTypes = {
	colorOfProgressBar: PropTypes.string,
	hideProgressBar: PropTypes.bool,
	colorOfNonProgressBar: PropTypes.string,
	currentProgress: PropTypes.number.isRequired,
	totalNumberOfProgressBars: PropTypes.number.isRequired,
	heightOfProgressBar: PropTypes.number.isRequired,
	SafeAreaViewDeciderProps: PropTypes.object,
	blink: PropTypes.bool,
	durationForTheBlink: PropTypes.number
}

ProgressBar.defaultProps = {
	colorOfNonProgressBar: 'white',
	colorOfProgressBar: 'black',
	heightOfProgressBar: 5,
	SafeAreaViewDeciderProps: {
		statusBarHiddenForNotch: false,
		statusBarHiddenForNonNotch: true
	},
	totalNumberOfProgressBars: 5,
	blink: true,
	durationForTheBlink: 500, 
	hideProgressBar: false
}

export default ProgressBar
