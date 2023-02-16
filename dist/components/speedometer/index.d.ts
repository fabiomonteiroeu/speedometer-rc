import React from 'react';
export type SpeedometerProps = {
    children?: React.ReactNode;
    title?: string;
    needleValue?: number;
    needleRotateValue?: number | string;
    needleBgColor?: number | string;
    speedFillValue?: number | string;
    speedFillColor?: number | string;
    speedCoverColor?: number | string;
    loading?: boolean;
    metaValue?: number;
    totalFillValue?: number;
};
export declare function Speedometer({ children, title, needleValue, needleRotateValue, speedFillValue, needleBgColor, speedFillColor, speedCoverColor, metaValue, totalFillValue, loading }: SpeedometerProps): JSX.Element;
export default Speedometer;
