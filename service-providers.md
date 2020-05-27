---
title: Service providers
layout: page
permalink: /service-providers
---

# Make your software resilient to Internet blackouts

Add Relaynet support to your Internet-based service and make it tolerant to delays lasting anywhere from minutes to months. You can also integrate any third-party service that offers an API, or build a native Relaynet service from scratch to get additional benefits.

Internet apps are responsible for producing, consuming and transporting their data, and that's precisely what makes them brittle: Everything hinges on the sender and the recipient being able to communicate at the same time and with an adequate throughput.

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

As revolutionary as this may sound, Relaynet is fundamentally the realization of two well-established architectural techniques: [Asynchronous messaging](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Messaging.html) and [delay-tolerant networking](https://en.wikipedia.org/wiki/Delay-tolerant_networking) (or more precisely, the [store-and-forward](https://en.wikipedia.org/wiki/Store_and_forward) technique).

While Internet apps communicate directly via _clients_ and _servers_, Relaynet apps communicate via _endpoints_ whose data is transported by _gateways_. Endpoints can talk to each other as long they have the appropriate permissions to do so -- Gateways will enforce authentication and authorization with zero knowledge about the apps or the data being relayed.

Relaynet will connect endpoints across networks (e.g., between a sneakernet and the Internet) and within the same network. In fact, all Relaynet apps natively support [NAT traversal](https://en.wikipedia.org/wiki/NAT_traversal), so it'd be trivial for an endpoint in an Internet host to initiate communication with an endpoint behind a NAT router -- In Internet speak, that means you get server-push for free.

## Integration approaches

First party, centralized

Third party, centralized

Native Relaynet service

Relaynet will support desktop, Android, CLI and server-side apps from day one, thanks to the [Node.js](https://docs.relaycorp.tech/relaynet-core-js/) and [JVM](https://github.com/relaycorp/relaynet-jvm) libraries.

## We want to hear from you

Social media.

Commercial? Contact Relaycorp.

{% include subscription-cta.html group="service_providers" %}
