---
title: Implement Awala services
breadcrumbs:
- service-providers/index.md
---

# Implement Awala services

In Awala terms, a _service_ is a collection of apps that communicate amongst themselves via Awala. The individual or organisation that builds and/or operates those apps is known as the _service provider_.

Like traditional apps, Awala apps can be server-side, desktop, mobile or CLI. For the most part, building those apps will be just like building traditional apps: You'll continue to use your favourite IDE, UI framework and test framework, for example. Any local Inter-Process Communication would remain unchanged too.

**The biggest difference is that your apps will no longer communicate _directly_ across computers** -- so your desktop/mobile app won't be making HTTP requests to `api.your-company.com`, for example. Instead, you'll be delegating all external communication to Awala.

Select one of the options below to learn more about implementing Awala services:

<div class="buttons is-centered">
  <a class="button is-link" href="{% link service-providers/implementation/architecture.md %}">
    <i class="fas fa-drafting-compass"></i>
    Architecture
  </a>
  <a class="button is-link" href="{% link service-providers/implementation/coding.md %}">
    <i class="fas fa-code"></i>
    Coding
  </a>
  <a class="button is-link" href="{% link service-providers/implementation/distribution.md %}">
    <i class="fas fa-rocket"></i>
    Distribution
  </a>
</div>
