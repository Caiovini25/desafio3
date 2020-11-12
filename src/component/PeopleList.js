import React from 'react';
import {View, StyleSheet} from 'react-native'
import PeopleListItem from './PeopleListItem'
 
const PeopleList = props => {
    const {animes, onPressItem} = props
    const items = animes.map(anime => {
          return (
            <PeopleListItem
            anime={anime}  
            onPressItemDetails={onPressItem}        
            />            
          )
        }
      )
    return (
        <View style={style.container}>
            {items}
        </View>
    )
}
 
const style = StyleSheet.create({
    container: {
        backgroundColor: '#696969'
    },
}
)
 
export default PeopleList