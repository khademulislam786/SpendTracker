import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderView from '../../components/Header';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import SpendCategory from '../../components/SpendCategory';
import * as StaticText from '../../constants/staticText';
import {useSelector, useDispatch} from 'react-redux';
import * as SpendTrackerAction from '../../store/action/spend-tracker-action';

const SpendTrackerScreen = ({navigation}) => {

    const {
        monthlyBudget,
        spentPercent,
        spentCategory,
        monthlySpend, 
        healthAndFitnessPercent,
        beautyPercent,
        clothingPercent,
        cosmeticsPercent
    } = useSelector(state => state.spendTracker);

    const dispatch = useDispatch();

    useEffect(() => {
        onHealthAndFitnessSpend();
    }, [])

    const onMonthlySpendTrack = (budget, spend, category) => {
        const trackMonthlySpend = Math.round((spend * 100) / budget);
        const data = {
            monthlyBudget: budget,
            spentPercent: trackMonthlySpend,
            spentCategory: category,
            monthlySpend: spend,
        }
        dispatch(SpendTrackerAction.onTrackMonthlySpend(data));
    }

    const onHealthAndFitnessSpend = () => {
        const healthAndFitnessBudget = 2000;
        const healthAndFitnessSpend = 600;
        const trackHealthAndFitnessSpend =  Math.round((healthAndFitnessSpend * 100) / healthAndFitnessBudget);
        const data = {
            healthAndFitnessPercent: trackHealthAndFitnessSpend,
        }
        onMonthlySpendTrack(healthAndFitnessBudget, healthAndFitnessSpend, StaticText.Health_Fitness);
        dispatch(SpendTrackerAction.onTrackHealthAndFitnesSpend(data));
    }

    const onBeautySpend = () => {
        const beautyBudget = 600;
        const beautySpend = 300;
        const trackBeautySpend = Math.round((beautySpend * 100) / beautyBudget);
        const data = {
            beautyPercent: trackBeautySpend,
        }
        onMonthlySpendTrack(beautyBudget, beautySpend, StaticText.Beauty);
        dispatch(SpendTrackerAction.onTrackBeautySpend(data));
    }

    const onClothSpend = () => {
        const clothingBudget = 900;
        const clothingSpend = 300;
        const trackClothSpend = Math.round((clothingSpend * 100) / clothingBudget);
        const data = {
            clothingPercent: trackClothSpend,
        }
        onMonthlySpendTrack(clothingBudget, clothingSpend, StaticText.Clothing);
        dispatch(SpendTrackerAction.onTrackClothSpend(data));
    }

    const onCosmeticsSpend = () => {
        const cosmeticsBudget = 1000;
        const cosmeticsSpend = 450;
        const trackCcosmeticsSpend = Math.round((cosmeticsSpend * 100) / cosmeticsBudget);
        const data = {
            cosmeticsPercent: trackCcosmeticsSpend,
        }
        onMonthlySpendTrack(cosmeticsBudget, cosmeticsSpend, StaticText.Cosmetics);
        dispatch(SpendTrackerAction.onTrackCosmaticsSpend(data));
    }

    const backToPrevious = () => {
        navigation.goBack();
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 15}}>
            <HeaderView
                headerTitle={`Spending summary`}
                headerCalenderMonth={`January`}
                headerCalenderYear={`2023`}
                backToPrevious={backToPrevious}
            />
            <View style={innerStyles.mainGraph}>
                <AnimatedCircularProgress
                    size={300}
                    width={10}
                    fill={spentPercent}
                    rotation={270}
                    tintColor="#da7107"
                    backgroundColor="#d5d5d5"
                    arcSweepAngle={180}>
                        {
                            (fill) => (
                                <View style={{justifyContent: 'center', marginBottom: 100, alignItems: 'center'}}>
                                    <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000'}}>{`${spentPercent}%`}</Text>
                                    <Text style={{fontSize: 20, fontWeight: '600', color: '#000'}}>{spentCategory}</Text>
                                </View>
                            )
                        }
                </AnimatedCircularProgress>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={[innerStyles.amountSpend, {fontWeight: '400'}]}>{'Amount spent'}</Text>
                    <Text style={[innerStyles.amountSpend, {fontWeight: '700'}]}>{`ADE ${monthlySpend}`}</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={[innerStyles.amountSpend, {fontWeight: '400'}]}>{'Spending limit'}</Text>
                    <Text style={[innerStyles.amountSpend, {fontWeight: '700'}]}>{`ADE ${monthlyBudget}`}</Text>
                </View>
            </View>
            <View style={innerStyles.categoryRow}>
                <SpendCategory
                    monthlySpendTracker={clothingPercent}
                    progressColor={'#eabd53'}
                    categoryName={StaticText.Clothing}
                    iconName={'seedling'}
                    bgColor={'#f7e7c2'}
                    onCheckSpend={onClothSpend}
                />
                <SpendCategory
                    monthlySpendTracker={beautyPercent}
                    progressColor={'#3d7e83'}
                    categoryName={StaticText.Beauty}
                    iconName={'smile-beam'}
                    bgColor={'#93c7cb'}
                    onCheckSpend={onBeautySpend}
                />
                <SpendCategory
                    monthlySpendTracker={healthAndFitnessPercent}
                    progressColor={'#da7107'}
                    categoryName={StaticText.Health_Fitness}
                    iconName={'hand-holding-heart'}
                    bgColor={'#da7107'}
                    iconColor={'#FFF'}
                    onCheckSpend={onHealthAndFitnessSpend}
                />
            </View>
            <View style={innerStyles.categoryRow}>
                <SpendCategory
                    progressColor={'#78eff7'}
                    categoryName={StaticText.Food}
                    iconName={'blender'}
                    disabled={true}
                    defaultOp={.3}
                />
                <SpendCategory
                    progressColor={'#3d7e83'}
                    categoryName={StaticText.Housing}
                    iconName={'box'}
                    disabled={true}
                    defaultOp={.3}
                />
                <SpendCategory
                    monthlySpendTracker={cosmeticsPercent}
                    progressColor={'#0db4bf'}
                    categoryName={StaticText.Cosmetics}
                    iconName={'brush'}
                    bgColor={'#c6eff2'}
                    onCheckSpend={onCosmeticsSpend}
                />
            </View>
        </View>
    );
}

const innerStyles = StyleSheet.create({

    mainGraph: {
        height: 155,
        marginTop: 10,
        alignItems: 'center',
        alignSelf: 'center'
    },

    categoryRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },

    amountSpend: {
        fontSize: 15,
        color: '#000'
    }
})

export default SpendTrackerScreen;