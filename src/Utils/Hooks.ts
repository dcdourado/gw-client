import { useSelector } from 'react-redux';

import { RootState } from '../Store';

export function useStateSelector() {
  return useSelector((state: RootState) => state);
}
