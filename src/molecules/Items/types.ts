import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/types';

type ScreenANavigationProp = NavigationProp<RootStackParamList, 'UserList'>;
export interface ItemsProps {
  navigation: ScreenANavigationProp;
  item: {
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
    id: number;
  };
}
