<p align="center">
  <img src="./assets/icons/icon.png" alt="Tamagui Icon"/>
</p>

# Tamagui Expo Starter
This is a starter template for [Expo](https://expo.dev) using [Tamagui](https://tamagui.dev).
In this template you get out of the box:
- Firebase Integration (Analytics, Auth, Real Time Database, Cloud Messaging a.k.a. Push Notifications, Crashlytics)
- Native Google Sign In pop up on Android
- MobX Stores
- MobX Persistence with [MMKV](https://github.com/mrousavy/react-native-mmkv) (~30x faster than AsyncStorage they say)
- I18n (evaluating)
- Light and Dark Themes (evaluating)
- Expo Dev Client ready
- Semantic Release already configured with everything you might want
- EAS (Expo Application Services) profiles already configured
- Different icons for different app types (Dev Client, Beta and Production)

## Images
<div style="display:flex;flex-direction:row;">
<p align="center" style="max-height:400px">
  <img src="./assets/images/notification.jpg" alt="Tamagui Icon"/>
</p>
</div>

## Before you run...
1. You must have a [Firebase](https://console.firebase.google.com) project with Google Sign In Method, Real Time Database and Cloud Messaging ready.
1. In `app.config.ts` change the `android.package` key to your desired ones, and then register them on Firebase. Don't forget to also set the SHA-1 hash. You can get it running `expo credentials:manager` helper.
1. Download your new `google-services.json` and place it at the root.
1. Copy the `constants/secrets.example.ts` to `constants/secrets.ts` and modify it accordingly.
1. Build the dev client with `eas -p android --profile development`
1. If you're in WSL, use the `yarn wsl` command, else `yarn start` is your default choice. Don't forget to add `--dev-client` to it.

## Troubleshooting
### I'm on WSL but my app doesn't connect
WSL2 runs inside it's own container, so it doesn't share the same IPv4 and port status as your host machine, you might need [this](https://gist.github.com/ivopr/64f974e632b7edcbe1f5e58b91e31598)

