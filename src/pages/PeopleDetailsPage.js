import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'

export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "anime": props.route.params.anime
        }
    }

    render(){
        return(
            <View style={style.line}>
                 <Text style={style.lineText}>          
                 <h1></h1>
                codigo do motor: 
                <Text> {this.state.anime.show.motor}</Text>
                <h1></h1>
                Link: 
                <Text> {this.state.anime.show.url}</Text>
                <h1></h1>
                modelo: 
                <Text> {this.state.anime.show.modelo}</Text> 
                <h1></h1>
                torque: 
                <Text> {this.state.anime.show.torque}</Text>
                <h1></h1>
                capacidade gasolina: 
                <Text> {this.state.anime.show.tanque}</Text>
                <h1></h1>
                Imagem:                
                <h1></h1>            
                </Text>              
                <img src={this.state.anime.show.image.medium}/>  
                <h1></h1>
            </View>

        )
    }
    
}
const style = StyleSheet.create({
    line: {
        
        borderBottomWidth: 1,
        borderBottomColor: '#ffa',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 20,
        paddingTop: 20,
        backgroundColor: '#696969'
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