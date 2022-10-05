<p align="center">
  <img src="https://github.com/ivopr/tamagui-expo/blob/main/assets/icons/icon.png" alt="Tamagui Icon"/>
</p>

[<img src="https://img.shields.io/badge/Runs%20with%20Expo%20Go-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000" alt="Runs on Expo Go"/>](https://expo.dev/client)

[<img src="https://img.shields.io/badge/Open%20in%20Expo%20Go-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000" alt="Open in Expo Go"/>](https://expo.dev/%40ivopr/TET?serviceType=classic&distribution=expo-go&releaseChannel=default)

# Quick Start
Just run the following, changing `youprojectname` to the name of your project.
```
npx create-expo-app youprojectname -t tamagui-expo-template --no-install
cd yourappname
yarn install
```
If you have [Expo Go](https://expo.dev/client) app installed, just start your new app with `yarn start`, if not, create your own [Development Client](https://docs.expo.dev/development/build/)
# Tamagui Expo Starter
This is a starter template for [Expo](https://expo.dev) using [Tamagui](https://tamagui.dev).
In this template you get out of the box:
- Semantic Release already configured with everything you might want
- EAS (Expo Application Services) profiles already configured
- Different icons for different app types (Dev Client, Beta and Production)

## Before you run...
1. Build the dev client with `eas build -p android --profile development`
1. If you're in WSL, use the `yarn wsl` command, else `yarn start` is your default choice. Don't forget to add `--dev-client` to it.

## Troubleshooting
### I'm on WSL but my app doesn't connect
WSL2 runs inside it's own container, so it doesn't share the same IPv4 and port status as your host machine, you might need [this](https://gist.github.com/ivopr/64f974e632b7edcbe1f5e58b91e31598)

