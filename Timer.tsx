import * as React from 'react'
import { useState, useEffect } from 'react'

export interface TimerProps {
	durationInSeconds?: number,
	timerId?: any,
	formatted?: boolean,
	showPauseButton?: boolean,
	showResetButton?: boolean,
	isPaused?: boolean,
	onStart?: () => void,
	onPause?: () => void,
	onFinish?: () => void,
	onReset?: () => void,
	onResume?: () => void
}

export const Timer = (props: TimerProps) => {

	const [duration, setDuration] = useState(props.durationInSeconds ?? 0)
	const [paused, setPaused] = useState(false)
	const [firstRender, setFirstRender] = useState(true)

	const resetTimer = () => {
		if (props.onReset) props.onReset()
		setDuration(props.durationInSeconds)
	}

	useEffect(() => {
		if (!firstRender) resetTimer()
	}, [props.timerId, props.durationInSeconds])

	useEffect(() => {
		if (!firstRender) {
			const { onPause, onResume } = props
			paused ? (onPause && onPause()) : (onResume && onResume())
		}
	}, [paused])

	useEffect(() => {
		setPaused(!!props.isPaused)
	}, [props.isPaused])

	useEffect(() => {
		if (props.onStart) props.onStart()
		setFirstRender(false)
	}, [])

	const updateTimer = () => {
		setDuration(duration => duration > 0 ? (duration * 10 - 1) / 10 : duration)
	}

	useEffect(() => {
		if (duration === 0) props.onFinish ? props.onFinish() : null
	}, [duration])

	useEffect(() => {
		let intervalTimeOutId: NodeJS.Timeout
		if (!paused) {
			intervalTimeOutId = setInterval(updateTimer, 100)
		}
		return () => {
			if (intervalTimeOutId) {
				clearInterval(intervalTimeOutId)
			}
		}
	}, [paused])

	const prependZeroIfSingleDigit = (time: string) => (
		time.length === 1 ? '0' + time : time
	)

	const integerDuration = Math.ceil(duration)

	let hours = Math.floor(integerDuration / 3600).toString()
	let minutes = Math.floor((integerDuration / 60) % 60).toString()
	let seconds = Math.floor(integerDuration % 60).toString()


	let formattedTimeString = ''
	formattedTimeString += (hours !== '0') ? hours + 'h ' : ''
	formattedTimeString += (minutes !== '0') ? minutes + 'm ' : ''
	formattedTimeString += seconds + 's '

	hours = prependZeroIfSingleDigit(hours)
	minutes = prependZeroIfSingleDigit(minutes)
	seconds = prependZeroIfSingleDigit(seconds)

	const showFormattedTimer = <span>{formattedTimeString}</span>
	const showUnformattedTimer = <span>{hours}:{minutes}:{seconds}</span>

	const togglePause = () => setPaused(paused => !paused)

	const pauseButtonText = paused ? 'Resume' : 'Pause'

	return (
		<>
			<div className='timer-wrapper'>
				{props.formatted ? showFormattedTimer : showUnformattedTimer}
			</div>
			<div className='buttons-wrapper'>
				{props.showPauseButton ? <button className='pause-button' onClick={togglePause}>{pauseButtonText}</button> : null}
				{props.showResetButton ? <button className='reset-button' onClick={() => resetTimer()}>Reset</button> : null}
			</div>
		</>
	)
}

