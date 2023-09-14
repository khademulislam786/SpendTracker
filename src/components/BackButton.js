import * as React from 'react';
import {View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

const BackIcon = ({name, color="#000", size=20}) => {
    return(
        <View style={{height: 26, width: 26, borderRadius: 8, backgroundColor: '#d5d5d5', justifyContent: 'center'}}>
            <Icon
                name={name}
                style={{ textAlign: 'center', textAlignVertical: 'center' }}
                size={size}
                color={color}
            />
        </View>
    )
}

export default BackIcon;