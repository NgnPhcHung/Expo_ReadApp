import { createAppContainer, createStackNavigator } from 'react-navigation'
import BookMS from '../../container/OfflineBook'
import Home from '../Content'

///
import CoTich from '../BookContent/OfflineBook/OfflineBookContainer/PDF/CoTich'
import TrinhTham from '../BookContent/OfflineBook/OfflineBookContainer/PDF/TrinhTham'
import TieuThuyet from '../BookContent/OfflineBook/OfflineBookContainer/PDF/TieuThuyet'
import KhoaHoc from '../BookContent/OfflineBook/OfflineBookContainer/PDF/KhoaHoc'
import SucKhoe from '../BookContent/OfflineBook/OfflineBookContainer/PDF/SucKhoe'
import VanHoa from '../BookContent/OfflineBook/OfflineBookContainer/PDF/VanHoa'
import VanHocVN from '../BookContent/OfflineBook/OfflineBookContainer/PDF/VanHocVietNam'


const RootStack = createStackNavigator ({
  Home: {
    screen: Home
  },
  Details : {
    screen: BookMS
  },
  CoTich: {
    screen : CoTich
  },
  TrinhTham: {
    screen : TrinhTham
  },
  TieuThuyet: {
    screen : TieuThuyet
  },
  KhoaHoc: {
    screen : KhoaHoc
  },
  SK: {
    screen : SucKhoe
  },
  VanHoa: {
    screen : VanHoa
  },
  VHVN: {
    screen : VanHocVN
  },
},
  {
    initialRouteName: 'Home'
  }
)
export default createAppContainer(RootStack);