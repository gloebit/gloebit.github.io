---
layout: post
title: "Gloebit Stats - Februaray 2017"
description: "Data on users, accounts and transactions from February 2017 from the Gloebit Money Module for OpenSim."
keywords: "Gloebit, Digital, Virtual, Currency, Digital Currency, Virtual Currency, FinTech, OpenSim, OpenSimulator, Data, Stats, app users, avatars, spend, transactions, new users, new accounts, growth"
primary_image:
  loc: internal_blog
  url: "data/2017-02-Total-App-Users.png"
  width: 1678
  height: 1194
no_sections: true
author_handle: colosi
author:
  name: Christopher M. Colosi
  uri: https://www.linkedin.com/in/christophercolosi
published: true
tags: [OpenSim, Digital Currency, FinTech, data, stats]
use_excerpt_separator: true
hashtags: [FinTech, VR, hypergrid, GMM, data]
twitter_text: "Gloebit #FinTech #data from #OpenSim #VirtualWorld #DigitalCurrency transactions in February."
disqus:
  enabled: true
  uniqueID: "GloebitFebruary2017Data"
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

We've pulled some data since the beginning of the year.  Things really started taking off in February!

![Chart of Gloebit App Users]({{ myPrimaryImageURL }} "Gloebit App Users increasing from 0 in June 2016 to 361 in early March 2017 with an inflection point in late January 2017")

<!--end_excerpt-->

We'll get back to what an "App User" is shortly, but look at that change in slope!  While we've been running and testing for a good long while, it wasn't until late January, as we announced some core merchant features, that commerce focused spaces began enabling Gloebit.  This post provides the first snapshot of growth we've seen since.

## Gloebit Accounts ##

![Chart of Gloebit Accounts]({{site.blogpath}}{{site.imagepath}}/data/2017-02-Total-Gloebit-Accounts.png "Total Gloebit Accounts rising from 285 on January 1st 2017 to 327 on February 1st to 409 on March 1st")

We started the year with 285 accounts on our system.  We averaged roughly 1 signup per day in January.  In February, we averaged over 3 signups per day, a 3x increase in our account growth rate.

## Active Gloebit Users ##

This chart displays the unique Gloebit accounts which either logged in or spent gloebits each day.  We'll likely refine the definition of active user as we build more metrics to include users who authorized an app, had their balance requested by an app, or purchased gloebits.  If we had this other data, this active users chart would certainly show higher numbers.

![Chart of Active Gloebit Users]({{site.blogpath}}{{site.imagepath}}/data/2017-02-Active-Users.png "Active Gloebit users rising from about 3.5 per day in January 2017 to nearly 20 per day in February")

Until the ZanGrid launch, in January, we were seeing about 2 active Gloebit users per day (3.5 with the final days of January factored in).  February saw an average of 20 active Gloebit users per day.

## App Users ##

An app user represents a unique account on a Gloebit app.  In the case of OpenSim, an app user is basically an avatar and an app is generally a grid which has enabled the Gloebit Money Module. We create an app user when a user comes to our website to authorize an app with their Gloebit account.  If a single avatar on an open grid such as OSGrid authorizes two separate apps on that grid, this would show up as 2 app users because while it is the same account on the grid, it is 2 different apps on Gloebit.  Similarly, if a user teleports to three different hypergrid enabled grids and authorizes on all of them, this will show up as 3 separate app users in our system because they are both different accounts in OpenSim (yes, when you hg teleport to a grid, that grid creates a local account for you) and different apps in Gloebit.  Over time, we expect our number of app users to grow faster than our number of accounts.

![Chart of new Gloebit App Users]({{site.blogpath}}{{site.imagepath}}/data/2017-02-New-App-Users.png "New Gloebit app users rising from about 1 per day in January 2017 to nearly 5 per day in February")

We saw an average of ~1.5 new app users per day in January, and less that 1 a day if you exclude the final few days of the month after ZanGrid launched.  We assume that our best day, 25 new app users on January 30th, was the day that ZanGrid launched.  February saw about a 5x increase to nearly 5 new app users per day.  While we haven't yet charted apps, it is worth noting that there were 3 commercially active apps in January, and by the end of February, there were 9.  

![Chart of Total Gloebit App Users]({{site.blogpath}}{{site.imagepath}}/data/2017-02-Total-App-Users-Since-Jan-1.png "Total Gloebit app users rising from 147 on January 1st 2017 to 208 on February 1st to 338 on March 1st")

It might seem odd that there are less total app users than there are total gloebit accounts.  This is because we didn't launch our app user system until last year.  Any test accounts from before that date will not have any app users.  A better comparison would be to look at signups since the launch of our app user system, which there have been about 280, and even some of these have been test accounts which are linked to zero app users.

## Transactions ##

We care about our users, but we know that our users care about money. We're here to make it easier to transact.

![Chart of gloebits spent per day in 2017 through March 1st]({{site.blogpath}}{{site.imagepath}}/data/2017-02-Gloebits-Spent.png "Gloebits spent rising from ~800 per day in January 2017 to over 2700 per day in February 2017")

Spending prior to the ZanGrid launch and the follow-on of other commerce focused OpenSim spaces was sporadic.  Since then, we've averaged over 3,000 gloebits spent per day.  Transactions moving 100,000 gloebits were processed by our system between January 28th and February 28th.

## Looking Forward Through 2017 ##

Our users are on pace to transact over 1 million gloebits this year.  That's just incredible.  That's if we saw no growth the rest of the year.  But we expect to see a lot more growth.  We receive inquiries from new OpenSim grids daily, and we know that adoption by more grids translates into more Gloebit accounts, more app users, more active users, and most importantly, more transactions.  Much of the growth in February was from only a few active apps on our system.  At the start of march, there are about 10 which appear reasonably active, and many more which are in the process of enabling Gloebit.  March will almost certainly be a bigger month than February.  We'll look forward to updating you again at the end of March.
