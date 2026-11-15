---
layout: page
title: Personal
permalink: /personal/
description: 有趣的灵魂 终会相遇
nav: true
nav_order: 4
display_categories: [work, fun]
horizontal: false

_styles: >
  .post-header {
    display: none;
  }
  .pp-motto {
    margin: 0;
    padding-top: 1.5rem;
    border-top: 1px solid var(--global-divider-color);
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    text-align: center;
    color: var(--global-text-color-light);
  }
  .pp-section {
    padding: 1.5rem 0 3rem;
    border-top: 1px solid var(--global-text-color);
  }
  .pp-section:first-child {
    padding-top: 0;
    border-top: 0;
  }
  .pp-head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  .pp-head h2 {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--global-text-color);
  }
  .pp-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.25rem 1.5rem;
  }
  a.pp-card {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  a.pp-card:hover {
    text-decoration: none;
  }
  .pp-card figure {
    margin: 0 0 0.9rem;
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid var(--global-divider-color);
    background-color: var(--global-divider-color);
  }
  .pp-card picture {
    display: block;
  }
  .pp-card img.pp-cover {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  a.pp-card:hover img.pp-cover {
    transform: scale(1.04);
  }
  .pp-title {
    margin: 0;
    font-family: "Roboto Slab", Georgia, serif;
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.4;
    color: var(--global-text-color);
    transition: color 0.2s ease;
  }
  a.pp-card:hover .pp-title {
    color: var(--global-theme-color);
  }
  .pp-title i {
    margin-left: 0.4rem;
    font-size: 0.65em;
    color: var(--global-text-color-light);
  }
  .pp-desc {
    margin: 0.25rem 0 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--global-text-color-light);
  }
  @media (max-width: 768px) {
    .pp-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.75rem 1rem;
    }
  }
  @media (max-width: 400px) {
    .pp-grid {
      grid-template-columns: 1fr;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .pp-card img.pp-cover {
      transition: none;
    }
    a.pp-card:hover img.pp-cover {
      transform: none;
    }
  }
---

<div class="pp">
{%- for category in page.display_categories %}
{%- assign projects = site.projects | where: "category", category | sort: "importance" %}
<section class="pp-section" id="{{ category }}">
<div class="pp-head">
<h2>{{ category }}</h2>
</div>
<div class="pp-grid">
{%- for project in projects %}
{%- if project.redirect contains "://" %}
<a class="pp-card" href="{{ project.redirect }}" target="_blank" rel="noopener">
{%- elsif project.redirect %}
<a class="pp-card" href="{{ project.redirect | relative_url }}">
{%- else %}
<a class="pp-card" href="{{ project.url | relative_url }}">
{%- endif %}
{%- if project.img %}
{% include figure.liquid loading="eager" path=project.img sizes="(min-width: 768px) 250px, 50vw" alt="" class="pp-cover" %}
{%- endif %}
<h3 class="pp-title">{{ project.title }}{% if project.redirect contains "://" %}<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>{% endif %}</h3>
<p class="pp-desc">{{ project.description }}</p>
</a>
{%- endfor %}
</div>
</section>
{%- endfor %}
<p class="pp-motto">{{ page.description }}</p>
</div>
