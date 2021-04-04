import React, {useRef} from 'react';
import {useHover} from "./UseHover";

export default {
    title: 'Hooks/Hover'
}

export const Hover = () => {

    const ref = useRef()
    const ref1 = useRef()
    const isHovering = useHover(ref)
    const isHovering1 = useHover(ref1)

    console.log(isHovering)

    return (
        <>
            <div ref={ref} style={{width: 200, height: 200, background: isHovering ? "blue" : 'yellow'}}>
            </div>
            <div ref={ref1} style={{width: 200, height: 200, background: isHovering1 ? "white" : 'red'}}>
            </div>
        </>
    )
}