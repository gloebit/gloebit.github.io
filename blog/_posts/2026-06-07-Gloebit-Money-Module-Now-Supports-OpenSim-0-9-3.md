---
layout: post
title: "Gloebit Money Module Now Supports OpenSim 0.9.3 (.NET 8)"
description: "Pre-built Gloebit Money Module DLLs are now available for OpenSim 0.9.3 on .NET 8, for Linux, Windows, and macOS."
keywords: "Gloebit, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, Money Module, GMM, 0.9.3, .NET 8, dotnet, DLL, Linux, Windows, macOS, GitHub Releases, GitHub Actions, Vincent Sylvester, Zetamex, build from source"
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
tags: [OpenSim, Digital Currency, FinTech, Money Module, .NET 8, Release]
use_excerpt_separator: true
hashtags: [FinTech, VR, GMM, OpenSim, dotnet]
twitter_text: "The Gloebit Money Module now supports #OpenSim 0.9.3 on .NET 8."
disqus:
  enabled: true
  uniqueID: "GloebitOpenSim093Support"
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

The Gloebit Money Module (GMM) now supports OpenSim 0.9.3 on .NET 8.  Pre-built DLLs are available for Linux, Windows, and macOS, so you can get Gloebit running on the latest OpenSim without building from source.

![OpenSim Gloebit Money Module]({{ myPrimaryImageURL }} "The Gloebit Money Module for OpenSim now supports 0.9.3 on .NET 8")

<!--end_excerpt-->

## Why this matters ##

OpenSim 0.9.3, released in November 2024, moved the platform to .NET 8.  That was a significant change, and until now the Gloebit Money Module had not been rebuilt against it.  As grids upgraded to 0.9.3, the older GMM DLLs could no longer load, and those grids lost Gloebit commerce support.  These new builds close that gap.

## Thanks to the community ##

The .NET 8 compatibility work was made possible thanks to [Vincent Sylvester](https://github.com/VincentSylvester) of [Zetamex](https://www.zetamex.com/).  Vincent did the work to get the module building and running under .NET 8, and we're grateful for the contribution.  This is exactly the kind of community collaboration that keeps OpenSim healthy.

## Download the pre-built DLLs ##

Pre-built DLLs for OpenSim 0.9.3.x are published on [GitHub Releases (build-88)](https://github.com/gloebit/opensim-moneymodule-gloebit/releases/tag/build-88), with separate builds for **Linux**, **Windows**, and **macOS**, and for both the **0.9.3.0** release and the **0.9.3.1Dev** branch.

You can find them, along with the example `Gloebit.ini` file and our older DLLs, on the [OpenSim downloads page](/opensim/downloads/).  Once downloaded, follow the [configuration instructions](/opensim/configuration-instructions/) to install and enable the module.

## Automated builds going forward ##

We've also set up a [GitHub Actions](https://github.com/gloebit/opensim-moneymodule-gloebit/actions) CI pipeline that automatically builds the GMM against new OpenSim releases.  That means future OpenSim versions should get GMM builds much faster, and we won't fall behind the way we did with the 0.9.3 transition.

## A note on testing ##

These builds compile cleanly and pass our automated build, but they have **not yet been fully production-tested**.  If you run a grid on OpenSim 0.9.3, we'd love for you to try them and let us know how they work for you.  Your feedback will help us confirm these builds are solid for everyone.

If your exact OpenSim version isn't listed, try the closest match, or build the module yourself.  Build-from-source instructions are documented in [BUILDING.md](https://github.com/gloebit/opensim-moneymodule-gloebit/blob/master/BUILDING.md).

Please report any issues on our [GitHub issue tracker](https://github.com/gloebit/opensim-moneymodule-gloebit/issues), and let us know if these builds get your grid back up and running on Gloebit.

Enjoy, and thank you for helping us keep commerce flowing in OpenSim!  
-- Team Gloebit
