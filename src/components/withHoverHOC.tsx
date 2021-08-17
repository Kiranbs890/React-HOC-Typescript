import React, { useState } from 'react';

type InfoType = {
    textHover: boolean;
    textColor: string;
    onMouseOver(): void;
    onMouseLeave(): void;
    onClick(): void;
  };

  export function withHoverHOC<P>(
    WrappedComponent: React.ComponentType<InfoType>
  ) {
    const WithHover = (props: P) => {
        const [textHover, setHover] = useState(false);
        const [textColor, setTextColor] = useState('#888');
        return <WrappedComponent
        textColor={textColor}
        textHover={textHover}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setTextColor('red')} />
    };
    return WithHover;
  }