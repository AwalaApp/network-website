---
title: Service providers
layout: page
permalink: /service-providers
---

# Make your software resilient to Internet blackouts

Add Relaynet support to your Internet-based service and make it tolerant to delays lasting anywhere from minutes to months. You can also integrate any third-party service that offers an API, or build a native Relaynet service from scratch to get additional benefits.

Internet technologies are constantly evolving to provide richer functionality and better security, but Internet-based services must be built in such a way that they require real-time access to the Internet and addressing this limitation requires a radical shift from traditional Internet technologies.

The crux of the problem is that Internet apps are responsible for transporting their own data, and everything hinges on the sender and the recipient being able to communicate at the same time and with an adequate throughput.

By contrast, Relaynet apps delegate the transport of their data to a _Relaynet gateway_ running on the [user](/users)'s device. The gateway will use the best available network (typically the Internet) and will queue outgoing data when no network is available. The user's gateway will be paired to a remote gateway on the Internet, which will also queue incoming data when the user is offline.

Watch this video to get a better idea of how Relaynet will work:

<div class="embedded_video">
    <iframe
        src="https://www.youtube-nocookie.com/embed/_4zP0CfcTj4"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        >
    </iframe>
</div>

## Technical overview

As revolutionary as this may sound, Relaynet is fundamentally the realization of two well-established architectures: [Delay-tolerant networking](https://en.wikipedia.org/wiki/Delay-tolerant_networking) and [asynchronous messaging](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Messaging.html). Messaging is an alternative to _Remote Procedure Calls_ (RPCs) like RESTful APIs -- the de facto architecture of Internet services.

While Internet apps communicate directly via _clients_ and _servers_, Relaynet apps communicate via _endpoints_ whose data is transported by _gateways_. Endpoints can talk to each other as long they have the appropriate permissions to do so -- Gateways will enforce authentication and authorization with zero knowledge about the apps or the data being relayed.

Relaynet will connect endpoints across networks (e.g., between a sneakernet and the Internet) and within the same network. In fact, all Relaynet apps can do [NAT traversal](https://en.wikipedia.org/wiki/NAT_traversal) seamlessly, so it'd be trivial for an endpoint in an Internet host to initiate communication with an endpoint behind a NAT router -- In Internet speak, that means you get server-push for free.

[Read the introduction to Relaynet](https://specs.relaynet.network/RS-000#introduction) in the core specification if you want to learn more about the technical rationale and to get a more accurate overview of the technology.

## Integration approaches

Many of the assumptions and techniques you employ while designing and building Internet-based software won't apply when you build delay-tolerant software. To be effective, you need to embrace the new constraints and opportunities. In particular:

- Product managers and designers should adopt an [offline-first](http://offlinefirst.org/) mindset: The user being offline when performing an action or when an event takes place shouldn't be regarded an edge case.
- Software developers should embrace asynchronous messaging without trying to replicate a request-response pattern. That pattern can still be replicated, but should be used sparingly.

Integrating Relaynet in a pre-existing product involves replacing RPCs (e.g., HTTP requests) with an asynchronous interface provided by the Relaynet library, and such changes can be limited to the functionality you want to offer on Relaynet.

On the other hand, if you wish to make a third-party service work on Relaynet, you're likely to need a new desktop/mobile app and a new server-side app that would communicate with each other via Relaynet. Additionally, the server-side app will be responsible for the communication with the API of the third-party service. The [Relaynet proof of concept with Twitter](https://github.com/relaynet/poc) is an example of this type of integration.

If you're building a new service and are not constrained to traditional Internet technologies, you may want to build a native Relaynet service instead to unlock additional benefits. Say you're building a decentralized service like email, but unlike email you'd want it to be spam- and phishing-free, use end-to-end encryption and need zero servers -- That'd be fairly easy with Relaynet!

Relaynet will support desktop, Android, CLI and server-side apps from day one, thanks to the [Node.js](https://docs.relaycorp.tech/relaynet-core-js/) and [JVM](https://github.com/relaycorp/relaynet-jvm) libraries. Those libraries will undergo a security audit once we're done building the foundation of the network, so we expect them to be ready for beta testing by Q3 2020. Stay tuned!

## We want to hear from you

Come say hi on [Facebook](https://www.facebook.com/relaynet/) or [Twitter](https://twitter.com/relaynet_), and ask us any questions you may have about making your software compatible with Relaynet! You can also [email us](https://relaycorp.tech/) if you'd prefer that.

{% include subscription-cta.html group="service_providers" %}
