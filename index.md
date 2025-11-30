---
layout: default
title: Home
---

# My Notes

{% for page in site.pages %}
- [{{ page.title }}]({{ page.url }}) - {{ page.date | date: "%B %d, %Y" }}
{% endfor %}