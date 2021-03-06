import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, FlatList, TextInput, Alert, Keyboard } from 'react-native'
import activitiesActions from '../redux/actions/activitiesActions'
import itinerariesActions from '../redux/actions/itinerariesActions'
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Activities = (props) => {

    const [activities, setActivities] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        async function getActivitiesOfItinerary() {
            try {
                let response = await props.getActivitiesOfItinerary(props.route.params.id)
                setActivities(response)

            } catch (error) {
                console.log(error)
            }
        }
        getActivitiesOfItinerary()
    }, [])

    useEffect(() => {
        async function getComments() {
            try {
                let response = await props.getComments(props.route.params.id)
                setComments(response.response[0].comments)

            } catch (error) {
                console.log(error)
            }
        }
        getComments()
    }, [])

    const inputFilterHandler = (value) => {
        console.log(value)
    }

    return (
        
        <View style={styles.container}>
            <View style={styles.containerSize}>
                <View style={styles.containerCarousel}>
                    <Swiper >
                        {activities.map((activity, index) => {
                            return  <View style={styles.slide1} key={index}><ImageBackground source={{ uri: activity.activityPhoto }} style={styles.slideImg} resizeMode='cover'><Text style={styles.slideText}>{activity.activityTitle}</Text></ImageBackground></View>
                        })}
                    </Swiper>
                </View>
                <KeyboardAwareScrollView style={{ flex: 1 }}>
                    <View style={styles.containerComments}>
                        <View style={styles.commentsBox}>
                            <FlatList 
                                data={comments}
                                keyExtractor={( comment ) => comment.commentId }
                                renderItem={( comment ) => {
                                    return (
                                    <View style={styles.commentLine} >
                                        <View style={styles.userPhoto}>
                                            <Image source={{ uri: comment.item.userPhoto }} style={styles.userPhotoCircle} resizeMode='cover' />
                                        </View>
                                        <View style={styles.userNameComment} >
                                            <Text style={styles.userName}>{comment.item.userName}</Text>
                                            <Text style={styles.userComment}>{comment.item.userComment}</Text>
                                        </View>
                                    </View>
                                    )
                                }}
                            />
                        </View>
                        <View style={styles.commentBox}>
                            <TextInput 
                                style={styles.textInput}
                                onFocus={() => Alert.alert('You must be logged in to post a comment')}
                                onChangeText={inputFilterHandler}
                                placeholder="Your comment here" 
                                KeyboardType={null} />
                        </View>                        
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        itinerariesList: state.itineraries.itinerariesOfACityStore
    }
}

const mapDispatchToProps = {
    getActivitiesOfItinerary: activitiesActions.getActivitiesOfItinerary,
    getComments: itinerariesActions.getComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerSize: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    containerCarousel: {
        backgroundColor: 'lightblue',
        width: '100%',
        height: '30%',
        paddingTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: '100%',
        height: 30,
        marginVertical: 15,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }, 
    slide1: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    slideImg: {
        width: '100%',
        height: '100%',
    }, 
    slideText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 12
    },


    containerComments: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 12,
    },
    commentsBox: {
        width: '95%',
        height: '70%',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        justifyContent: 'flex-start',
        padding: 6
    },
    commentLine: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    userPhoto: {
        width: '23%',
        height: '100%',
    },
    userPhotoCircle: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    userNameComment: {
        width: '75%',
        height: '100%',
        justifyContent: 'space-around',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,

    },
    userName: {
        width: '100%',
        height: '35%',
        fontSize: 20,
        paddingHorizontal: 10,
        paddingTop: 2,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    userComment: {
        width: '100%',
        height: '65%',
        fontSize: 22,
        paddingHorizontal: 10,
        paddingTop: 2,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },  
    commentBox: {
        width: '95%',
        backgroundColor: 'white',
        borderWidth: 1, 
        borderColor: 'gray',
        borderRadius: 5,
        marginTop: 20,
    },
    textInput: {
        fontSize: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,

    }




})
