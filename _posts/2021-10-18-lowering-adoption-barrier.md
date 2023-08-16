---
title: "Lowering the barrier to adopt Awala"
author: gnarea
---

I'm very pleased to announce that we've recently started a new contract with the [Open Technology Fund](https://www.opentech.fund/), which will allow us to make it considerably easier for third-party app developers and the general public to adopt Awala.

Let's start by doing a quick recap on where we are today before looking at the new contract.

## Current status of the technology

Awala is a new network where compatible apps use the Internet when it's available, but they can also switch to a secure [sneakernet](https://en.wikipedia.org/wiki/Sneakernet) when the Internet has been cut off.

As of this writing, the network is fully operational on Android, Linux, macOS and Windows, but there are no compatible apps that the general public can use yet -- we only have the _Awala Ping_ app ([Android](https://play.google.com/store/apps/details?id=tech.relaycorp.ping), [desktop](https://www.npmjs.com/package/@relaycorp/awala-ping)), which we use for testing purposes internally.

We've also published all the tooling and [documentation](/service-providers/implementation/) necessary to build Android apps and Node.js-powered, server-side apps. Android developers have a high-level library that abstracts away the low-level details, but Node.js developers don't have this high-level tooling yet. Additionally, it isn't currently possible to build server-side apps on a platform other than Node.js.

Despite the limitations above, **developers can still use Awala today** to make Internet-based services ([like Twitter](https://github.com/AwalaNetwork/poc)) resilient to Internet blackouts, or build Awala-native services to unlock additional benefits (e.g., [decentralisation](/service-providers/implementation/architecture#awala-makes-centralisation-a-spectrum), spam protection).

## Scope of the new contract

In addition to fixing known and future issues in the software we've built so far, we'll be implementing the following:

### Libraries for desktop apps

We'll be implementing high-level libraries for Node.js and JVM desktop apps, analogous to the [high-level library for Android developers](https://github.com/relaycorp/awala-endpoint-android). We'll also be publishing [codelabs](https://codelabs.awala.network/) on how to use such libraries.

These libraries abstract away all the cryptography and networking required by Awala, so that developers can focus on the unique features of their apps.

### Middleware for server-side apps

Awala's extensive use of cryptography provides significant privacy and security benefits, but it can make it very hard to build and operate server-side apps, where libraries wouldn't be able to abstract away much of the complexity.

For this reason, we'll be implementing a [middleware](https://github.com/relaycorp/relayverse/issues/28), which will sit between the Awala network and a server-side app. This will enable developers to build server-side apps in any language, whilst offloading all the Awala-specific cryptography and networking to the middleware.

This middleware is roughly comparable to a reverse proxy with TLS termination in the Internet world.

### Letro

We'll be building a basic version of [Letro](https://letro.app/en/), an app that will let people message each with and without access to the Internet. It'll be analogous to email, but unlike email, and thanks to Awala: all messages will be end-to-end encrypted, and spamming and phishing will be virtually impossible.

In case you're wondering: We could've certainly made email work on Awala, but implementing and maintaining an Awala-native service costs a fraction of [adding Awala support to an existing Internet-based service](/service-providers/implementation/architecture#adding-awala-support-to-existing-internet-based-services). Additionally, since email doesn't provide an authorisation mechanism, censors could easily prevent specific people from getting legitimate data via [couriers](/couriers) by emailing them junk mail.

### Documentation for technical and non-technical stakeholders

We want to make the most of Awala being an open, decentralised protocol with open source implementations by making it easy for third parties to contribute to the project and scrutinise our work, which is why we'll be adding documentation aimed at two separate audiences:

- Technical stakeholders (e.g., prospective contributors). Similar to the [architectural overview for service providers](/service-providers/implementation/architecture), but for anyone who wants a technically-accurate explanation of how Awala works and its limitations. This will cover the [main specs](https://specs.awala.network/), as well as key information concerning the [reference implementations](https://github.com/search?q=topic%3Aawala+org%3Arelaycorp).
- Non-technical stakeholders (e.g., policy analysts at CSOs, journalists, activists). A jargon-free overview of Awala, its governance, [security threats](https://specs.awala.network/RS-019), [policies](https://awala.network/legal/), [guiding principles](/way), etc.

## Stay tuned!

Follow us on [Twitter](https://twitter.com/AwalaNetwork) or [Facebook](https://www.facebook.com/AwalaNetwork) to learn more about our progress, and to be notified about contracting opportunities.

If you want to reach out to us, please [contact Relaycorp](https://relaycorp.tech/).
