import { createNavigationContainerRef } from '@react-navigation/native';
import { AppStackParamList } from '../../interfaces/navigation/routeParams';

export const navigationRef = createNavigationContainerRef<AppStackParamList>();

export const navigate = (route: string, params?: any, attempt = 0): void => {
  if (navigationRef.isReady()) {
  } else if (attempt < 5) {
    setTimeout(() => navigate(route, params, attempt + 1), 200);
  } else {
    console.warn(`Navigation is still not ready after ${attempt} attempts`);
  }
};
