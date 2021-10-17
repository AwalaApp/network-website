---
title: "Lowering the barrier to adopt Awala"
author: gnarea
---

I'm very pleased to announce that we've just started an ambitious new phase for Awala thanks to a contract with the [Open Technology Fund](https://www.opentech.fund/). By the end of this project, we'll have made it drastically easier and safer for app developers to build compatible apps, and built an app for the general public.

This means that we'll finally be ready to gradually roll out Awala around the world, once our latest work has undergone a satisfactory security audit.

## Current status of the technology

Awala is a new network where compatible apps use the Internet when it's available, but they can also switch to a secure [sneakernet](https://en.wikipedia.org/wiki/Sneakernet) when the Internet has been cut off.

As of this writing, the network is fully operational on Android, Linux, macOS and Windows, but there are no compatible apps that the general public can use yet -- we only have the _Awala Ping_ app ([Android](https://play.google.com/store/apps/details?id=tech.relaycorp.ping), [desktop](https://www.npmjs.com/package/@relaycorp/awala-ping)), which we use for testing purposes internally.

We've also published all the tooling and [documentation](/service-providers/implementation/) necessary to build Android apps and Node.js-powered, server-side apps. Android developers have a high-level library that abstracts away the low-level details, but Node.js developers don't have this high-level tooling yet. Additionally, it isn't currently possible to build server-side apps on a platform other than Node.js.

Despite the limitations above, **developers can use Awala today** to make Internet-based services ([like Twitter](https://github.com/AwalaNetwork/poc)) resilient to Internet blackouts, or build Awala-native services to unlock additional benefits (e.g., [decentralisation](/service-providers/implementation/architecture#awala-makes-centralisation-a-spectrum), spam protection).

## Scope of the new project

### Cryptographic and networking improvements

We will be fixing issues and limitations in the current version of the technology, such as:

- Complete the implementation of the _Awala Channel Session Protocol_ (our adaptation of Signal's end-to-end encryption protocol to make it decentralised and resilient to Internet blackouts). We had to use an inferior protocol as a stopgap solution due [interoperability issues between the third-party libraries we use](https://github.com/relaycorp/relayverse/issues/27), which we'll now replace with the proper protocol.
- Automate certificate issuance and periodic renewal. Awala uses its own decentralised public key infrastructure (PKI) extensively, but app developers and server-side app operators are currently responsible for triggering the issuance/renewal of such certificates, as well as distributing renewed certificates to connected peers. We'll be changing this so that no developer or server operator ever has to do these routine tasks.

### Libraries for desktop apps

We'll be implementing high-level libraries for Node.js and JVM desktop apps, analogous to the [high-level library for Android developers](https://github.com/relaycorp/awala-endpoint-android). We'll also be publishing [codelabs](https://codelabs.awala.network/) on how to use such libraries.

These libraries abstract away all the cryptography and networking required by Awala, so that developers can focus on the unique features of their apps.

### Middleware for server-side apps

Awala's extensive use of cryptography is great for privacy and security, but it can make it very hard to build and operate server-side apps, where high-level libraries wouldn't be able to abstract away much of the complexity.

For this reason, we'll be implementing a [new middleware](https://github.com/relaycorp/relayverse/issues/28), which will sit between the Awala network and a server-side app. This will enable developers to build server-side apps in any language, whilst offloading all the Awala-specific cryptography and networking to the middleware.

This middleware is roughly comparable to a reverse proxy with TLS termination in the Internet world.

### Letro

We'll be building a basic version of [Letro](https://letro.app/en/), an app that will let people message each with and without access to the Internet. It'll be analogous to email, but unlike email: all messages will be end-to-end encrypted, and spamming and phishing will be virtually impossible.

In case you're wondering: A developer can certainly make email (or any other existing messaging software) work on Awala, but implementing and maintaining an Awala-native service costs a fraction of [adding Awala support to an existing Internet-based service](/service-providers/implementation/architecture#adding-awala-support-to-existing-internet-based-services). Additionally, since email doesn't provide an authorisation mechanism, censors could easily prevent specific people from getting legitimate data via [couriers](/couriers) by sending a lot of junk data to their email addresses.

Adding Awala support to an existing Internet-based service simply makes the service accessible to users disconnected from the Internet, but building Awala-native services from the ground up unlock additional benefits -- such as [decentralisation](/service-providers/implementation/architecture#awala-makes-centralisation-a-spectrum) and spam protection.

### Documentation for technical and non-technical stakeholders

We won't be making the most of Awala being an open, decentralised protocol with open source implementations until we make it easy for third-parties to contribute to the project and scrutinise our work, which is why we'll be adding documentation aimed at two distinctive audiences:

- Technical stakeholders (e.g., prospective contributors). Similar to the [architectural overview for service providers](/service-providers/implementation/architecture), but for anyone who wants a technically-accurate explanation of how Awala works and its limitations. This will cover the [main specs](https://specs.awala.network/), as well as key information concerning the [reference implementations](https://github.com/search?q=topic%3Aawala+org%3Arelaycorp).
- Non-technical stakeholders (e.g., policy analysts at CSOs, journalists, activists). A jargon-free overview of Awala, its governance, [security threats](https://specs.awala.network/RS-019), [policies](https://awala.network/legal/), [guiding principles](/way), etc.

## Stay tuned!

Follow us on [Twitter](https://twitter.com/AwalaNetwork) or [Facebook](https://www.facebook.com/AwalaNetwork) to learn more about our progress, and to be notified about opportunities to join the team.

If you want to reach out to us, please use [our forum](https://community.awala.network/) or [contact Relaycorp](https://relaycorp.tech/).
