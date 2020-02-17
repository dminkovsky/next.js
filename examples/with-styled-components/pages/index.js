import React from 'react';
import styled, {css} from 'styled-components';

export default function() {
    return (
        <div>
            <ComposeButton1 />
            <ComposeButton2 />
        </div>
    );
}

function composeButton(css) {
    const Root = styled.div`
        cursor: pointer;
        touch-action: none;
        ${css};
    `;
    return function() {
        return <Root>Compose</Root>;
    };
}

const ComposeButton1 = composeButton(
    `
        user-select: none;
        transform: translateX(-3px);
        display: inline-block;
        padding: 12px 20px;
        border: 1px solid #dcdcdc;
        background-color: #fff;
        border-radius: 40px;
        color: #222;
        font-size: 16px;
        line-height: 1.75;
        letter-spacing: 0.2px;
    `,
);

const ComposeButton2 = composeButton(
    `
        display: block;
        height: 36px;
        padding: 10px 16px;
        font-size: 14px;
        font-weight: bold;
        height: 31px;
        width: 36px;
        position: relative;
        color: #025aa5;
    `,
);
