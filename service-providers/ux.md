---
title: Design Relaynet apps
breadcrumbs:
- service-providers/index.md
---

# User Experience in Relaynet apps

Relaynet itself doesn't constrain the look and feel of compatible apps, but you'll have to unlearn common UX patterns when you design for people who may be disconnected from the Internet for a long time: The user being offline is the rule, not the exception.

[Designing Offline-First Web Apps](https://alistapart.com/article/offline-first/) by Alex Feyerke is a good starting point for the kind of things you ought to consider. However, you should keep in mind that there are two key elements of the offline-first movement are unlikely to apply to your app:

- Offline-first advocates are primarily concerned with web applications.
- They assume that the user is briefly disconnected from the Internet, but Relaynet is meant to support extreme cases where the user may be disconnected for months or they might've never had access to the Internet in the first place.

You should also consider that if your user is disconnected from the Internet, they may be under excessive stress as a consequence of the circumstances they're dealing with in their region.

Sadly, there's not enough literature on how to approach UX in these scenarios, but [we're keen to work with others to improve this](https://github.com/relaycorp/relayverse/issues/26).
