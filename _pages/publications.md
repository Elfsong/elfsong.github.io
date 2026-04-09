---
layout: page
permalink: /publications/
title: Publications
description: For the recent publications, please go to my Google Scholar directly.
years: [2026, 2025, 2024, 2023, 2022]
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<!-- {% include bib_search.liquid %} -->

## Preprints

<div class="publications">

{% for y in page.years %}
  <!-- <h2 class="year">{{y}}</h2> -->
  {% bibliography --query @*[category=preprint, year={{y}}] --group_by none %}
{% endfor %}

</div>

## Published Papers

<div class="publications">

{% for y in page.years %}
  <!-- <h2 class="year">{{y}}</h2> -->
  {% bibliography --query @*[category!=preprint, year={{y}}] --group_by none %}
{% endfor %}

</div>


