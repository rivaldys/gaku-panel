import type { AppDispatch, RootState } from 'gaku/services/store'
import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export * from './useEventListener'
export * from './useForm'
export * from './useIntersectionObserver'
export * from './useNetworkStatus'