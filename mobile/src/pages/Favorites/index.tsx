import React, { useState, useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    function LoadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        })
    }

    useFocusEffect(()=>{
        LoadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal:16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher:Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher} 
                            favorited
                        />)
                })}
            </ScrollView>
        </View>
    );

}

export default Favorites;