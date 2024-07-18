import { Dimensions } from 'react-native';

// 가이드라인 사이즈는 표준 "~5" 화면 모바일 장치를 기준으로 합니다.
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// 뷰포트기반
const scale = (size: number) => (width / guidelineBaseWidth) * size;

// 높이기반
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

// factor값 제어
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };

const basicDimensions = {
  width: 360,
  height: 800,
};

const width: any = (
  Dimensions.get('screen').width *
  (1 / basicDimensions.width)
).toFixed(2);

const height: any = (
  Dimensions.get('screen').height *
  (1 / basicDimensions.height)
).toFixed(2);

const fontSizes = {
  fontSizes16: width * 16,
  fontSizes14: width * 14,
  fontSizes12: width * 12,
  fontSizes18: width * 18,
  fontSizes22: width * 22,
  fontSizes32: width * 32,
  fontSizes48: width * 48,
  fontSizes60: width * 60,
};

// theme 객체에 감싸서 반환한다.
const Theme = {
  fontSizes,
  height,
  width,
};

export default Theme;
