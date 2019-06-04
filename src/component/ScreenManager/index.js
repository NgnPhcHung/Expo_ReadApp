import { createAppContainer, createStackNavigator } from 'react-navigation'
import BookMS from '../../container/OfflineBook'
import Home from '../Content'

///
import CoTich from '../BookContent/OfflineBook/OfflineBookContainer/PDF/CoTich'
import HoiKi from '../BookContent/OfflineBook/OfflineBookContainer/PDF/HoiKi'
import TrinhTham from '../BookContent/OfflineBook/OfflineBookContainer/PDF/TrinhTham'
import LichSu from '../BookContent/OfflineBook/OfflineBookContainer/PDF/LichSu'
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
  HoiKi: {
    screen : HoiKi
  },
  LichSu: {
    screen : LichSu
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