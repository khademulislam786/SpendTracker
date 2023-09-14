import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../constants/commonStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const SpendCategory = ({
    monthlySpendTracker=0,
    progressColor,
    categoryName,
    iconName,
    disabled=false,
    defaultOp= 1,
    bgColor=progressColor,
    iconColor=progressColor,
    onCheckSpend
}) => {
    return (
        <TouchableOpacity disabled={disabled} style={{opacity: defaultOp}} onPress={onCheckSpend}>
            <View style={{height: 65, marginTop: 10, alignItems: 'center', alignSelf: 'center'}}>
                <AnimatedCircularProgress
                    size={60}
                    width={3}
                    fill={monthlySpendTracker}
                    rotation={270}
                    style={{backgroundColor: bgColor, borderRadius: 30}}
                    tintColor={progressColor}>
                        {
                            (fill) => (
                                <Icon
                                    name={iconName}
                                    style={{ textAlign: 'center', textAlignVertical: 'center' }}
                                    size={30}
                                    color={iconColor}
                                />
                            )
                        }
                </AnimatedCircularProgress>
            </View>
            <Text style={{color: '#000', fontSize: 12, fontWeight: '600', textAlign: 'center'}}>{categoryName}</Text>
        </TouchableOpacity>
    );
}

export default SpendCategory;