---
title: How Awala works
description: Awala enables compatible apps to share data with and without the Internet, and use end-to-end encryption.
breadcrumbs:
- users/index.md
---

# How Awala works in simple terms

If you're privacy-conscious or just curious, this document should help you understand how Awala works with minimal technical jargon. If you're looking for an accurate explanation, you may prefer to read the [technical overview]({% link tech-overview.md %}).

We assume you've either used Awala or at least watched [the demo](https://youtu.be/LL1Z9EGiMVc).

## Why Internet apps need an Internet connection and Awala apps don't

Mainstream apps on your phone or computer, such as Facebook and Google Chrome, require an Internet connection to send and receive data from a server because the app itself establishes the connection with the remote server.

In contrast, Awala-compatible apps delegate that responsibility to other components, like the [Awala app on your phone or computer]({% link users/download.md %}). This way, your favourite apps can let Awala use the best transport available to you at any point, and they can focus on what they do best.

Behind the scenes, your Awala app connects to an _Internet gateway_, which is a server that acts as a bridge between your device and the rest of Awala on the Internet. All your data is routed through this server, so it can hold incoming data for you whilst you're disconnected. By default, you're paired with an Internet gateway operated by Relaycorp, but you can, in principle, run your own.

The animation below shows how the Facebook app for Android could allow a user to send data via Awala couriers when the Internet is unavailable:

{% include embed_mp4_video.html path="/assets/diagrams/non-tech-overview.mp4" %}

If the Internet were available, the Awala app would just send the message to the Internet gateway without involving couriers.

## End-to-end encryption

Similar to how your WhatsApp conversations are [end-to-end encrypted](https://www.kaspersky.com/blog/what-is-end-to-end-encryption/37011/), ensuring that only you and your contacts can access them, all data exchanged via Awala is also end-to-end encrypted. As a result, neither [couriers]({% link couriers.md %}) nor Internet gateways can read or change your data during transit.

Awala also enables bypassing third-party servers, like those operated by social networks, delivering data directly to recipients without the third-party developer being aware of the communication. This means that Awala apps can be more decentralised than their Internet counterparts.

However, it's up to the app developer to decide how decentralised their app will be. Some may not be fully decentralised if a server is essential for certain functions. [Letro](https://letro.app/en/), for example, skips its server to deliver conversations, but still uses the server to create accounts and connect users with each other.

## Your privacy is a priority

Awala assigns your device a unique id that's used to route data to it, amongst other things. You can think of it as an IP address, but one that isn't linked to your identity or geographic location. Anyone on the network (e.g. couriers, Internet gateways, your Letro contacts) can see this id.

Since your data passes through an Internet gateway, neither your communication partners nor third-party app developers can determine your IP address — unless they also operate your chosen Internet gateway.

Relaycorp is committed to protecting your privacy, so we only keep the minimum amount of data necessary to operate our Internet gateways. We do log IP addresses for the purposes of troubleshooting and abuse prevention, but we don't track users or share the little we know with third parties. For more information, refer to [our privacy policy]({% link legal/terms.md %}).

We also make the entire source code for Awala publicly available — including the systems we use to automatically publish the software you use. This means that anyone with the relevant technical skills can independently verify our claims, so you don't have to take our word for it.

## The limitations you should be aware of

**Awala should be considered experimental**. Not only should you expect things to break occasionally, but you should also be mindful that there may be security issues that we are not aware of yet. However, as of this writing, we're requesting a thorough security audit and expect to publish the results by mid 2024.

Regardless of any security issues present in Awala, you should still be aware that the following limitations that apply to Awala and anything else on your device:

- If the device is compromised, the attacker could compromise your apps' data, including Awala's.
- An attacker may distribute apps that look like Awala or an Awala-compatible app, but are actually malicious, so you should only [install Awala from trusted sources]({% link users/download.md %}).
