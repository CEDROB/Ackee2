import produce from 'immer'

import {
	SET_FILTER_SORTING,
	SET_FILTER_RANGE,
	SET_FILTER_INTERVAL,
	SET_FILTER_VIEWS_TYPE
} from '../actions'

import { SORTINGS_TOP } from '../../../constants/sortings'
import { RANGES_LAST_7_DAYS } from '../../../constants/ranges'
import { INTERVALS_DAILY } from '../../../constants/intervals'
import { VIEWS_TYPE_UNIQUE } from '../../../constants/views'

export const initialState = () => ({
	sorting: SORTINGS_TOP,
	range: RANGES_LAST_7_DAYS,
	interval: INTERVALS_DAILY,
	viewsType: VIEWS_TYPE_UNIQUE
})

export default produce((draft, action) => {

	switch (action.type) {
		case SET_FILTER_SORTING:
			draft.sorting = action.payload
			break
		case SET_FILTER_RANGE:
			draft.range = action.payload
			break
		case SET_FILTER_INTERVAL:
			draft.interval = action.payload
			break
		case SET_FILTER_VIEWS_TYPE:
			draft.viewsType = action.payload
			break
	}

}, initialState())