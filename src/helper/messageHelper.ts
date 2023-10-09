import { Alert } from 'react-native';

type AlertMessageTypes = {
  title?: string;
  message: string;
  onPress?: () => void;
  positiveTitle?: string;
  positiveOnPress?: (...params: any) => void;
  negativeTitle?: string;
  negativeOnPress?: (...params: any) => void;
  cancelable?: boolean;
};

// let alertMessageOnShowing = false;

export function showAlertMessage(props: AlertMessageTypes) {
  const {
    title,
    message,
    onPress,
    positiveTitle: pPositiveTitle,
    positiveOnPress,
    negativeTitle: pNegativeTitle,
    negativeOnPress,
    cancelable = false,
  } = props;
  const positiveTitle = pPositiveTitle || 'OK';
  let buttonOptions = [{ text: positiveTitle, onPress: positiveOnPress }];
  if (onPress) {
    buttonOptions = [{ text: positiveTitle, onPress }];
  } else if (positiveOnPress || negativeOnPress) {
    const negativeTitle = pNegativeTitle || 'Cancel';
    buttonOptions = [
      {
        text: negativeTitle,
        onPress: negativeOnPress,
      },
      {
        text: positiveTitle,
        onPress: positiveOnPress,
      },
    ];
  } else {
    buttonOptions = [{ text: positiveTitle, onPress: positiveOnPress }];
  }
  Alert.alert(title || '', message, buttonOptions, {
    cancelable,
  });
  // alertMessageOnShowing = true;
}
