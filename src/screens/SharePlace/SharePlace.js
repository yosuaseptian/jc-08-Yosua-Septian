import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'

import { addPlace, createData } from '../../store/actions/index'
import {Fire} from '../../firebase/index'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import PlaceInput from '../../components/PlaceInput/PlaceInput'

import AgeInput from '../../components/AgeInput/AgeInput'
import JabatanInput from '../../components/JabatanInput/JabatanInput'

class SharePlaceScreen extends Component {
    state = {
        nama : '',
        usia: '',
        jabatan: '',
        error: ''
    }

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress'){
            if (event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    namaChangedHandler = (val) => {
        this.setState({
            nama: val
        })
    }

    usiaChangedHandler = (val) => {
        this.setState({
            usia: val
        })
    }

    jabatanChangedHandler = (val) => {
        this.setState({
            jabatan: val
        })
    }

    // showData = items => {
    //     var arrData = []
    //     var rawData = items.val()

    //     Object.keys(rawData).forEach(id => {
    //         arrData.push({
    //             key: id,
    //             value: rawData[id].name,
    //             image: {
    //                 uri: "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
    //             }
    //         })
    //     })

    // }

    placeAddedHandler = () => {
        

        const places = Fire.database().ref(`dataKariawan`)
        if(this.state.nama.trim() === '' || this.state.usia.trim() === '' || this.state.jabatan.trim() === '') {
            this.setState({error: 'All Column must be filled'})
            setTimeout(() => {
                this.setState({error: ''})
            }, 3000);
        }else if (!parseInt(this.state.usia)){
            this.setState({error: 'usia must number'})
            setTimeout(() => {
                this.setState({error: ''})
            }, 3000);
        }else {
            // input data ke firebase
            // console.log([this.state.nama, this.state.usia, this.state.jabatan])
            places.push({
                nama: this.state.nama,
                usia: this.state.usia,
                jabatan: this.state.jabatan
            }).then(res => {
                // ambil semua data di firebase, lempar ke redux
                places.once('value', this.props.onCreateData, (err)=>{console.log(err)})
                this.setState({nama:"", usia: "", jabatan: "", error: "Input Success >.<" });
                setTimeout(() => {
                  this.setState({error: "" });
                }, 3000);
            })
        }
    }

    errorHandler = () => {
        if(this.state.error) {
            return (
                <Text>{this.state.error}</Text>
            )
        }else {
            return null
        }
    }

    render () {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Input Data Karyawan</HeadingText>
                    </MainText>
                    <PlaceInput
                        holder = "Nama"
                        placeName = {this.state.nama}
                        onChangeText = {this.namaChangedHandler}
                    />
                    <AgeInput
                        holder = "Usia"
                        placeName = {this.state.usia}
                        onChangeText = {this.usiaChangedHandler}
                    />
                    <JabatanInput
                        holder = "Jabatan" 
                        placeName = {this.state.jabatan}
                        onChangeText = {this.jabatanChangedHandler}
                    />
                    <Button title='Input' onPress={this.placeAddedHandler}/>
                    {this.errorHandler()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },
    button: {
        margin: 8,
        marginBottom: 10
    },
    previewImage: {
        width: '100%',
        height: '100%'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: placeName => dispatch(addPlace(placeName)),
        onCreateData: items => dispatch(createData(items))
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.user.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen)