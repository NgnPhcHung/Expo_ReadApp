import { createAppContainer, createStackNavigator } from 'react-navigation'
import BookMS from '../../container/OfflineBook'
import Home from '../Content'

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
  },
  KindInfo: {
    screen : KindBook
  },
  BookInfor:{
    screen: BookInfor
  },
  BookView : {
    screen : BookView
  }
},
  {
    initialRouteName: 'Home'
  },
)
export default createAppContainer(RootStack);