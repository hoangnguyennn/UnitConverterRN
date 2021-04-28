# Unit Converter

Simple unit converter app using React Native (only Android - because I don't have iOS device :v)

## ScreenShot

| Home | UnitConversion |
| ---  | ---            |
| ![Home](https://raw.githubusercontent.com/hoangnguyennn/UnitConverterRN/master/screenshot/Screenshot_Home.jpg) | ![UnitConversion](https://raw.githubusercontent.com/hoangnguyennn/UnitConverterRN/master/screenshot/Screenshot_UnitConversionScreen.jpg) |

| SideMenu | Home (vietnamese) |
| ---  | ---            |
| ![Home](https://raw.githubusercontent.com/hoangnguyennn/UnitConverterRN/master/screenshot/Screenshot_SideMenu.jpg) | ![UnitConversion](https://raw.githubusercontent.com/hoangnguyennn/UnitConverterRN/master/screenshot/Screenshot_Home_vi.jpg) |

## Usage

Clone this repo and run command to install all packages used:
```bash
  $ yarn install
```

Next, run following command to create .apk file:
```bash
  $ cd android
  $ ./gradlew assembleRelease
```
Now, we have .apk in `android/app/build/output/apk/release/app-release.apk`. Install app and enjoy.

## All packages used
- See in `package.json`
