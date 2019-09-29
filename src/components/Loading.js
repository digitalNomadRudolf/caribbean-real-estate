import React from 'react';
import { css } from 'emotion';
import { CircleLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
`;

export default function Loading() {
    return (
        <div className="loading">
            <h4>properties are loading...</h4>
            <CircleLoader
               css={override}
               sizeUnit={"px"}
               size={50}
                />
        </div>
    )
}