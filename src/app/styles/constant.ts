const ColorPalette = {
  GRAY: {
    _800: '#333',
    _700: '#666',
    _600: '#888',
    _500: '#aaa',
    _400: '#ccc',
    _300: '#f5f5f5',
  },
  RED: '#f76565',
  LIGHT_RED: '#fee6e6',
  BLUE: '#337ab7',
  LIGHT_BLUE: '#daf0f2',
  GREEN: '#006d31',
  LIGHT_GREEN: '#E4F7EC',
  LIGHT_YELLOW: '#fffbe8',
} as const;

// 定数定義
export const SIZE = {
  FONT: {
    LARGEST: '48px',
    HUGE: '32px',
    LARGE: '24px',
    MEDIUM: '16px',
    BASE: '14px',
    SMALL: '12px',
    MINMUM: '10px',
  },

  PADDING: {
    LARGEST: '48px',
    HUGE: '32px',
    XLARGE: '24px',
    LARGE: '16px',
    MEDIUM: '12px',
    BASE: '8px',
    SMALL: '4px',
    ZERO: '0px',
  },

  MARGIN: {
    HUGE: '32px',
    XLARGE: '24px',
    LARGE: '16px',
    MEDIUM: '12px',
    BASE: '8px',
    SMALL: '4px',
    TINY: '2px',
    ZERO: '0px',
    AUTO: 'auto',
  },

  GRIDGAP: {
    HUGE: '32px',
    XLARGE: '24px',
    LARGE: '16px',
    MEDIUM: '12px',
    BASE: '8px',
  },

  BORDER: {
    VERYTHICK: '4px',
    BOLD: '2px',
    BASE: '1px',
    ZERO: '0px',
  },

  LINEHEIGHT: {
    XLARGE: '1.5',
    LARGE: '1.15',
    BASE: '1.12',
  },
} as const;

export const COLOR = {
  FONT: {
    DEFAULT: ColorPalette.GRAY._800,
    LINK: ColorPalette.BLUE,
    SUCCESS: ColorPalette.GREEN,
    DANGER: ColorPalette.RED,
    SUB: ColorPalette.GRAY._600,
    LIGHT: ColorPalette.GRAY._700,
    PLACEHOLDER: ColorPalette.GRAY._500,
    ICON: ColorPalette.GRAY._500,
    WHITE: '#fff',
    BLACK: '#000',
  },

  BACKGROUND: {
    WHITE: '#fff',
    GRAY: ColorPalette.GRAY._300,
    BULE: ColorPalette.BLUE,
    LIGHT_YELLOW: ColorPalette.LIGHT_YELLOW,
    RED: ColorPalette.RED,
    LIGHT_RED: ColorPalette.LIGHT_RED,
    GREEN: ColorPalette.GREEN,
    LIGHT_GREEN: ColorPalette.LIGHT_GREEN,
  },

  BORDER: {
    DEFAULT: ColorPalette.GRAY._400,
    SUCCESS: ColorPalette.GREEN,
    DANGER: ColorPalette.RED,
    LINK: ColorPalette.BLUE,
    WHITE: '#fff',
    BLACK: '#000',
  },
} as const;
