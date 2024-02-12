import React from 'react';
import { Text } from 'react-native';

interface TextStyleProps {
    children: React.ReactNode;
    fontSize?: number;
    color?: string;
    fontWeight?:
        | 'normal'
        | 'bold'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900';
}

const TextStyle = ({
    children,
    fontSize,
    color,
    fontWeight,
}: TextStyleProps) => {
    return <Text style={[{ fontSize, color, fontWeight }]}>{children}</Text>;
};

export default TextStyle;
