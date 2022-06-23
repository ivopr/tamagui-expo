<p align="center">
  <img src="https://github.com/ivopr/tamagui-expo/blob/main/assets/icons/icon.png" alt="Tamagui Icon"/>
</p>

# Quick Start
Just run the following, changing `youprojectname` to the name of your project.
```
expo init yourprojectname --template tamagui-expo-template
```
# Tamagui Expo Starter
This is a starter template for [Expo](https://expo.dev) using [Tamagui](https://tamagui.dev).
In this template you get out of the box:
- I18n (WIP)
- Light and Dark Themes
- Expo Dev Client ready
- Semantic Release already configured with everything you might want
- EAS (Expo Application Services) profiles already configured
- Different icons for different app types (Dev Client, Beta and Production)

## Before you run...
1. Build the dev client with `eas -p android --profile development`
1. If you're in WSL, use the `yarn wsl` command, else `yarn start` is your default choice. Don't forget to add `--dev-client` to it.

## Troubleshooting
### I'm on WSL but my app doesn't connect
WSL2 runs inside it's own container, so it doesn't share the same IPv4 and port status as your host machine, you might need [this](https://gist.github.com/ivopr/64f974e632b7edcbe1f5e58b91e31598)

