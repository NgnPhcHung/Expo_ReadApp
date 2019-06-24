import { createAppContainer, createStackNavigator } from 'react-navigation'
import BookMS from '../BookContent/OfflineBook/index'
import Home from '../../container/Content'
import About from '../../container/About'
import Note from '../../container/Note'
///

import KindBook from '../../container/KindInf'
import BookInfor from '../BookContent/OfflineBook/BookInfo/BookInfo'
import BookView from '../BookContent/OfflineBook/BookInfo/BookView'
const RootStack = createStackNavigator ({
  Home: {
    screen: Home,
    navigationOptions:{
      header:null
    }
  },
  Details : {
    screen: BookMS,
    navigationOptions:{
      header:null
    }
  },
  About: {
    screen:About,
    navigationOptions:{
      header:null
    }
  },
  Note: {
    screen:Note,
    navigationOptions:{
      header:null
    }
  },
  KindInfo: {
    screen : KindBook,
    navigationOptions:{
      header:null
    }
  },
  BookInfor:{
    screen: BookInfor
  },
  BookView : {
    screen : BookView,
    navigationOptions:{
      header:null
    }
  }
},
  {
    initialRouteName: 'Home'
  },
)
export default createAppContainer(RootStack);