import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackIcon from './BackButton';
import styles from '../constants/commonStyle';

const HeaderView = ({
    headerTitle,
    headerCalenderMonth,
    headerCalenderYear,
    backToPrevious
}) => {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <Text style={{color: '#000'}}>{headerTitle}</Text>
                <TouchableOpacity>
                    <Text style={{textDecorationLine: 'underline', color: '#000'}}>{'Edit'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.backIconContainer}>
                <TouchableOpacity onPress={backToPrevious} style={[styles.backIcon]}>
                    <BackIcon
                        name={'chevron-left'}
                    />
                </TouchableOpacity>
                <View style={{flexDirection: 'row', gap: 5}}>
                    <Text style={{textDecorationLine: 'underline', color: '#000'}}>{headerCalenderMonth }</Text>
                    <Text style={{color: '#000'}}>{headerCalenderYear}</Text>
                </View>
                <TouchableOpacity disabled style={[styles.backIcon, {opacity: .5}]}>
                    <BackIcon
                        name={'chevron-right'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HeaderView;