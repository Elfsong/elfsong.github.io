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
    flex: 0 0 auto;
    margin: 0;
    padding-top: clamp(0.7rem, 1.7vh, 1.6rem);
    border-top: 1px solid var(--global-divider-color);
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-align: center;
    color: var(--global-text-color-light);
  }
  .svc-section {
    display: grid;
    grid-template-columns: 12rem 1fr;
    column-gap: 1.5rem;
    flex: 1 1 auto;
    padding: clamp(0.7rem, 1.7vh, 1.6rem) 0;
    border-top: 1px solid var(--global-divider-color);
  }
  .svc {
    display: flex;
    flex-direction: column;
    margin-top: -1.25rem;
  }
  @media (min-width: 769px) {
    .svc {
      min-height: min(calc(100vh - 160px), 62rem);
    }
  }
  .svc-section > div {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .svc-section:first-child {
    padding-top: 0;
    border-top: 0;
  }
  .svc-section h2 {
    margin: 0.15rem 0 0;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    white-space: nowrap;
    color: var(--global-theme-color);
  }
  .svc-label {
    margin: clamp(0.5rem, 1.4vh, 1.2rem) 0 0.35rem;
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--global-text-color-light);
  }
  .svc-label:first-child {
    margin-top: 0.25rem;
  }
  .svc-rows {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .svc-rows li {
    display: grid;
    grid-template-columns: minmax(0, 13rem) minmax(0, 1fr) auto;
    column-gap: 1.5rem;
    flex: 1 1 auto;
    align-content: center;
    align-items: baseline;
    padding: 0.15rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .svc-rows li:first-child {
    flex-grow: 0.5;
    align-content: start;
    padding-top: 0;
  }
  .svc-rows li:last-child {
    flex-grow: 0.5;
    align-content: end;
    padding-bottom: 0;
    border-bottom: 0;
  }
  .svc-rows.svc-rows--compact {
    flex: 0 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.55rem 0.6rem;
  }
  .svc-rows.svc-rows--compact li {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: baseline;
    column-gap: 0.6rem;
    padding: 0.2rem 0.85rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
  }
  .svc-rows--compact .svc-detail {
    display: none;
  }
  .svc-rows--compact .svc-name {
    font-size: 0.95rem;
  }
  .svc-rows--compact .svc-when {
    font-size: 0.8rem;
  }
  .svc-name {
    font-family: "Roboto Slab", Georgia, serif;
    font-size: 1.05rem;
    font-weight: 400;
    line-height: 1.3;
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
    font-size: 0.9rem;
    line-height: 1.3;
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
      row-gap: 1rem;
      padding: 1.5rem 0 1.75rem;
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
{%- if section.groups -%}
  {%- assign groups = section.groups -%}
{%- else -%}
  {%- assign groups = "" | split: "" | push: section -%}
{%- endif -%}
{%- assign gaps = 0 -%}
{%- for group in groups -%}
  {%- unless group.compact -%}
    {%- assign gaps = gaps | plus: group.rows.size | minus: 1 -%}
  {%- endunless -%}
{%- endfor %}
<section class="svc-section" style="flex-grow: {{ gaps }}">
<h2>{{ section.title }}</h2>
<div>
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
