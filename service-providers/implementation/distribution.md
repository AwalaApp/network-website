---
title: Distribute Relaynet apps
breadcrumbs:
- service-providers/index.md
- service-providers/implementation/index.md
pagination:
  previous: service-providers/implementation/coding.md
---

# Distribute Relaynet apps

You can distribute Relaynet apps through traditional channels, such as the Microsoft Store or the Google Play Store. However, you may want to offer additional channels for those users who need to install and start using your app without access to the Internet.

## Android apps

You have two options to distribute Android apps without access to the Internet:

- [Use app signing by Google Play](https://support.google.com/googleplay/android-developer/answer/9842756?hl=en) and download the signed, universal APK from the [Google Play Console](https://play.google.com/console/). Then distribute the universal APK file (e.g., using a service like [Knapsack for Hope](https://knapsackforhope.org/)).
- Publish the app on [F-Droid](https://f-droid.org/en/), which supports [offline installs](https://f-droid.org/en/tutorials/swap/).

**It's important not to distribute self-signed APKs** because that'd require the user to disable Android's built-in protection against untrusted sources, which an adversary could exploit.
