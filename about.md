---
title: About
layout: page
permalink: /about
---

# About Relaynet

Independent security audit

Relaynet was designed by [Gus Narea](https://gustavo.engineer/) at the University of Oxford and its development is now led by [Relaycorp](https://relaycorp.tech/), which was founded to support and scale the project whilst keeping it as open and inclusive as possible.

As of December 2019, the implementation of Relaynet is being funded by the [Open Technology Fund](https://www.opentech.fund/). The goal of this project is to build the foundation to support Relaynet on desktop and Android by Q3 2020. The implementations can be found under the [@relaycorp organization on GitHub](https://github.com/relaycorp).

## Goals and non-goals

## How to help

{% include subscription-cta.html %}


---


A new generation of networked software will be made possible by Relaynet -- Like an alternative to email that is spam-free, phishing-free, uses end-to-end encryption and requires zero servers.

When the Internet is unavailable, Relaynet continues to run on alternative networks (such as [sneakernets](https://en.wikipedia.org/wiki/Sneakernet) or [meshnets](https://en.wikipedia.org/wiki/Mesh_networking)) which will eventually connect users to the Internet, and it also provides the basis for making software tolerant to delays lasting anywhere from milliseconds to months. [A proof of concept simulating this scenario with Twitter](https://github.com/relaynet/poc) was built to put Relaynet to the test.

When the Internet is available, the use of Relaynet will be absolutely transparent to end users. Except that their apps will be [Offline First](http://offlinefirst.org/) -- Meaning that they'll finally be able to cope properly with those small yet frequent disruptions that affect every Internet user, even in developed nations.

Organizations building and running distributed systems will benefit the most from using Relaynet. Thanks to the underlying architectural pattern (_asynchronous messaging_), the following will be possible:

- Doing [server push](https://en.wikipedia.org/wiki/Push_technology) without long-lived connections or workarounds like polling. Similar to the [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API), without the need to run or pay for a push service.
- Building peer-to-peer applications without having to run a server to store messages when one of the peers is offline.
- Broadcasting messages that are fired once and are then propagated to all the relevant apps in the network. Broadcasting this way is more scalable than using blockchain: Messages are deleted as soon as they expire and they're verified instantly.

Just about any software will benefit from using Relaynet, with the exception of those that stream data in real time (for example, Voice-over-IP, videoconferencing and many online games).
