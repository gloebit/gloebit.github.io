---
layout: post
title: "ZanGrid Enables Gloebit In HyperShopping Regions"
description: "Announcement of first commerce focused OpenSim grid to enable Gloebit's Money Module."
keywords: "Gloebit, Digital, Virtual, Currency, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, GMM, Gloebit Money Module, Gloebit Money Module addon, ZanGrid, HyperShopping, virtual world, virtual reality, commerce backbone, commerce, monetization, payments, Zetamex"
primary_image:
  loc: internal_blog
  url: "HyperShopping-Gloebit-signs.jpg"
  width: 800
  height: 463
no_sections: true
author_handle: colosi
author:
  name: Christopher M. Colosi
  uri: https://www.linkedin.com/in/christophercolosi
published: true
tags: [OpenSim, Digital Currency, FinTech, launch, GMM, ZanGrid, HyperShopping, Zetamex]
use_excerpt_separator: true
hashtags: [FinTech, VR, hypergrid, GMM, ZanGrid, Zetamex]
twitter_text: "ZanGrid #OpenSim #VirtualWorld enables Gloebit #DigitalCurrency in #HyperShopping #VR mall."
disqus:
  enabled: true
  uniqueID: "ZangridEnablesGloebit"
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

These are the first Gloebit enabled VR regions strictly focusing on commerce.  It's a beautiful outdoor mall build.  Check it out.

![Signs in Zangrid explaining how to use Gloebit]({{ myPrimaryImageURL }} "ZanGrid Gloebit Signs")

<!--end_excerpt-->

## Immediate Success ##

We consider HyperShopping an immediate success.  They only enabled Gloebit earlier this week and we've alredy seen over 30 new Gloebit account signups, and about 70 active users who have purchased nearly 200 virtual items.  Sales are rolling in for the merchants of HyperShopping.  We can't wait for the weekend spike!

## Shop at HyperShopping ##

We hope all OpenSim users Give it a try.  [Sign up](https://www.gloebit.com/signup/) for a Gloebit account, [buy some gloebits](https://www.gloebit.com/purchase/) and then head over [ZanGrid](http://www.zangrid.ch/)'s HyperShopping regions using their hypergrid teleport url - hg.zangrid.ch:8002:HyperShopping.

## Enable Gloebit On Your Grid ##

[Zetamex](http://zetamex.com/) handled the configuration for ZanGrid and is prepared to do so for their other customers.  They made a wonderful [blog announcement](http://blog.zetamex.com/posts/2017/01/a-new-era-for-hypergrid-shoppers/).

> "To the rescue comes Gloebit, a new currency specifically designed for the hypergrid. Gloebit offers stability, usability and a level of integration that has not been seen in OpenSim thus far."

We've had many other grids testing our sytem over the last year and a handful of others, like [Mobius Grid](https://mobiusgrid.us/) who've pushed us live on their Grid during that time.  We have a couple customers who have enabled Gloebit on their OSGrid regions.  Other solution providers have tested Gloebit as well and can enable it for you, and for those managing their own grids, we've done our best to make the integration a simple process you can walk through yourself.  For some more testimonials, check out the latest [article](http://www.hypergridbusiness.com/2017/02/gloebit-live-on-zangrid-readies-merchant-payouts/) by Maria Korolov on Hypergrid Business.

Our [developer website](http://dev.gloebit.com/opensim/), which needs a little updating with our latest developments, is also another great resource if you're interested in enabling the Gloebit Money Module on your OpenSim grid or regions.
