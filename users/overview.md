---
title: How Awala works
description: Awala enables compatible apps to share data with and without the Internet, and use end-to-end encryption.
breadcrumbs:
- users/index.md
---

# How Awala works in simple terms

If you're privacy-conscious or just curious, this document should help you understand how it Awala works with minimal technical jargon. If you're looking for an accurate explanation, you may prefer to read the [technical overview]({% link tech-overview.md %}).

We assume that you've already used Awala, or have at least watched [the demo](https://youtu.be/LL1Z9EGiMVc).

## Internet apps need a live connection to the Internet; Awala apps don't

All the mainstream apps on your phone or computer, such as Facebook and Google Chrome, require an Internet connection to send data to a server and receive data from it. This is because the app itself is responsible for establishing that connection with the remote server.

By contrast, Awala-compatible apps delegate that responsibility to other components, like the [Awala app on your phone or computer]({% link users/download.md %}). This way, your favourite apps can let Awala use the best transport available to you at any point, and they can focus on what they do best.

Behind the scenes, your Awala app connects to an _Internet gateway_, which is a server that acts as a bridge between your device and the rest of Awala on the Internet. All your data is routed through this server, so it can hold incoming data for you whilst you're disconnected. By default, you're paired to an Internet gateway operated by Relaycorp, but you can change this from the settings.

## Your data is always end-to-end encrypted

Just like your WhatsApp conversations are [end-to-end encrypted](https://www.kaspersky.com/blog/what-is-end-to-end-encryption/37011/) so that only you and your contacts can see them, all data exchanged via Awala is end-to-end encrypted. Consequently, neither [couriers]({% link couriers.md %}) nor Internet gateways can read or change your data when they transport it.

Awala also enables bypassing third-party servers (like those operated by social networks), directly delivering data to recipients without the third party developer knowing about the communication. Effectively, this means that Awala apps can be more decentralised than their Internet counterparts.

However, it's up to the developer to make their app (partly) decentralised — and some may not be able to do it if their server requires this data to function. [Letro](https://letro.app/en/), for example, skips its server to deliver conversations, but still uses the server to create accounts and connect users with each other.

## Your privacy is a priority

Awala assigns your device a unique id that's used to route data to it, amongst other things. You can think of it as an IP address, but one that isn't linked to your identity or geographic location. Anyone on the network (e.g. couriers, Internet gateways, your contacts) can see this id.

Because your data goes through an Internet gateway, neither the person you communicate with nor the third-party developer that built your app can know your IP address — unless they also happen to operate the Internet gateway you use.

Relaycorp is committed to protecting your privacy, so we only keep the minimum amount of data necessary to operate our Internet gateways. We do log IP addresses for the purposes of troubleshooting and abuse prevention, but we don't track our users, nor do we share the little we know with third parties. For more information, please refer to [our privacy policy]({% link legal/terms.md %}).

We also make the entire source code for Awala publicly available — including the systems we use to automatically publish the software you use. This means that anyone with the appropriate technical skill set can independently verify our claims, so you don't have to take our word for it.

## The limitations you should be aware of

**Awala should still be considered experimental**. Not only should you expect things to break occasionally, but you should also be mindful that there may be security issues that we are not aware of yet. However, as of this writing, we're commissioning a thorough security audit and expect to publish the results by mid 2024.

Regardless of any security bugs present in Awala, you should still be aware that the following limitations that apply to Awala and anything else on your device:

- If the device is compromised, the attacker could compromise your apps' data, including Awala's.
- An attacker may distribute apps that look like Awala or an Awala-compatible app, but are actually malicious, so you should only [install Awala from trusted sources]({% link users/download.md %}).
