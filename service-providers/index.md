---
title: Service providers
description: Make your apps resilient to Internet blackouts
---

# Make your software work with and without the Internet

With [half the world population disconnected from the Internet](https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx) and [much of the other half subject to severe censorship](https://www.accessnow.org/keepiton/), **the Internet can hardly be taken for granted**. Make your apps compatible with Awala, and they'll continue to send and receive data even if the Internet is unavailable.

Awala apps use the Internet when it's available, but they can switch to a backup medium when the Internet is unavailable. The only backup medium at the moment are [couriers]({% link couriers.md %}) who relay data between the region disconnected from the Internet and a location with access to the Internet, but we plan to support additional backup media in the future.

If you're looking for inspiration, you could build apps to help people do the following:

- Send and receive emails.
- Post and get updates from social networks like [Twitter](https://twitter.com/AwalaNetwork/status/1089211336171679745) or [Mastodon](https://github.com/tootsuite/mastodon/issues/10267).
- Get answers to queries like "coronavirus symptoms" using [DuckDuckGo Instant Answers](https://help.duckduckgo.com/duckduckgo-help-pages/features/instant-answers-and-other-features/).
- Send and receive money -- including cryptocurrencies.

We're now inviting developers to prototype services, and we expect Awala to become _generally available_ by the end of 2024, as it needs to undergo stringent testing and assessments before it can be deemed safe for at-risk users.

Whether you're an individual or an organisation, we're here to support you in your journey to adopt Awala. Select one of the following options to learn more, and don't hesitate to post any questions/feedback on [our forum](https://community.awala.network/) -- we'd even love it if you stopped by to say hi!

<div class="buttons is-centered">
  <a class="button is-link" href="{% link service-providers/ux.md %}">
    <i class="fas fa-object-group"></i>
    UX Design
  </a>
  <a class="button is-link" href="{% link service-providers/implementation/index.md %}">
    <i class="fas fa-code"></i>
    Implementation
  </a>
  <a class="button is-link" href="{% link service-providers/funding.md %}">
    <i class="fas fa-dollar-sign"></i>
    Funding
  </a>
</div>

{% include subscription-cta.html group="service_providers" %}
