---
layout: post
title: "Faster In-World Payments, and a Reliability Fix"
description: "In-world payments between residents are now much faster. We also fixed an issue that could affect transactions involving certain special characters in names."
keywords: "Gloebit, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, payment speed, reliability"
primary_image:
  loc: internal_blog
  url: "FinTech_Blog.png"
  width: 600
  height: 315
no_sections: true
author_handle: colosi
author:
  name: Christopher M. Colosi
  uri: https://www.linkedin.com/in/christophercolosi
published: true
tags: [OpenSim, Digital Currency, FinTech, Payments]
use_excerpt_separator: true
hashtags: [FinTech, OpenSim, Gloebit]
twitter_text: "In-world payments between residents are now much faster, and we've fixed a reliability issue affecting some transactions. #OpenSim"
disqus:
  enabled: true
  uniqueID: "GloebitFasterInWorldPayments2026"
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

Following up on our last update: in-world payments are faster, and we've also fixed a reliability issue.

![Gloebit FinTech blog]({{ myPrimaryImageURL }} "Faster in-world payments and a reliability fix")

<!--end_excerpt-->

## In-world payments are much faster ##

We said we had more to do to speed up [in-world payments](https://www.gloebit.com/) between residents — paying another avatar, paying a store, tipping. We've made substantial progress.

Payments that could often take 20 seconds or longer, especially for residents and merchants with a long transaction history, now typically finish in a couple of seconds. Nothing changes in how you pay. It just happens sooner.

We're continuing to watch the numbers and look for more ways to speed this up, including some additional cleanup work on our end that should help further.

## A reliability fix ##

We fixed an issue that could, in rare cases, prevent a payment from completing when a name involved in the transaction — a resident's name, an object's name, a company name — contained certain special characters, like accented letters. This affected a small number of transactions, mostly from residents outside the US.

No gloebits were ever lost. If you ever had a payment silently fail for no clear reason, this was very likely why, and it's resolved now.

## Questions? ##

Email us at info@gloebit.com.
