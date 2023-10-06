import { appSize } from '@vn.starlingTech/config/AppConstant'

export function getSvgSize(
  width: number,
  height: number,
  newWidth?: string | number,
) {
  return {
    width: newWidth !== undefined ? appSize(Number(newWidth)) : appSize(width),
    height:
      newWidth !== undefined
        ? appSize((Number(newWidth) * height) / width)
        : appSize(height),
  }
}
