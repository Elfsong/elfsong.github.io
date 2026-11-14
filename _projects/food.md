---
layout: page
title: Food
description: Gastronomic Delight
img: assets/img/food.jpg
importance: 3
category: fun
_styles: >
  .food-hero figure {
    margin: 0;
  }
  .food-hero img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 21 / 9;
    object-fit: cover;
    object-position: 50% 45%;
    border-radius: 14px;
  }
  .food-intro {
    max-width: 34rem;
    margin: 2.5rem 0 0.75rem;
    font-family: "Roboto Slab", Georgia, serif;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.6;
    color: var(--global-text-color);
  }
  .food-menu {
    list-style: none;
    margin: 0 0 3rem;
    padding: 0;
  }
  .food-menu li {
    border-bottom: 1px solid var(--global-divider-color);
  }
  .food-menu a {
    display: grid;
    grid-template-columns: 3.25rem 1fr auto;
    align-items: baseline;
    column-gap: 0.5rem;
    padding: 1.6rem 0;
    color: var(--global-text-color);
    text-decoration: none;
  }
  .food-menu a:hover {
    text-decoration: none;
  }
  .food-no {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    font-variant-numeric: tabular-nums;
    color: var(--global-text-color-light);
  }
  .food-name {
    display: block;
    font-family: "Roboto Slab", Georgia, serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.25;
    transition: color 0.2s ease;
  }
  .food-note {
    display: block;
    margin-top: 0.35rem;
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--global-text-color-light);
  }
  .food-go {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    white-space: nowrap;
    color: var(--global-text-color-light);
    transition: color 0.2s ease;
  }
  .food-go i {
    display: inline-block;
    margin-left: 0.4rem;
    transition: transform 0.2s ease;
  }
  .food-menu a:hover .food-name,
  .food-menu a:hover .food-go,
  .food-menu a:focus-visible .food-name,
  .food-menu a:focus-visible .food-go {
    color: var(--global-theme-color);
  }
  .food-menu a:hover .food-go i,
  .food-menu a:focus-visible .food-go i {
    transform: translate(3px, -3px);
  }
  @media (max-width: 576px) {
    .food-hero img {
      aspect-ratio: 4 / 3;
    }
    .food-intro {
      font-size: 1.1rem;
      margin-top: 2rem;
    }
    .food-menu a {
      grid-template-columns: 2.25rem 1fr auto;
      padding: 1.25rem 0;
    }
    .food-name {
      font-size: 1.3rem;
    }
    .food-go span {
      display: none;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .food-name,
    .food-go,
    .food-go i {
      transition: none;
    }
  }
---

<div class="food-hero">
  {% include figure.liquid loading="eager" path="assets/img/food.jpg" sizes="(min-width: 1000px) 970px, 95vw" alt="A table of lamb dishes, skewers and spiced flatbread" %}
</div>

<p class="food-intro">Three maps I keep adding to. Every pin is somewhere I would happily go back to.</p>

<ul class="food-menu">
  <li>
    <a href="https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2s1JX_FtCBNxg0J25yK-7TsV5Wc5jI!3e3?entry=tts&g_ep=EgoyMDI1MDIxMi4wKgBIAVAD" target="_blank" rel="noopener">
      <span class="food-no">01</span>
      <span>
        <span class="food-name">Good Food</span>
        <span class="food-note">Restaurants worth the trip.</span>
      </span>
      <span class="food-go"><span>Google Maps</span><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
    </a>
  </li>
  <li>
    <a href="https://maps.app.goo.gl/hvMzCtZQwopoSAti7" target="_blank" rel="noopener">
      <span class="food-no">02</span>
      <span>
        <span class="food-name">Good Coffee</span>
        <span class="food-note">Cafés that take the cup seriously.</span>
      </span>
      <span class="food-go"><span>Google Maps</span><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
    </a>
  </li>
  <li>
    <a href="https://maps.app.goo.gl/PKJKU7SA4BCrukW96" target="_blank" rel="noopener">
      <span class="food-no">03</span>
      <span>
        <span class="food-name">SG Guide</span>
        <span class="food-note">A shared map of Singapore. Anyone can edit it, so add your own favourites.</span>
      </span>
      <span class="food-go"><span>Google Maps</span><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
    </a>
  </li>
</ul>
