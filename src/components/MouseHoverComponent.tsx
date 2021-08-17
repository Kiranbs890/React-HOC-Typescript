import React from 'react';
import {withHoverHOC} from './withHoverHOC';

function MouseHoverComponent(props: any) {
    const { textColor, textHover, ...divProps } = props;
    return (
        <div>
            <h2 {...divProps} style={{ color: textColor }}>Mouse {textHover ? 'Over' : 'Out'}</h2>
        </div>
    )
}

export default withHoverHOC(MouseHoverComponent);