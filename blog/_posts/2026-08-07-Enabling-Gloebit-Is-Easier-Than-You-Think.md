---
layout: post
title: "Enabling Gloebit on Your OpenSim Grid Is Easier Than You Think"
description: "On many OpenSim platforms you can turn on Gloebit currency without copying a DLL or editing a config file. Here's the quick path for DreamGrid, managed hosts, and self-hosters."
keywords: "Gloebit, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, Money Module, GMM, DreamGrid, Outworldz, Zetamex, Dreamland Metaverse, DigiWorldz, YourSimSpot, managed hosting, enable currency, install, OAuth Key, OAuth Secret"
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
tags: [OpenSim, Digital Currency, FinTech, Money Module, DreamGrid, Hosting]
use_excerpt_separator: true
hashtags: [FinTech, VR, GMM, OpenSim, DreamGrid]
twitter_text: "Enabling #Gloebit on your #OpenSim grid is easier than you think — on DreamGrid and managed hosts you never touch a config file."
disqus:
  enabled: true
  uniqueID: "GloebitEnableEasy"
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

Enabling Gloebit currency on your OpenSim grid is quick — and on many platforms you never have to copy a DLL or edit a configuration file.

![Gloebit Money Module for OpenSim]({{ myPrimaryImageURL }} "Enabling Gloebit is easier than you think")

<!--end_excerpt-->

## On DreamGrid: point and click ##

If you run [DreamGrid](https://outworldz.com/Outworldz_installer/Help/Gloebit.htm), the Gloebit Money Module is already built in.  There are no DLLs to copy and no `.ini` files to edit.  Just:

1. Create your Gloebit app and copy its OAuth **Key** and **Secret**.
2. Open DreamGrid's **Money** panel, paste in the Key and Secret, and set the environment to production.
3. Save and restart your grid.

That's it — your users can buy, hold, and spend gloebits.

## On a managed host: your provider handles it ##

If a hosting company runs your regions, you usually don't have to do the technical setup at all.  Providers including [Zetamex](https://www.zetamex.com/), [Dreamland Metaverse](http://www.dreamlandmetaverse.com/), [DigiWorldz](https://digiworldz.com/), and [YourSimSpot](https://www.yoursimspot.com/) can enable Gloebit for you — just send them your OAuth Key and Secret.

## Self-hosting: three steps ##

Running your own standalone or grid install?  It's still straightforward:

1. Download the Gloebit Money Module DLL for your OpenSim version — 0.9.3 (.NET 8) builds are on [GitHub Releases](https://github.com/gloebit/opensim-moneymodule-gloebit/releases), and older versions are on the [downloads page](/opensim/downloads/) — and drop it in your `bin/` directory.
2. Set `GLBKey` and `GLBSecret` in `Gloebit.ini`.
3. Set `economymodule = Gloebit` and restart.

Full details are in the [configuration instructions](/opensim/configuration-instructions/).

## Get started ##

Create your account at [gloebit.com/signup](https://www.gloebit.com/signup/) and [request permission to create apps](https://www.gloebit.com/merchant-signup/).  Once you're approved, follow whichever path above matches your setup, and you'll have gloebit commerce running in minutes.

Enjoy, and let us know how it goes!  
-- Team Gloebit
