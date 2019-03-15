---
layout: home
---

<img src="./custom-assets/logo.png" style="float:right; margin: 0.5em; max-width: 40%"/>

# Relaynet

Relaynet is a technology designed to circumvent complete Internet blackouts caused by repressive regimes -- Those where VPNs can't help. But it can be used in any blackout, such as one caused by a natural disaster.

It can also be used on top of the Internet to build software that would be unthinkable with existing technologies. Like an alternative to email that is spam-free, uses end-to-end encryption and requires zero servers.

## How it works without the Internet

Say you have a phone and want to use your social media accounts, but there's no access to the Internet in the region where you live. You could use Relaynet to send and receive data from the Internet if someone else could physically transport the information between your phone and a computer connected to the Internet in another region.

Let's also say that Twitter supports Relaynet. When you create a tweet, the app sends it to a _Relaynet gateway_ installed on your phone. Another person (the _relayer_) will periodically collect the data from your gateway and take it to a _relaying gateway_ that will send the data to Twitter. Twitter can also send data to you via the relaying gateway.

This very example has been implemented in the [proof of concept with Twitter](https://github.com/relaynet/poc).

Note that your information is secure despite being transported by a third party. Thanks to end-to-end encryption, gateways can't see or change the data they get from Twitter apps or Twitter servers (the _parcel_), and relayers can't see or change the data they get from gateways (the _cargo_).

Simply put, Relaynet turns a [sneakernet](https://en.wikipedia.org/wiki/Sneakernet) into an [Internet Service Provider](https://en.wikipedia.org/wiki/Internet_service_provider), and provides the basis for making software tolerant to delays lasting anywhere from milliseconds to months.

## How it works with the Internet

As far as the user is concerned, there will be no difference whatsoever. Except that their apps will be [Offline First](http://offlinefirst.org/) -- Meaning that they'll finally be able to cope properly with those small yet frequent disruptions that affect every Internet user, even in developed nations.

Individual and organizations building and running distributed systems will benefit the most from using Relaynet when the Internet is available. They could, for example:

- Do [server push](https://en.wikipedia.org/wiki/Push_technology) without long-lived connections or workarounds like polling.
- Build peer-to-peer applications without having to run a server to store messages when one of the peers is offline.
- Broadcast messages that are fired once and are then propagated to all the relevant apps in the network.

Just about any software will benefit from using Relaynet, with the exception of those that stream data in real time (for example, Voice-over-IP, videoconferencing and many online games).

## How you can help

Anyone can help by following the project on [Twitter](https://twitter.com/relaynet_) and [Facebook](https://www.facebook.com/Relaynet-2584770964871347/), and spreading the word on social media.

If you have a background in cryptography, networking and/or software engineering, **please** provide feedback on the [main specifications](https://github.com/relaynet/specs).

Want to discuss other ways of contributing to the project? Join the [Gitter community](https://gitter.im/relaynet/community)!

## The backstory

Relaynet was designed by [Gustavo Narea](https://gustavo.engineer/) at the University of Oxford and its development is now led by [Relaycorp](https://relaycorp.tech/), which was founded to support and scale the project whilst keeping it as open and inclusive as possible.
