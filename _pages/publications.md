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
  .pub-toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem 1rem;
    margin: 0 0 1rem;
  }
  .pub-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .pub-filter button {
    padding: 0.15rem 0.7rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    background: transparent;
    color: var(--global-text-color-light);
    font-size: 0.85rem;
    line-height: 1.5;
    cursor: pointer;
  }
  .pub-filter button:hover {
    color: var(--global-theme-color);
    border-color: var(--global-theme-color);
  }
  .pub-filter button.active {
    color: var(--global-bg-color);
    background: var(--global-theme-color);
    border-color: var(--global-theme-color);
  }
  .pub-filter .count {
    margin-left: 0.3rem;
    opacity: 0.75;
  }
  .pub-legend {
    margin: 0;
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

<div class="pub-toolbar">
  <div class="pub-filter" role="group" aria-label="Filter publications">
    <button type="button" class="active" data-filter="all" aria-pressed="true">All<span class="count"></span></button>
    <button type="button" data-filter="ccf-a" aria-pressed="false">CCF-A<span class="count"></span></button>
    <button type="button" data-filter="first" aria-pressed="false">First author<span class="count"></span></button>
    <button type="button" data-filter="first-corr" aria-pressed="false">First + corresponding author<span class="count"></span></button>
    <button type="button" data-filter="preprint" aria-pressed="false">Preprint<span class="count"></span></button>
  </div>
  <p class="pub-legend"><span><sup>†</sup> Corresponding author</span><span><sup>*</sup> Equal contribution</span></p>
</div>

<!-- Entries appear in the order of _bibliography/papers.bib, which follows the CV. -->

<div class="publications">

{% bibliography --group_by none %}

</div>

<script>
  (function () {
    var rows = Array.prototype.slice.call(document.querySelectorAll(".publications .publication-row"));
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".pub-filter button"));
    var tests = {
      all: function () {
        return true;
      },
      "ccf-a": function (d) {
        return d.ccfA === "true";
      },
      first: function (d) {
        return d.first === "true";
      },
      "first-corr": function (d) {
        return d.first === "true" || d.corr === "true";
      },
      preprint: function (d) {
        return d.preprint === "true";
      },
    };
    buttons.forEach(function (button) {
      var test = tests[button.dataset.filter];
      var count = rows.filter(function (row) {
        return test(row.dataset);
      }).length;
      button.querySelector(".count").textContent = count;
      button.addEventListener("click", function () {
        buttons.forEach(function (other) {
          var active = other === button;
          other.classList.toggle("active", active);
          other.setAttribute("aria-pressed", active);
        });
        rows.forEach(function (row) {
          (row.closest("li") || row).style.display = test(row.dataset) ? "" : "none";
        });
      });
    });
  })();
</script>
