import { createAppContainer, createStackNavigator } from 'react-navigation'
import BookMS from '../../container/OfflineBook'
import Home from '../Content'
import Offline from '../BookContent/OnlineBook'
///

import KindBook from '../BookContent/OfflineBook/KindInfo/KindInfo'
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
  Offline:{
    screen :Offline,
    navigationOptions:{
      header:null
    }
  },
  KindInfo: {
    screen : KindBook
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