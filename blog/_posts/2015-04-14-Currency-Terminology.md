---
layout: post
title: "Currency Terminology: Virtual, Digital, Crypto, Bitcoin ???"
description: "Learn to use the terms virtaul, digital, crypto, bitcoin and more accurately when discussing Digital Currency and FinTech with this primer driving consensus on foundational base vocabulary."
keywords: "Gloebit, Digital, Virtual, Crypto, Currency, Digital Currency, Virtual Currency, Crypto-currency, Cryptocurrency, Commodity, Crypto-commodity, Cryptocommodity, Bitcoin, Altcoins, FinTech, Centralization, Centralized, Decentralized, Centralized Digital Currency, Decentralized Digital Currency, Second Life, Linden Lab, Linden Dollar, Fed, Money Supply, Consensus, Accuracy, Foundation, Base, Token, Digital Token"
primary_image:
  loc: internal_blog
  url: "Currency-Terminology-Diagram-with-logos.png"
  width: 1200
  height: 630
no_sections: true
author_handle: colosi
author:
  name: Christopher M. Colosi
  uri: https://www.linkedin.com/in/christophercolosi
published: true
tags: [Digital Currency, Virtual Currency, Crypto-currency, Bitcoin, FinTech]
use_excerpt_separator: true
hashtags: [Altcoin, FinTech]
twitter_text: "Currency Terminology: #VirtualCurrency #DigitalCurrency #CryptoCurrency #Bitcoin ???"
disqus:
  enabled: true
  uniqueID: "CurrencyTerminologyBlogPost"
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

**"Virtual currency, digital currency, Crypto-currency, Bitcoin... these are all the same thing, right?"**

A form of this question comes up in almost every interview, advising session, or conversation around [Gloebit](https://www.gloebit.com/) and the field of [FinTech](http://en.wikipedia.org/wiki/Financial_technology) (financial technology).  Clearly, the industry lacks consensus on the definitions for existing terminology.  My goal here is to educate where consensus exists and promote some concepts that will help us all better understand each other.

<!--end_excerpt-->

![Digital Currency Terminology Diagram]({{ myPrimaryImageURL }} "Currency Terminology Diagram")

## First, a little history from my perspective: ##

### At Second Life, we called it virtual currency. ###

From 2007 through 2011, I had the pleasure of working on Linden Lab's Second Life virtual world, eventually running the economy and maintaining the money supply much like the Federal Reserve Chair of the United States.  The product may have been virtual, but the economy was very real.  At over *$500 million* in user-to-user transactions per year, it could sit around 185th on the [list of countries by GDP](http://en.wikipedia.org/wiki/List_of_countries_by_GDP_%28nominal%29#Lists) - not far from the economies of some small island nations.  Many residents (what we called the Second Life users) earned a full-time living off of the product in Linden Dollars, the virtual currency of the platform, which could be "cashed out", or exchanged into USD.  Still, we called it a _virtual_ currency because it was playfully used only in our world, because it only existed in this digital space of bits, and because we wanted to differentiate it from the currencies of the countries around the world.

### At Gloebit, we built a digital currency. ###

In 2012, when I founded Gloebit, I made a very conscious decision to replace the word _virtual_ with the word _digital_ and put a stake in the ground about the breadth of its intended usage.  Unlike Linden Dollars, a virtual currency for use on one platform, Second Life, gloebits would be a payment method for use by all companies and products.

### "Digital currency, you mean that Bitcoin thing, right?" ###

In 2013, Bitcoin took the world, or at least the media, by storm.  It captured enough attention that it entered the general lexicon, but not enough attention for the average person or the media to really understand how it worked.  It is often coupled with the terms virtual, digital and crypto, and occasionally, everything else is referred to as a type of Bitcoin the same way that [tissues](https://en.wikipedia.org/wiki/Facial_tissue) might wrongly be referred to as a type of [Kleenex](https://www.kleenex.com/).

## FinTech is changing fast, and it's important to have shared terminology.  Here's your cheat sheet. ##

### Virtual Currency ###

A [virtual currency](http://en.wikipedia.org/wiki/Virtual_currency) is for use in a single product or on a single platform.  It is managed and controlled by the same company who produces that product or platform.   Have you ever purchased some sort of coin or gem in an app and then spent those gems to purchase something in the app such as extra lives, a character, a hat or new features?  Well then, you've used a virtual currency.  A notable platform example is [Amazon Coins](http://www.amazon.com/gp/feature.html?docId=1001166401).  There are many popular games with currencies, one of which is [HearthStone Gold](http://hearthstone.gamepedia.com/Gold).

Some people restrict the term virtual currency to digital tokens which a user can purchase and/or sell for a government currency such as USD, focusing on the tie in to traditional payment methods.  I am much more liberal with the term and use it for any platform-specific medium of exchange, even those earned within the platform.  For example, any reward system where you earn points instead of a dollar value, such as airline frequent flyer miles, is also a type of virtual currency.  Additionally, any in-game resource such as minerals, lumber or energy which is earned or mined and spent on in-game production is also a very simple virtual currency.

### Digital Currency ###

Here we have a debate.  Some use [digital currency](https://en.wikipedia.org/wiki/Digital_currency) to describe a superset which includes virtual currency.  Others see it as a complementary, but distinct, set.  Even the single Wikipedia page on the subject has both a section which [supports](https://en.wikipedia.org/wiki/Digital_currency#Definition) and one which [disputes](https://en.wikipedia.org/wiki/Digital_currency#Digital_versus_virtual_currency) overlap of the two.  

I am of the school of thought which treats digital currency as a distinct set, separated from virtual currency by the breadth of intended use.  Whereas a virtual currency is restricted to use on a single platform, and tightly controlled by that platform, a digital currency is open for use by any platform, and control is outside the scope of a single platform.  A digital currency, by this definition, must supply a service, protocol, or interface for platforms to tie into.

### Centralization ###

Centralization refers to how the currency is managed.  The digital currency space is bifurcated into centralized and decentralized digital currency.   

### Centralized Digital Currency ###

In a centralized system, there is a single authority who at a minimum controls the money supply (amount of the currency in circulation), and generally also controls transaction processing, record maintenance, user account creation, balances, and access.  This authority is also responsible for granting platforms and consumers access to the currency.

All government fiat currencies are centralized.  The Federal Reserve Bank is the central authority controlling the supply of USD.  By their nature, all virtual currencies are also centralized.

A centralized digital currency is for use across many platforms, but with a single central authority who oversees access to and controls the currency.  [Gloebits](http://dev.gloebit.com/monetize/#gloebits) are a centralized digital currency.  [Gloebit](https://www.gloebit.com) is the central authority which manages access to [gloebits](http://dev.gloebit.com/#monetizing) via a set of [web services](http://dev.gloebit.com).

### Decentralized Digital Currency ###

In a decentralized system, there is no single authority that controls the system.  No entity has the power to create currency to grow the money supply.  Generally, some public process (such as one defined by a community of users) manages account creation, access, transaction processing, and records, enabling peer-to-peer transactions.

Crypto-currencies are decentralized.  Precious metals may be considered a form of decentralized currency in the physical world.

A decentralized digital currency is for use across many platforms, and has no single central authority who oversees the access to or controls the currency.

### Crypto-currency ###

Let's delve into the often-misused term.  A [crypto-currency](http://en.wikipedia.org/wiki/Cryptocurrency) is a specific flavor of a decentralized digital currency.  Complex cryptography, along with a public record of all previous transactions, or [block-chain](https://en.wikipedia.org/wiki/Bitcoin#Block_chain), is used to verify a transaction between users rather than a central authority.  Production of new currency is predefined via an algorithm and is awarded to users (owners of computer nodes) who solve the cryptographic equations required to process the transactions.

Because growth of a standard crypto-currency money supply is finite and many users are doing work to try to attain the next "nugget" of currency produced, production of currency has been likened to the mining of precious metals and these users are often referred to as miners.  Since the money supply is handled in this predefined fashion, rather than adjusted by a central authority according to demand, the value of a unit of a crypto-curreny can be quite volatile, leading to speculation in the market.  The behavior of crypto-currencies and the activity that behavior enables is much more akin to the commodity market than the currency market, and so, it actually may make more sense to refer to these as _crypto-commodities_, but let's not get carried away with yet more terminology.  

### Bitcoin and Altcoins ###

[Bitcoin](http://en.wikipedia.org/wiki/Bitcoin) is specific instance of crypto-currency and was the first to reach substantial usage.  Since the creation of Bitcoin, many alternative crypto-currencies have popped up, bringing rise to the term "altcoin" which refers to any crypto-currency other than Bitcoin.

![Digital Currency Terminology Diagram - alternate]({{ site.url }}{{ site.blogpath }}/images/Currency-Terminology-Diagram4.png "Alternate Currency Terminology Diagram")

## Cementing the Foundation ##

The organization above is meant to provide a foundation, not a final structure.  The area of alternative currencies is complex and evolving daily.  I've attempted to include enough detail and depth that an average interested person can gain some understanding and use clear, accurate terminology.  There will always be exceptions and products which don't fit neatly within the simple boxes I've outlined.  For instance, government fiat currencies like the US Dollar have a centrally managed money supply, but decentralized transaction processing where one person can pay another in cash directly.  Alternatively, credit cards fit much more neatly into the centralized bucket.  Ideally, this post will serve as the reasonably simple base, from which deeper dives into the minutia will start.

