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
  .post-description {
    margin-bottom: 3rem;
  }
  .svc-section {
    display: grid;
    grid-template-columns: 12rem 1fr;
    column-gap: 2rem;
    padding: 1.5rem 0 2.5rem;
    border-top: 1px solid var(--global-text-color);
  }
  .svc-section h2 {
    margin: 0.2rem 0 0;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--global-text-color);
  }
  .svc-label {
    margin: 2rem 0 0.25rem;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--global-text-color-light);
  }
  .svc-label:first-child {
    margin-top: 0.25rem;
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
    padding: 0.7rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .svc-rows li:first-child {
    padding-top: 0;
  }
  .svc-rows li:last-child {
    border-bottom: 0;
  }
  .svc-name {
    font-family: "Roboto Slab", Georgia, serif;
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.4;
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
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--global-text-color-light);
  }
  .svc-when {
    font-size: 0.9rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    text-align: right;
    color: var(--global-text-color-light);
  }
  @media (max-width: 768px) {
    .svc-section {
      grid-template-columns: 1fr;
      row-gap: 1.25rem;
      padding-bottom: 2rem;
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
<ul class="svc-rows">
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
</div>
