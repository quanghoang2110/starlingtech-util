import { moneyFormat, numberFormat } from './helper/numberHelper';
import { getHmsFromSeconds } from './helper/timeHelper';
import { isValidEmail } from './helper/validateHelper';
import { showAlertMessage } from './helper/messageHelper';
import {
  formatFileSize,
  getFilename,
  getFilePath,
  formatBytes,
} from './helper/fileHelper';
import {
  titleCase,
  firstCharCase,
  replaceTags,
  removeVietnameseTones,
  getAvatarName,
} from './helper/textHelper';
import { useKeyboard } from './hook/keyboardHook';
import { useRefresh } from './hook/refreshHook';

export {
  titleCase,
  firstCharCase,
  useKeyboard,
  useRefresh,
  moneyFormat,
  numberFormat,
  replaceTags,
  getHmsFromSeconds,
  isValidEmail,
  showAlertMessage,
  formatFileSize,
  getFilename,
  getFilePath,
  removeVietnameseTones,
  getAvatarName,
  formatBytes,
};
