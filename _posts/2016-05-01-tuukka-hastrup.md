---
title: Realtime and general purpose open APIs at Digitransit – Tuukka Hastrup
layout: post
author: Jarkko Moilanen
---

Digitransit is a route planning application and a platform for passenger information systems in public transport. It provides open APIs for observing, browsing, searching and computing realtime information on multi-modal journeys. 

The application programming interfaces include a GraphQL endpoint for flexibly but efficiently querying any information in the system, as well as an MQTT broker and topic structure for subscribing to just the relevant realtime information regarding vehicles. 

Combined with the React and Relay user interface technologies, GraphQL has enabled quick changes to the application without compromising performance when using a mobile internet connection. As a result, the API schema can be kept close to the domain model and independent of application-specific tailoring.

## Tuukka Hastrup, Helsinki Region Transport (HSL)

I'm a Free Software developer working since 2013 to fix the public administration from the inside to be more open and agile. I was a Code for Europe Fellow in 2013 creating a prototype of an open source public transport navigator (HSL Navigator), after which I was hired by HSL to continue the work in what became the Digitransit project. Before, I was a researcher in the field of Linked Data and a startup founder.

