# FruitShop

## Setup
### General
- Install NVM or Node.js 18: https://github.com/nvm-sh/nvm
- Run ```yarn``` to install dependencies

### MacOS
1 Install the [latest version of XCode](https://developer.apple.com/xcode/)
2. Install Watchman:
```
brew install watchman
```
3. Install CocoaPods:
```
sudo gem install cocoapods
```
Install the required bundles and Pods for this project:
```
yarn gems:install && yarn pods:install
```

## Developing
### Run project

1. Start Metro bundler
```
yarn start
```
2. Start the application
```bash
yarn android
# OR
yarn ios
```
### Component structure
```
MyComponent.tsx
myComponent.types.ts
myComponent.styles.ts
myComponent.settings.ts
```

### Commit Name Convention
Docs: [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

Current version: [GitHub](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)

