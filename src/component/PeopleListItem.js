import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import Avatar from '@material-ui/core/Avatar';


const PeopleListItem = props => {
    const {anime, onPressItemDetails} = props  
    return(
        <TouchableOpacity onPress={() => {
            onPressItemDetails(anime)
        }} >
            <View style={style.line}>
            <Avatar img src={anime.show.image.medium}/>                      
                <Text style={style.lineText}>
                {anime.show.name}                             
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
        line: {
            height:60,
            borderBottomWidth: 1,
            borderBottomColor: '#bbb',
            alignItems: 'center',
            flexDirection: 'row'
        },
        avatar: {
            aspectRatio: 1,
            marginLeft: 10,
            flex: 1,
            borderRadius: 50
        },
        lineText: {
            fontSize: 20,
            paddingLeft: 20,
            flex: 7
        }
    }
)
export default PeopleListItem













