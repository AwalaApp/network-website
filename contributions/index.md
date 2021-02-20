---
title: Contributing to the Relaynet project
---

# Contributing to the project

We need an enormous amount of help to make Relaynet realise its full potential. Read on to learn how you can help us get there.

## Current priority areas

1. Spread the word about Relaynet, especially amongst diaspora communities.
1. If you're an Android developer, consider [building or prototyping a Relaynet-compatible app]({% link service-providers/index.md %}).
1. If you're a UX designer and have experience with Offline First / Delay-Tolerant Networking, please give us feedback on our [UX guidelines for service providers]({% link service-providers/ux.md %}).

## Upcoming priority areas

Please bear with us whilst we pave the way for people to contribute to the items below:

- Test the [Relaynet](https://play.google.com/store/apps/details?id=tech.relaycorp.gateway) and [courier](https://play.google.com/store/apps/details?id=tech.relaycorp.courier) apps on Android, and give us feedback on [the forum](https://community.relaynet.network/). We're particularly keen to hear whether anything breaks on older phones. This is blocked by the release of the [Relaynet Ping for Android](https://github.com/relaycorp/relaynet-ping-android/) (due by March 2021).
- Build or prototype Windows/Linux apps once we release the Relaynet app for desktop.
- Translate the Android and desktop apps to your native language(s). This is currently blocked by two things:
  - We want to wait until the text has been finalised.
  - We need to identify and provision the translation service we'll use, and integrate it with our automated release processes.
- Review [our plan for all Relaynet services to circumvent Internet censorship](https://github.com/relaycorp/relayverse/issues/4) based on deep packet inspection.

Subscribe to our newsletter below to be notified about new ways to contribute to the project.

## Code contributions

Please refer to [our documentation for contributors on GitHub](https://github.com/relaycorp/.github/blob/master/CONTRIBUTING.md).

## Protocol and code reviews

An earlier version of the protocol suite was [independently assessed](../archives/security-audit-2019-03.pdf) and we'll arrange for the initial implementation of Relaynet to be independently audited too. However, we want Relaynet to be throughly reviewed before we put it in front of at-risk users, so please:

1. If you have a background in cryptography and/or networking, consider reviewing the [specs](https://specs.relaynet.network/), and the apps and libraries we've built so far -- in particular:
    - The core Relaynet libraries for [Node.js](https://github.com/relaycorp/relaynet-core-js) and the [JVM](https://github.com/relaycorp/relaynet-jvm).
    - [Relaynet Gateway for Android](https://github.com/relaycorp/relaynet-gateway-android).
    - [Relaynet-Internet Gateway](https://github.com/relaycorp/relaynet-internet-gateway) (Node.js, Kubernetes).
1. If you're an SRE or SecDevOps engineer, consider reviewing [the cloud infrastructure for the Relaynet-Internet Gateway instances operated by Relaycorp](https://github.com/relaycorp/cloud-gateway).

Please refer to our [security policy](https://github.com/relaycorp/.github/blob/master/SECURITY.md) if you find a security vulnerability.

## Partnerships

If you're an organisation interested in contributing to Relaynet, please [contact Relaycorp](https://relaycorp.tech).

## Ancillary projects

We'd love to start the following projects, but they're not within the scope of Relaynet strictly speaking and our resources are extemely limited, so it's unlikely we'll do so any time soon. We'd be willing to participate if someone else were to take the lead.

- [Research and document User Experience best practices in Delay-Tolerant Networking](https://github.com/relaycorp/relayverse/issues/26).
- [Implement service to alert to potential Internet/telecommunications blackouts](https://github.com/relaycorp/relayverse/issues/9).
- Research and document practical uses of steganography at scale, [so that we can eventually use it](https://github.com/relaynet/specs/issues/44). We're particularly interested in approaches that wouldn't turn into a whack-a-mole game with censors.

{% include subscription-cta.html group="contributors" %}
