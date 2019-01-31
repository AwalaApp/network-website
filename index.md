---
layout: home
---

<img src="./custom-assets/logo.png" style="float:right; margin: 0.5em;"/>

# Relaynet

Relaynet is a technology that will bring the Internet to places where it isn't available. It can be used to circumvent [Internet blackouts](https://www.accessnow.org/keepiton/) or communicate with friends and family in the aftermath of a disaster, for example.

## How it works

Imagine you have a phone and want to use your social media accounts, but there's no access to the Internet in the region where you live. You could use Relaynet to send and receive data from the Internet if someone else could physically transport the information between your phone and a computer connected to the Internet in another region.

Let's also say that Twitter supports Relaynet. When you create a tweet, the Twitter app sends the data to a _Relaynet gateway_ installed on your phone. A _relayer_ will eventually collect the data from your gateway and take it to another gateway connected to the Internet in order to relay the data to Twitter. Twitter can also send data to you via the relayer's gateway and the relayer will eventually deliver it to your gateway.

Your information is also secure despite being transported by a third party. Thanks to end-to-end encryption, gateways can't see or change the data they get from the Twitter app or Twitter servers (the _parcel_), and relayers can't see or change the data they get from gateways (the _cargo_).

Simply put, Relaynet turns a [sneakernet](https://en.wikipedia.org/wiki/Sneakernet) into an [Internet Service Provider](https://en.wikipedia.org/wiki/Internet_service_provider), and provides the basis for making software tolerant to delays lasting anywhere from milliseconds to months. You can [read the Relaynet Core specification](https://github.com/relaynet/specs/blob/master/rs000-core.md) if you're interested in the technical details.

## Current status

Relaynet was designed by [Gustavo Narea](https://gustavo.engineer/) as part of his dissertation project at Oxford. There is a fully functional [proof of concept integrating Twitter](https://github.com/relaynet/poc), and [working drafts of the specifications](https://github.com/relaynet/specs/blob/master/README.md) are now available.
