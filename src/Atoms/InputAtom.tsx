import React from 'react';
import { View, TextInput } from 'react-native';
import { colors } from '../Styles/Colors';
import '../Styles/label.css';

interface Props {
    onChange: ((text: string) => void) | undefined;
    value: string;
}

const InputAtom: React.FC<Props> = ({ onChange, value }) => {
    return (
        <View style={{}}>
            <TextInput
            onChangeText={onChange}
            value={value}
            style={{
                fontSize: 14,
                fontFamily: 'Muli',
                backgroundColor: colors.transparent,
                color: colors.black,
                height: 50,
                width: 220,
                paddingBottom: 3
            }}
            />
        </View>
    )
}

export default InputAtom;
