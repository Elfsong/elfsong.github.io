---
layout: page
permalink: /publications/
title: Publications
description: Research papers and preprints.
nav: true
nav_order: 3

_styles: >
  .post-header {
    display: none;
  }
  .pub-legend {
    margin: 0 0 1rem;
    text-align: right;
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

<p class="pub-legend"><span><sup>†</sup> Corresponding author</span><span><sup>*</sup> Equal contribution</span></p>

<!-- Entries appear in the order of _bibliography/papers.bib, which follows the CV. -->

<div class="publications">

{% bibliography --group_by none %}

</div>
