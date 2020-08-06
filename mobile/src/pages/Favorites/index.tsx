import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function Favorites() {
    const {navigate} = useNavigation();

    function handleNavigationToGiveClassesPage() {
        navigate('GiveClasses');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Text style={styles.titleBold}>Favoritos</Text>                
            </Text>
        </View>
    );

}

export default Favorites;