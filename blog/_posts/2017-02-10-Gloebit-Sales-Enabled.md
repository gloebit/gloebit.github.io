---
layout: post
title: "We've Enabled Gloebit Sales"
description: "Announcement of launch of functionality to request account permissions to sell gloebits and ability to place a sale order for USD."
keywords: "Gloebit, Digital, Virtual, Currency, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, exchange, sell order, gloebit sales, sell, cash out"
primary_image:
  loc: internal_site
  url: "seller-flow-images/seller-flow-sell-order-partially-executed.jpg"
  width: 800
  height: 463
no_sections: true
author_handle: colosi
author:
  name: Christopher M. Colosi
  uri: https://www.linkedin.com/in/christophercolosi
published: true
tags: [OpenSim, Digital Currency, FinTech, launch, sales]
use_excerpt_separator: true
hashtags: [FinTech, VR, hypergrid, GMM]
twitter_text: "Gloebit enabled sales of gloebits #DigitalCurrency for #OpenSim #VirtualWorld #VirtualGoods merchants."
disqus:
  enabled: true
  uniqueID: "GloebitEnablesSales"
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

Merchants can now request permission to sell gloebits for USD.

![Signs in Zangrid explaining how to use Gloebit]({{ myPrimaryImageURL }} "Gloebit sell order partially executed 800 of 1000 gloebits for $3.20 USD")

<!--end_excerpt-->

## Requesting permission to sell gloebits ##

A user with a verified email address and the proper payment credentials on file can request permission to sell gloebits.

Learn more about [requesting seller permissions](/opensim/seller-flow/#request-seller-perms).

## Selling gloebits ##

Once a user has been approved and granted permission to sell gloebits, they will see a "Sell Gloebits" button on their dashboard which will take them to a page where they can sell gloebits and track previously placed sell orders.

Learn more about [placing a gloebit sell order](/opensim/seller-flow/#selling-gloebits).

![Sell gloebits button on dashboard](/images/seller-flow-images/seller-flow-sell-gloebits-button.jpg "Sell gloebits button visible on dashboard for approved users")
