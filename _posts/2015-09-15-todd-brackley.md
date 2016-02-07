---
title: Speaker - Todd Brackley
layout: post
author: Gareth Evans
---

## Hypermedia web API as a network of data
 
This talk specifically focuses on the "network of data" that is exposed through a REST hypermedia web API. Such a design means that clients follow links to traverse through the structure of relations from a known starting point. This is just one of the general ways that the web works.

We are currently refactoring a "reporting" application that was underperforming. Amongst its issues are latency for the users and high server CPU utilisation. We have seen these problems dissipate by, amongst other things, breaking up data resources into small atoms requested separately. This is counter-intuitive when compared to batch style APIs (currently, the dominant style).

Building distributed applications the way the web works is subtle rather than complex, with no magic. Much can be done with simple tools and RFC standards. For example, we will show how the humble, generic web browser (no JavaScript) is our first and foremost client to explore the network of data. We have found this opens up the domain of the application not only to developers but also to testers and analysts. 

To provide you with experience, we will open up the reporting API for the session with time to ask questions. So bring along your laptop.

## Bio:

Todd actively works with startups and corporates to leverage a REST style of architecture to effectively solve business and IT problems. He is a co-founder of [Hypr](https://hypr.nz/).

## Slides:

Slides are now available [here](http://apidaysnz.s3-website-ap-southeast-2.amazonaws.com/brackley.pdf)