# Zeitgeist group
## _Milestones Progress Bar_

##### Installation
- Create .npmrc file in the root directory of the project
- Inside .npmrc file type `@zeitgeist-group:registry=https://npm.pkg.github.com`
- Save the file and close.
- There're two ways to install, either from `terminal` line or `package.json`
    - Terminal: `npm install @zeitget-group/zg-progressbar-library@0.0.14-ci-1210326259.0`
    - package.json: `"@zeitgeist-group/zg-progressbar-library": "0.0.14-ci-1210326259.0",`
- See available versions [here](https://github.com/HassanElZarkawy/zg-progressbar-library/packages/)

## Usage
Importing control is fairly easy

    import ZgProgressSlider from "@zeitgeist-group/ZgProgressSlider";
    
And use it like this: 

    <ZgProgressSlider />

## Control Parameters
| Name | Type | Description
| ------ | ------ | ------
| sliderImage | `string` | Path of the image that will be grabbed as a slider.
| onUpdateClick | `function` | Will be called whenever the user updates the value of the slider.
| func1Icon | `string` | An icon to be displayed as a primary action.
| func2Icon | `string` | An icon to be displayed as a secondary action.
| onFunc1Click | `function` | called whenever the user clicks on the primary icon.
| onFunc2Click | `function` | Called whenever the user clicks on the secondary icon.
| isDisabled | `boolean` | Decides whether the user is allowed to change the slider value or not.
| initPercent | `number` | At what position the slider will be initiated.
