import React, { useState, useRef, useEffect } from 'react';
// require("./ripple-min");

const circleInnerProps = {
    id: 'circle1',
    cx: 50,
    cy: 50,
    r: 50 - 2,
    stroke: '#eee',
    strokeWidth: 2,
    fill: 'none',
};

const circleOuterInitProps = {
    id: 'circle2',
    cx: 50,
    cy: 50,
    r: 50 - 5,
    stroke: 'blue',
    strokeWidth: 5,
    fill: 'none',
    strokeDasharray: `0 ${Math.ceil(2 * Math.PI * (50 - 5))}`,
    style: {
        transform: 'rotate(-90deg)',
        transformOrigin: 'center',
    },
};

const textProps = {
    x: '50%',
    y: '50%',
    fill: 'blue',
    style: {
        fontSize: '22px',
        fontWeight: '700',
    },
    alignmentBaseline: 'middle',
    textAnchor: 'middle',
};
// 外圆周长
const perimeter = 2 * Math.PI * circleOuterInitProps.r;

export const Demo1 = ({ initValue = 0 }) => {
    const [rangeValue, setRangeValue] = useState(initValue);
    const [circleOuterProps, setCircleOuterProps] = useState(circleOuterInitProps);
    /**
     * @description 改变圆strokeDasharray
     * @param {*} e
     */
    const onRangeChange = e => {
        const {
            target: { value },
        } = e;
        setRangeValue(value);
        const percent = value / 100;
        const d1 = percent * perimeter;
        const d2 = (1 - percent) * perimeter;
        const strokeDasharray = `${d1} ${d2}`;

        setCircleOuterProps({
            ...circleOuterProps,
            strokeDasharray,
        });
    };

    return (
        <div>
            <div>demo1</div>
            <svg width="100" height="100">
                <circle {...circleInnerProps} />
                <circle {...circleOuterProps} />
                <text {...textProps}>{rangeValue}</text>
            </svg>
            <input onChange={onRangeChange} value={rangeValue} type="range" min="0" max="100" step="0.01" />
        </div>
    );
};

export const Demo2 = () => {
    const ref = useRef(null);

    useEffect(() => {
        // console.log('ref.current :>> ', ref.current);
    }, []);

    return (
        <div>
            demo2
            <br />
            <img
                ref={ref}
                id="img"
                width="200"
                src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png"
                alt=""
            />
        </div>
    );
};

export const Demo3 = () => {
    const [cx1, setCx1] = useState(120);
    const [cx2, setCx2] = useState(400);
    const [r1, setR1] = useState(50);
    const [r2, setR2] = useState(90);
    const [turn, setTurn] = useState(true);

    const onClick = () => {
        const move = document.getElementById('move');
        const scale = document.getElementById('scale');
        if (turn) {
            setCx1(120);
            setCx2(400);
            setR1(50);
            setR2(90);
            move.beginElement();
            scale.beginElement();
            setTurn(false);
        } else {

            setCx1(400);
            setCx2(120);
            setR1(90);
            setR2(50);
            move.beginElement();
            scale.beginElement();
            setTurn(true);
        }
    };

    return (
        <div>
            <div>demo3</div>
            <div>
                <button onClick={onClick}>按钮</button>
            </div>
            <svg width="100%" height="400">
                <circle cx="120" cy="100" r="50" fill="none" stroke="red">
                    <animate
                        id="move"
                        attributeType="XML"
                        attributeName="cx"
                        from={cx1}
                        to={cx2}
                        begin="click"
                        dur="1s"
                        fill="freeze"
                    />
                    <animate
                        id="scale"
                        attributeType="XML"
                        attributeName="r"
                        from={r1}
                        to={r2}
                        begin="click"
                        dur="1s"
                        fill="freeze"
                    />
                </circle>
            </svg>
        </div>
    );
};
