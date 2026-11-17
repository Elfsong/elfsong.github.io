---
layout: page
title: Service
permalink: /service/
description: 大风扬积雪击面 亭东自足下皆云漫 稍见云中白若摴蒱数十立者 山也
nav: true
nav_order: 5
horizontal: false

# Page content. Each row is: name | detail | when. `url` is optional.
service:
  - title: Conference Service
    rows:
      - { name: AAAI, detail: Program Committee, when: "2026, 2027" }
      - { name: ACL Rolling Review, detail: Area Chair, when: "2026" }
      - { name: AISI, detail: Program Committee, when: "2026, 2027" }
      - { name: AISTATS, detail: Reviewer, when: "2024, 2025, 2026, 2027" }
      - { name: CIKM, detail: Senior Program Committee, when: "2025, 2026" }
      - { name: CVPR, detail: Reviewer, when: "2027" }
      - { name: ECAI, detail: Reviewer, when: "2024, 2025" }
      - { name: ICLR, detail: Reviewer, when: "2024, 2025, 2026, 2027" }
      - { name: ICML, detail: Reviewer, when: "2025, 2026" }
      - { name: NeurIPS, detail: Reviewer, when: "2024, 2025, 2026" }
      - { name: NeurIPS, detail: Ethics Reviewer, when: "2025, 2026" }
  - title: Consultation
    rows:
      - { name: University of Melbourne, detail: STEM Mentor, when: 2020–Present }
      - { name: "Cisco Systems, Inc.", detail: Research Engineer, when: 2022–2026 }
  - title: Volunteer
    groups:
      - label: Conferences
        compact: true
        rows:
          - { name: AAAI, when: "2023, 2026" }
          - { name: NeurIPS, when: "2025" }
          - { name: ACL, when: "2025" }
          - { name: EMNLP, when: "2024" }
          - { name: WWW, when: "2024" }
      - label: Community
        rows:
          - name: Be My Eyes
            url: https://www.bemyeyes.com/
            detail: Remote visual assistance for blind and low-vision users
            when: Long-term
          - name: CDAC 华社自助理事会
            url: https://www.cl.cdac.org.sg/
            detail: Educational support programmes in Singapore
            when: Long-term

_styles: >
  .post-header {
    display: none;
  }
  .svc-motto {
    margin: 0;
    padding-top: 0.7rem;
    border-top: 1px solid var(--global-divider-color);
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-align: center;
    color: var(--global-text-color-light);
  }
  .svc-section {
    display: grid;
    grid-template-columns: 11rem 1fr;
    column-gap: 1.5rem;
    padding: 0.7rem 0 0.9rem;
    border-top: 1px solid var(--global-text-color);
  }
  .svc-section:first-child {
    padding-top: 0;
    border-top: 0;
  }
  .svc-section h2 {
    margin: 0.1rem 0 0;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--global-theme-color);
  }
  .svc-label {
    margin: 0.6rem 0 0.1rem;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--global-text-color-light);
  }
  .svc-label:first-child {
    margin-top: 0.15rem;
  }
  .svc-rows {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .svc-rows li {
    display: grid;
    grid-template-columns: minmax(0, 15rem) minmax(0, 1fr) auto;
    column-gap: 1.5rem;
    align-items: baseline;
    padding: 0.15rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .svc-rows li:last-child {
    border-bottom: 0;
  }
  .svc-rows--compact {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 2rem;
  }
  .svc-rows--compact li {
    grid-template-columns: minmax(0, 1fr) auto;
    column-gap: 1rem;
    border-bottom: 0;
  }
  .svc-rows--compact .svc-detail {
    display: none;
  }
  .svc-name {
    font-family: "Roboto Slab", Georgia, serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.35;
    color: var(--global-text-color);
  }
  a.svc-name {
    text-decoration: none;
    transition: color 0.2s ease;
  }
  a.svc-name:hover {
    color: var(--global-theme-color);
    text-decoration: none;
  }
  a.svc-name i {
    margin-left: 0.4rem;
    font-size: 0.7em;
    color: var(--global-text-color-light);
  }
  .svc-detail {
    font-size: 0.85rem;
    line-height: 1.35;
    color: var(--global-text-color-light);
  }
  .svc-when {
    font-size: 0.85rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    text-align: right;
    color: var(--global-text-color-light);
  }
  @media (max-width: 768px) {
    .svc-section {
      grid-template-columns: 1fr;
      row-gap: 0.5rem;
      padding-bottom: 1rem;
    }
    .svc-rows--compact {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      column-gap: 1.5rem;
    }
    .svc-rows li {
      grid-template-columns: minmax(0, 1fr) auto;
      column-gap: 1rem;
    }
    .svc-name {
      grid-column: 1;
      grid-row: 1;
    }
    .svc-when {
      grid-column: 2;
      grid-row: 1;
    }
    .svc-detail {
      grid-column: 1 / -1;
      grid-row: 2;
    }
  }
---

<div class="svc">
{%- for section in page.service %}
<section class="svc-section">
<h2>{{ section.title }}</h2>
<div>
{%- if section.groups -%}
  {%- assign groups = section.groups -%}
{%- else -%}
  {%- assign groups = "" | split: "" | push: section -%}
{%- endif -%}
{%- for group in groups %}
{%- if group.label %}
<p class="svc-label">{{ group.label }}</p>
{%- endif %}
<ul class="svc-rows{% if group.compact %} svc-rows--compact{% endif %}">
{%- for row in group.rows %}
<li>
{%- if row.url %}
<a class="svc-name" href="{{ row.url }}" target="_blank" rel="noopener">{{ row.name }}<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
{%- else %}
<span class="svc-name">{{ row.name }}</span>
{%- endif %}
<span class="svc-detail">{{ row.detail }}</span>
<span class="svc-when">{{ row.when }}</span>
</li>
{%- endfor %}
</ul>
{%- endfor %}
</div>
</section>
{%- endfor %}
<p class="svc-motto">{{ page.description }}</p>
</div>
