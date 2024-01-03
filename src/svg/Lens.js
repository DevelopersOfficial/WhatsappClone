import React from 'react';
import {Path, Svg} from 'react-native-svg';

export default function Lens() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20">
      <Path
        d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"></Path>
    </Svg>
  );
}
