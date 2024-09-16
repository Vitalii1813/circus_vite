import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default function ProfileIcon() {
  return (
    <Svg width="100" height="80" viewBox="0 0 28 28" fill="none">
      {/* Овал обличчя */}
      
      {/* Овал для голови */}
      <Path
        d="M12,8 C10.343,8 9,9.343 9,11 C9,12.657 10.343,14 12,14 C13.657,14 15,12.657 15,11 C15,9.343 13.657,8 12,8 Z"
        fill="white"
      />

      {/* Тіло та нижня частина */}
      <Path
        d="M18,20 C18,17.7909 16.2091,16 14,16 H10 C7.79086,16 6,17.7909 6,20 L18,20 Z"
        fill="white"
      />
    </Svg>
  );
}