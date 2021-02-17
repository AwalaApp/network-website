---
title: Architecture of Relaynet services
breadcrumbs:
- service-providers/index.md
- service-providers/implementation/index.md
pagination:
  next: service-providers/implementation/coding.md
---

# Architecture of Relaynet services

Add Relaynet support to your Internet-based service and make it tolerant to delays lasting anywhere from minutes to months. You can also integrate any third-party service that offers an API (like a social network), or build a native Relaynet service from scratch to get additional benefits.

The crux of the problem is that Internet apps are responsible for transporting their own data, so everything hinges on the sender and the recipient being able to communicate at the same time and with an adequate throughput.

Relaynet apps delegate the transport of their data to a _Relaynet gateway_ running on the [user](/users)'s device. The gateway will use the best available network (typically the Internet) and will queue outgoing data when no network is available. The user's gateway will be paired to a remote gateway on the Internet, which will also queue incoming data when the user is offline.

## Internet apps use remote procedure calls (RPCs)

![](./diagrams/rpc.png){:.rn-side-image}

Internet services typically use RPCs

RPCs are too brittle for the real world

- The client requires a live connection with the server.
- The server must be able to respond when the client makes a request.
- Latency must be low, especially when using TLS.

## Relaynet apps use asynchronous messaging

![](./diagrams/async-messaging.png){:.rn-side-image}

Async messaging acknowledges the real world

The sender delegates the delivery of each message to one or more brokers. Consequently:

- The message will reach its final recipient as soon as it can be reached.
- The broker(s) will retain the message until it’s been safely delivered.
- Brokers can use fallback media (e.g., email, sneakernets) when the usual transport is unavailable.

Best practice: Embrace asynchronous messaging without trying to replicate a request-response pattern. That pattern can still be replicated, but should be used sparingly.

Asynchronous messaging also happens to be a better integration style, for reasons that Hohpe and Woolf eloquently summarize in [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Messaging.html):

> Asynchronous messaging is fundamentally a pragmatic reaction to the problems of distributed systems. Sending a message does not require both systems to be up and ready at the same time. Furthermore, thinking about the communication in an asynchronous manner forces developers to recognize that working with a remote application is slower, which encourages design of components with high cohesion (lots of work locally) and low adhesion (selective work remotely).

## Centralisation is a spectrum

### Centralised service

Let's imagine a world where [Twitter supports Relaynet](https://github.com/relaynet/poc).

![](./diagrams/centralised-service.png)

### Decentralised service

![](./diagrams/decentralised-service.png)

### Hybrid services

Twitter: Decentralised DMs.

WhatsApp: Centralised user directory.

## Adding Relaynet support to existing services

### First-party service

### Third-party service with public API

## Technical overview

As revolutionary as this may sound, Relaynet is fundamentally the realization of two well-established architectures: [Delay-tolerant networking](https://en.wikipedia.org/wiki/Delay-tolerant_networking) and [asynchronous messaging](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Messaging.html). Messaging is an alternative to _Remote Procedure Calls_ (RPCs) like RESTful APIs -- the de facto architecture of Internet services.

While Internet apps communicate directly via _clients_ and _servers_, Relaynet apps communicate via _endpoints_ whose data is transported by _gateways_. Endpoints can talk to each other as long they have the appropriate permissions to do so -- Gateways will enforce authentication and authorization with zero knowledge about the apps or the data being relayed.

Relaynet will connect endpoints across networks (e.g., between a [sneakernet](https://en.wikipedia.org/wiki/Sneakernet) and the Internet) and within the same network. In fact, all Relaynet apps can do [NAT traversal](https://en.wikipedia.org/wiki/NAT_traversal) seamlessly, so it'd be trivial for an endpoint in an Internet host to initiate communication with an endpoint behind a NAT router -- In Internet speak, that means you get server-push for free.

[Read the introduction to Relaynet](https://specs.relaynet.network/RS-000#introduction) in the core specification if you want to learn more about the technical rationale and to get a more accurate overview of the technology.

## Integration approaches

Many of the assumptions and techniques you employ while designing and building Internet-based software won't apply when you build delay-tolerant software. To be effective, you need to embrace the new constraints and opportunities. In particular:

Integrating Relaynet in a pre-existing product involves replacing RPCs (e.g., HTTP requests) with an asynchronous interface provided by the Relaynet library, and such changes can be limited to the functionality you want to offer on Relaynet.

On the other hand, if you wish to make a third-party service work on Relaynet, you're likely to need a new desktop/mobile app and a new server-side app that would communicate with each other via Relaynet. Additionally, the server-side app will be responsible for the communication with the API of the third-party service. The [Relaynet proof of concept with Twitter](https://github.com/relaynet/poc) is an example of this type of integration.

If you're building a new service and are not constrained to traditional Internet technologies, you may want to build a native Relaynet service instead to unlock additional benefits. Say you want to build a decentralized service like email, but unlike email you'd want it to be spam- and phishing-free, use end-to-end encryption and need zero servers -- That'd be fairly easy with Relaynet!

Relaynet will support desktop, Android, CLI and server-side apps from day one, thanks to the [Node.js](https://docs.relaycorp.tech/relaynet-core-js/) and [JVM](https://github.com/relaycorp/relaynet-jvm) libraries. Those libraries will undergo a security audit once we're done building the foundation of the network, so we expect them to be ready for beta testing by February 2021. Stay tuned!
