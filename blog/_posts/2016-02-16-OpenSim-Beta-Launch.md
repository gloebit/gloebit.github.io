---
layout: post
title: "Beta Launch of Gloebit Money Module for OpenSim"
description: "Announcement of launch of Gloebit's Money Module beta addon for the OpenSimulator virtual world platform."
keywords: "Gloebit, Digital, Virtual, Currency, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, Beta, GMM, Gloebit Money Module, Gloebit Money Module addon, addon, beta, plugin, virtual world, virtual reality, commerce backbone, commerce, monetization, payments"
primary_image:
  loc: internal_blog
  url: "OpenSim-Gloebit-Money-Module-Addon-Beta.png"
  width: 600
  height: 315
no_sections: true
author_handle: colosi
author:
  name: Christopher M. Colosi
  uri: https://www.linkedin.com/in/christophercolosi
published: true
tags: [OpenSim, Digital Currency, FinTech, launch, beta, GMM]
use_excerpt_separator: true
hashtags: [FinTech, VR, hypergrid, GMM]
twitter_text: "Gloebit launches #DigitalCurrency plugin for #OpenSim #VirtualWorld"
disqus:
  enabled: true
  uniqueID: "OpenSimGloebitMoneyModuleBetaLaunch"
page_css: /stylesheets/post.css
page_type: blog_post
contains_social_buttons: true
---
{% if page.primary_image.loc == "external" %}"
  {% assign myPrimaryImageURL = primary_image.url %}
{% elsif page.primary_image.loc == "internal_site" %}
  {% capture myPrimaryImageURL %}{{ site.url }}{{ site.imagepath }}/{{ page.primary_image.url }}{% endcapture %}
{% elsif page.primary_image.loc == "internal_blog" %}
  {% capture myPrimaryImageURL %}{{ site.url }}{{ site.blogpath }}{{ site.imagepath }}/{{ page.primary_image.url }}{% endcapture %}
{% endif %}

Gloebit has developed a drop-in module integrating our currency service with the OpenSimulator virtual world platform.  We are testing this beta on a number of public virtual worlds running on OpenSim.  

![OpenSim Gloebit Money Module Beta]({{ myPrimaryImageURL }} "OpenSim Gloebit Money Module Beta")

<!--end_excerpt-->

## Read our launch announcement on Medium. ##

Don't forget to recommend our story on Medium to help us share the news.

<script async src="https://static.medium.com/embed.js"></script><a class="m-story" data-collapsed="true" href="https://medium.com/@colosi/uniting-virtual-reality-with-one-digital-currency-edb71b312eb5">Uniting Virtual Reality With One Digital Currency</a>

## Learn More ##

Find out all the details, where you can test our module or how to request beta access for your grid from the [OpenSim Gloebit Money Module section of our developer site](http://dev.gloebit.com/opensim/).

## Updates ##

We'll continue to post updates such as improvements we've made, feedback we've received and press coverage here, so check back.

### Press ###

- Hypergrid Business - [Ex-Linden money chief creates new metaverse currency](http://www.hypergridbusiness.com/2016/02/ex-linden-money-man-creates-new-hypergrid-currency/)
- Hypergrid Business - [How to use gloebits](http://www.hypergridbusiness.com/2016/02/how-to-use-gloebits/)
- Hypergrid Business on [early reception of GMM beta by OpenSim grids](http://www.hypergridbusiness.com/2016/02/hosting-firms-grids-split-on-gloebits/)

### Versions of OpenSim ###

We've built our GMM against all of the following OpenSim versions which being tested:

- 0.9.0 Dev
- 0.8.2
- 0.8.1
- 0.8.0

If you'd like to try out our OpenSim GMM, see our [list of beta test regions](http://dev.gloebit.com/opensim/#test). 

### Updates to the GMM ###

- pgSQL support
  - The initial launch only supported MySQL.  Thanks to a lot of help from Zetamex, we have fixed the integration with pgSQL.
  - Note for anyone else writing code for pgSQL, the npgsql library which OpenSim uses to execute queries from C# will silently fail/freeze on constraint errors.  This is very bad for a sql library and makes debugging a bit of a challenge.
- Backport for OpenSim 0.8.0.3
  - We had to make some very minor modifications to run with OpenSim 0.8.0.3 which dates back to November of 2014, but we now have a branch of our module with those modifications.
  - This turned out to be a bit of a challenge due to some incompatibilities with older versions of OpenSim and recent versions of Mono.  Huge thanks to the opensim-dev IRC channel, especially Plugh and AliciaRaven, for helping us to discover this.  
  - If you're building an older version of OpenSim, make sure you are using Mono 3.12.1 or earlier.  4.x versions of Mono will not work.  We believe this was [fixed by Diva Canto in August of 2015](http://opensimulator.org/viewgit/?a=commit&p=opensim&h=4cbbbefbf63f6cab4241563ebf56c6b0bea30ed3).

### Feature Requests ###

This is not an exhaustive list, but rather, a short list of items we think a large portion of the community will want to know have been requested.

- Make currency symbol in the viewer consistently update to the G$ symbol upon entering Gloebit enabled regions.
- Add in support for upload fees, group creation fees, etc.
- Make the buy currency button in the viewer work on regions where the GMM is not enabled grid wide.
- Update the gloebit balance automatically in the viewer after a user purchases gloebits (currently requires clicking on your balance).
- Make fee details visible to paying Gloebit account in their transaction history as this is required in some countries such as Germany.

### Known Bugs ###

- pgSQL --- FIXED 2015-02-11
- auto-debit scripted objects failing if description is blank --- Fix being reviewed presently


