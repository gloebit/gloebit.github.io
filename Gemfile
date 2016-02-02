source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
gem 'jekyll'
gem 'jekyll-feed'
gem 'jekyll-redirect-from'
gem 'jekyll-sitemap'
gem 'jemoji'

# You might need to comment out the following four lines to start
# a local jekyll server (for debug before deploymnet).  There is
# some bug in jekyll or listener or something that could cause the
# "bundle exec jekyll serve" to silently exit shortly after starting.
#
# Once you have the server running, it will tell you to put these
# lines in your Gemfile.  Uncomment them and save once you see that.
# Do this right away lest the server will poll every minute or so
# and rebuild continually.
#
require 'rbconfig'
if RbConfig::CONFIG['target_os'] =~ /mswin|mingw|cygwin/i
  gem 'wdm', '>= 0.1.0'
end
