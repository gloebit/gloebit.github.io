---
layout: post
title: "Sell Parcel Access Passes in OpenSim"
description: "Gloebit has implemented a new OpenSim transaction to sell time-limited passes to a parcel.  Try it for your next event."
keywords: "Gloebit, Digital, Virtual, Currency, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, LandPass, Land Pass, Parcel Pass, LandPass Sales, ticket, pass"
primary_image:
  loc: internal_blog
  url: "golden_ticket.jpg"
  width: 510
  height: 261
no_sections: true
author_handle: colosi
author:
  name: Christopher M. Colosi
  uri: https://www.linkedin.com/in/christophercolosi
published: true
tags: [OpenSim, Digital Currency, FinTech, LandPass, tickets]
use_excerpt_separator: true
hashtags: [FinTech, VR, GMM, TicketSales]
twitter_text: "Buy parcel access passes now in #OpenSim."
disqus:
  enabled: true
  uniqueID: "GloebitOpenSimLandPassSales"
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

Now, you can sell tickets to an event in OpenSim via the buit-in parcel access interface!

![Golden Ticket]({{ myPrimaryImageURL }} "Buy a ticket to an event in OpenSim")

<!--end_excerpt-->

Give it a try and tell us what you think. This could be a great way to fund the amazing creativity in OpenSim.  It's an easy way to charge entrance to a music event or a festival without having to manually modify the parcel access list or write or buy a complex scripted access management system. Maybe we can try this for the next OpenSim Community Conference.

## How it works ##

Select "About Land" for one of your parcels and open the "Access" tab.  Deselect "Allow Public Access" and check the box next to "Sell passes to". Then set the "Price" and "Hours of access". That's it!

![OpenSim Land Acess GUI]({{site.blogpath}}{{site.imagepath}}/OpenSimLandAccessGUI.png "Select Sell passes to from the land access gui and set the price and hours")

When a user approaches a parcel with these settings, they will see a payment boundary which blocks their entrance. If they right click on the parcel and select the "Buy Pass" option, they'll be presented with a message asking if they'd like to pay for access. If they choose "okay", the owner of the land will be paid the price that was set and they'll be granted access for the amount of hours the owner specified. The buyer will appear in the "Allowed Residents" list for the parcel with their remaining pass time in minutes displayed after their avatar name. Once their time remaining reaches zero, they are removed from this list.

## Some details for various OpenSim versions ##

In 0.8.x versions of OpenSim, users will not be automatically expelled when their pass expires. If their pass is expired, once they leave, they will not be allowed back in without purchasing a new pass. Users can also buy additional passes while a pass is active and the time will be added to their existing pass. The "Hours of access" set will also be truncated to an integer, so if you want finer control than full hours, consider upgrading to the 0.9.0.0-release of OpenSim just packaged about a week ago.

In 0.9.x versions of OpenSim, users will be automatically expelled when their pass expires. The core developers implemented auto-expulsion somewhere in 0.9.0-dev. They also prevented a user from purchasing more time until their active pass is close to expiring. We'd love to hear your feedback on this implementation so that we can summarize it and pass it along to the OpenSim core team.

This will not work for a group-owned parcel in any version of OpenSim. Payment to groups has not yet been impmented as OpenSim has yet to define a standard for who should receive funds paid to a group.

## New GMM DLLs ##

We've released new DLLs for the OpenSim Gloebit Money Module which can be found on our [downloads page](/opensim/downloads). If you'd like to try out land pass sales, then you'll need this latest DLL.  Simply replace your current DLL with the new one and restart your sim.  If you're not yet a part of the Gloebit ecosystem, what are you waiting for?  Follow our [simple instructions](opensim/configuration-instructions/) to enable Gloebit in your world.



