---
layout: post
title: "Gloebit Money Module Build 89: Security Update"
description: "Build 89 of the Gloebit Money Module for OpenSim fixes two security vulnerabilities. All grids should upgrade. We now also publish weekly DLLs built against OpenSim master."
keywords: "Gloebit, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, Money Module, GMM, security update, DLL, .NET 8, OpenSim master"
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
tags: [OpenSim, Digital Currency, FinTech, Money Module, Security]
use_excerpt_separator: true
hashtags: [FinTech, VR, GMM, OpenSim]
twitter_text: "Gloebit Money Module build 89 for #OpenSim is a security update. All grids should upgrade."
disqus:
  enabled: true
  uniqueID: "GloebitBuild89Security"
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

Build 89 of the Gloebit Money Module (GMM) for OpenSim is a security update, and we recommend that every grid upgrade.  Download the DLL for your OpenSim version and platform from the [OpenSim downloads page](/opensim/downloads/#dll).

![OpenSim Gloebit Money Module]({{ myPrimaryImageURL }} "Gloebit Money Module build 89 security update")

<!--end_excerpt-->

## What's fixed ##

Build 89 fixes two vulnerabilities:

- how the module checks the transaction callbacks it receives from Gloebit;
- the flow that links an avatar to a Gloebit account.

## How to upgrade ##

1. Download the DLL that matches your OpenSim version and operating system from the [downloads page](/opensim/downloads/#dll).  All builds are also on [GitHub Releases (build-89)](https://github.com/gloebit/opensim-moneymodule-gloebit/releases/tag/build-89).
2. Replace the existing `Gloebit.dll` in your OpenSim `bin/` directory.
3. Restart your simulators.

Your `Gloebit.ini` settings and your linked avatars carry over.  A purchase in progress during the restart may be canceled; nobody is charged.

## Weekly builds against OpenSim master ##

We now publish DLLs built against the latest OpenSim master every week, as the [opensim-master-weekly](https://github.com/gloebit/opensim-moneymodule-gloebit/releases/tag/opensim-master-weekly) pre-release.  If your grid runs OpenSim master, you no longer need to build the module from source.  If you run an OpenSim release such as 0.9.3.0, use the numbered builds on the downloads page.

## Thanks ##

Thanks to the Admin at Kurtopia Grid, who reported these issues responsibly, sent a patch, and tested the fix on a live grid.

Please report any issues on our [GitHub issue tracker](https://github.com/gloebit/opensim-moneymodule-gloebit/issues).

-- Team Gloebit
