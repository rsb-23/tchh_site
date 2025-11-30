---
layout: default
title: Home
---

# My Notes

{% for note in site.notes %}
- [{{ note.title }}]({{ note.url }}) - {{ note.date | date: "%B %d, %Y" }}
{% endfor %}