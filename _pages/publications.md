---
layout: page
permalink: /publications/
title: Publications
description: Research papers and preprints.
years: [2026, 2025, 2024, 2023, 2022]
nav: true
nav_order: 3

_styles: >
  .post-header {
    display: none;
  }
  .pub-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    column-gap: 1.5rem;
  }
  .pub-head h2 {
    margin-top: 0;
  }
  .pub-legend {
    margin: 0;
    font-size: 0.85rem;
    white-space: nowrap;
    color: var(--global-text-color-light);
  }
  .pub-legend span + span {
    margin-left: 1rem;
  }
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<!-- {% include bib_search.liquid %} -->

<div class="pub-head">
<h2 id="preprints">Preprints</h2>
<p class="pub-legend"><span><sup>†</sup> Corresponding author</span><span><sup>*</sup> Equal contribution</span></p>
</div>

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


