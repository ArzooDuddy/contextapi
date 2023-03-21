import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
const { height, width } = Dimensions.get('window')
export default class Flatlistval extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      data: [],
      page: 1
    }
  }
  getData = async () => {
    const apiurl = 'https://portal.ezee.tel/api/centralContactPages?page_size=5&page=2' + this.state.page
    let header = {Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjIwNzBhM2Q2MTA3MGYxNmJhMTkyZjNmYzNmODM5ZjU1NDFkY2FmZTg0YWFmNzJkZGZkOTFiNmNiZGZkNjIxOTNhYTJlNjQzYzJlNzY1NzYiLCJpYXQiOjE2NzQzMDI0NzYuODAwNTk5LCJuYmYiOjE2NzQzMDI0NzYuODAwNjAyLCJleHAiOjE2ODIwNzg0NzYuNjYyMDc1LCJzdWIiOiIxMTU3Iiwic2NvcGVzIjpbXX0.QpErSbuv2AhBY1MzOF7wfdujv4bShBsX8wSC9Syw06wFlQHzF5qUN-RdixcCNJCCJrR6b75-X-XP2gVeMHdNxoYnzZER9lXHK29DVVKcF0HJsA-snVZiNjxJVR5uJrNFYRFwaX8lJecxGJ-NmtAWnggM3qbFA-UG4LdPSpKzWL8__n4FzIwPsj_C9azyUzkbQX4Culx6Ax4wuJHZq6eiUjLjIcg57CLYJxkXmMPJOdmGc-9DkM6rYO8h2MIbXNGtY8SdJwgZwg38cb3RDkERFol-pccYuYXhZUycXWXKiMZySeZmPMoG6i7LXN5KkDzxDicGE8FYro_MyqROECqA9tZGgxytsW7FMXfKyjDJJ2rot0lnnjdpYBcOTd5Qbc3HR-TszHjcg5cB5YKKdqDMjT9XzW1yASL9lL-WzU2APGO28j1sVPI_Jo3-NaqMkQIy7xsMSGR2NlxR8joz5vUtio4Bk7IrVpYi4kot-_N5j-WfPxa6I9juJXFFMiAEFVpfUB5SMSDnpO-viCo1TPGxgGamkJpNemsBhkfO5cZPIXbo5ONfhY7ky0VcpM0ppn90BxLvcSBi_zfNICvKTYYYrMrBbw0sJM6ag7opPBT75ae43y_OhdICh6lJUQdni3VuXvz3w4lAhQ6P0cdDMGsWf70VFs9-wh5iyV1mZTx1Zj8'};
    console.log(header);

    fetch(apiurl, {
      method: 'GET',
      headers: header,
      
    }).then((response) => response.json())
      .then((responsejson) => {
        this.setState({
          data: this.state.data.concat(responsejson)
             })
      })
  }
  componentDidMount() {
    this.setState({ isLoading: true }, this.getData)

  }

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.wraplist}>
        <View style={styles.name}>
        <Text style={styles.nametext}>Name:{item.data.data[0].name}</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.nametext}>Address:{item.data.data[0].address}</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.nametext}>Company.:{item.data.data[0].company}</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.nametext}>Id:{item.data.data[0].id}</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.nametext}>phone no:{item.data.data[0].phone[0].number}</Text>
        </View>
        <View style={styles.name}>
        <Text style={styles.nametext}>phone type:{item.data.data[0].phone[0].number_type}</Text>
        </View>
      </View>
    )
  }

  handleloadmore = () => {
    this.setState({ page: this.state.page + 2 }, this.getData)
  }
  renderFooter = () => {
    return (
      this.state.isLoading ?
        <View style={styles.loader}>
          <ActivityIndicator size='large' />
        </View> : null
    )
  }

  render() {
    return (
      <View style={styles.flalistdata}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={this.handleloadmore}
          onEndReachedThreshold={0}
          ListFooterComponent={this.renderFooter}
          showsVerticalScrollIndicator={false}
        />
      </View>

    );

  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234567'
  },
  header: {
    flex: 1,
    backgroundColor: '#567656',
    justifyContent: 'center'
  },
  buttonvw: {
    height: height * 0.1,
    justifyContent: 'center',
    width: width * 0.8,
    alignSelf: 'center'
  },
  flalistdata: {
    backgroundColor: '#000000'
  },
  wraplist: {
    height: height*0.5,
    backgroundColor: '#21121',
    width: width * 0.9,
    alignSelf: 'center',
  },
  loader: {
    height: height * 0.04,
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name:{
    height:height*0.08,
    width:width*0.9,
    backgroundColor:'#456778',
    justifyContent:'center'
  },
  nametext:{
    fontSize:height/50,
    color:'#ffffff'
  }
})