---
title: Introducing Babel: A new interface description language – Ken Elkabany
layout: post
author: Jarkko Moilanen
---

The Dropbox API recently underwent a major revision (v2). The cornerstone of the new API was the introduction of Babel, a new interface description language (IDL).
Babel specifications are used to divide the API into namespaces, define routes and their input and output datatypes, and document functionality. Babel generators are used to publish public and private documentation, validate all input/output from our servers, and generate client SDKs for Python, .NET, Java, JS, and Swift.

I'll be discussing the benefits of introducing Babel, and more generally any IDL, to a sizable, growing organization like Dropbox. Benefits include: empowering non-engineers (PMs, sales, partnerships) with visibility into the API; documentation that doesn't lie; decentralizing API ownership from one team to many; and decoupling API writing from SDK updating. In aggregate, the ultimate benefit is an API that is being rapidly iterated to address the demands of internal teams and third parties. 

Babel is slated to be released in the coming months and possibly undergo a name change.

## Ken Elkabany, Dropbox

Ken is the lead engineer on the Dropbox API and was a champion of its recent re-architecture. Previously, he was founder and CEO of PiCloud, which offered an easy-to-use API for scientists and engineers looking to leverage thousands of cores on Amazon Web Services. Before that, he was an Electrical Engineering and Computer Science (EECS) graduate from the University of California, Berkeley where he did research in brain-machine interfaces and received the department's William Everitt Award for Excellence.
