---
layout: post
title: "Upgrade Your OpenSim Viewer"
description: "Alchemy and Firestorm have released an update which will drastically improve your commerce experience."
keywords: "Gloebit, Digital, Virtual, Currency, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, update, upgrade, viewer, Firestorm, Alchemy, Patch, Land Sales, Buy Currency, Insufficient Funds Flow, Economy Helper-URI, Gloebit Configuration, Viewer Patch."
primary_image:
  loc: internal_blog
  url: "upgrade-viewer.png"
  width: 1200
  height: 630
no_sections: true
author_handle: colosi
author:
  name: Christopher M. Colosi
  uri: https://www.linkedin.com/in/christophercolosi
published: true
tags: [OpenSim, Digital Currency, FinTech, Viewer, Firestorm, Alchemy, Patch]
use_excerpt_separator: true
hashtags: [FinTech, VR, GMM, Firestorm, Alchemy]
twitter_text: "Upgrade your #OpenSim viewer for improved #commerce."
disqus:
  enabled: true
  uniqueID: "GloebitUpgradeViewer"
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

Alchemy and Firestorm have released an update which will drastically improve your commerce experience!  It's time to upgrade your viewer and enjoy the new features.

![Golden Ticket]({{ myPrimaryImageURL }} "Buy a ticket to an event in OpenSim")

<!--end_excerpt-->

We weren't happy with some of the limitations placed on us (and the experience we could provide to our users) from some legacy viewer code, so we designed and implemented a [viewer patch](https://medium.com/@colosi/multi-currency-support-coming-to-opensim-viewers-cd20e75f7990) to change what was possible.  The goal was to simplify configuration of the Gloebit Money Module for grids, and to improve commerce in OpenSim.  Two of the most popular viewers have now released versions which included that patch, so we're alerting our users that they should upgrade and our partners running grids that they should ask their users to upgrade.

## Viewers with the patch ##

The versions of the following viewers include this patch, so upgrading to or beyond these versions will ensure you get an optimal commerce experience.
- [Alechemy v5.0.7.41341](https://alchemyviewer.org/alchemy-release-50741341.html) released on November 14th, 2017
- [Firestorm v5.0.11.53634](http://www.firestormviewer.org/firestorm-update-5-0-11-53634/) released on January 26th, 2018

## Improvements for users ##

### Seeing the correct currency symbol ###

You will now see the correct currency symbol for the region you are on.

Traditionally, the currency symbol was set once when you first log into a grid.  This meant that as you moved to a region or grid with a different currency active, the symbol would be wrong, which could be confusing.  Now, the currency symbol updates on a hypergrid teleport and on region crossings and teleports.  When you are in a Gloebit enabled region, you should always see G$ as the currency symbol.

### Purchasing Land ###

You'll be able to purchase land on more grids.

Enabling land sales used to require configuring a special server with special scripts which talked to the viewer separately from the region.  Many grids struggle to configure this properly, and therefore never enable land sales.  With this patch, Gloebit enabled regions can process land sales directly with the viewer, so if a grid wants to sell land, they will, and you'll be able to buy it using gloebits.

Land sales never worked for hypergrid travelers, and required a user to create a local account on the grid to purchase land.  Not any more.  Hypergrid travelers can now purchase land for sale on Gloebit enabled regions.

![Land owned by a hypergrid visitor]({{site.blogpath}}{{site.imagepath}}/hg-traveler-owned-land.png "A hypergrid visitor from Zetaworlds purchased land on Mobius Grid")
Here, you can see that a foreign hypergrid vistor from Zetaworlds purchased land on Mobius Grid and is listed as the owner of the parcel.

### The buy-currency flow ###

You will recieve helpful messaging from the commerce service for the region you are on when you click the buy-currency button and when you try to buy an object without enough funds and enter the insufficient funds flow.

Much like with land sales, enabling this buy-currency and insufficient-funds flows required some complex configuration from grid owners.  These settings were grid wide and didn't update when hypergrid teleporting or traveling to regions with other commerce services enabled.  For users, this meant unhelpful and inaccurate messaging at best.  Now, these can be handled directly by the regions moeny module.  When in any Gloebit enabled region, you'll receive helpful messaging from Gloebit so that you can complete your purchase.

For security purposes, we don't sell currency directly in the viewer, but if you click on the buy-currency button, you'll receive the link to purchase currency from our website.  Additionally, when you attempt to transact on a Gloebit enabled region, if you have not yet authorized, we'll be able to present you with link to authorize and link your Gloebit account, and if you have authorized, but have insufficient funds for the transaction, we'll be able to present you with the link to purchase more gloebits so you can complete your transaction.

## Improvements for Grid and Region owners ##

### Configuring the currency symbol ###

This is no longer necessary for Gloebit enabled regions.  You can still set it to determine the grid wide currency when on regions which are not Gloebit enabled, but when on Gloebit enabled regions, the currency will always be G$ without you having to do any configuration.

The currency was a grid wide setting, which was problematic for grids with multiple commerce systems.  It also didn't update on hypergrid teleports.  It will now update to the proper grid wide currency symbol or the region specific currency symbol.

### Configuring the economy helper-uri ###

This is no longer necessary.  You can still set it, but when on Gloebit enabled regions, our money module will tell the viewer to talk directly to our money module.  If you haven't set this or you've set it wrong, Gloebit enabled regions will still work.

This uri presented many problems for grid owners.  It was a grid wide setting, which didn't work for grids with multiple commerce systems.  It didn't update on a hypergrid teleport.  And, even if this was set propertly, viewers only update this field when the user actively forces an update, so you can't guarantee uniform user experiences if you've ever had to modify this after creation of your grid.  Now, you don't have to worry about any of this.  Buy-land, buy-currency, and insufficient-funds events will go directly to the Gloebit money module when on a Gloebit enabled region.

### Configuring your XML-RPC server, landtool.php file and currency.php file ###

You no longer have to do any of this.  The Gloebit Money Module handles everything for you.  Land sales and the buy-currency and insufficient-funds flows just work.

Now that the Gloebit Money Module can override the economy helper-uri, we have the viewer send the calls that used to go to this server and these scripts, instead directly to the region the user is on.  The GMM can handle these directly, with no additional configuration work and can provide a much better user experience.

### Removing our authorization instant message at the start of a session ###

This is actually coming soon, but it is enabled by these viewer updates.

Gloebit sends an IM to a user the first time we see them each session if they haven't yet authorized and linked this avatar on this app to a Gloebit account.  This was the only place we could reliably supply this message.  Most of our partners are fine with this, but some felt that it was obtrusive.  Until now, we've been unwilling to provide a configuration setting to remove it because without it, a user who wants to purchase on a Gloebit enabled region might not be able to figure out how to authorize and get access to their gloebits.  Now that we can reliable control the insufficient-funds flow, we can guarantee that we can deliver this message at the time when a user attempts a transaction.  In a future version of the Gloebit Money Module, we intend to provide a new configuration setting for the which will allow our partner to disable the session start instant message.

## Upgrade your viewer ##

So, if you haven't already, we hope that after reading this, you'll now upgrade your viewer to one with the new patch.  If you run a Gloebit enabled grid, we hope you'll tell your users to upgrade their viewers.  If you are building a new grid, or running one without Gloebit, we hope that you'll agree that we make commerce pretty simple, and that the [Gloebit Money Module](/opensim/configuration-instructions/) is worth a try.  Your customers will love it.

Enjoy, help us spread the message, and go shop!  
-- Team Gloebit
