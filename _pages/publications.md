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
  .pub-filter button.empty {
    opacity: 0.4;
  }
  .pub-topics {
    margin: -0.25rem 0 1.25rem;
  }
  .pub-topics button {
    font-size: 0.78rem;
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
<div class="pub-filter pub-topics" role="group" aria-label="Filter publications by topic">
  <button type="button" class="active" data-topic="all" aria-pressed="true">All topics<span class="count"></span></button>
</div>

<!-- Entries appear in the order of _bibliography/papers.bib, which follows the CV. -->

<div class="publications">

{% bibliography --group_by none %}

</div>

<script>
  (function () {
    var rows = Array.prototype.slice.call(document.querySelectorAll(".publications .publication-row"));
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".pub-toolbar .pub-filter button"));
    var topicRow = document.querySelector(".pub-topics");
    // Topics shared by at least this many papers get their own button.
    var MIN_TOPIC_COUNT = 2;

    rows.forEach(function (row) {
      row.topics = Array.prototype.map.call(row.querySelectorAll(".topic-tag"), function (tag) {
        return tag.textContent.trim();
      });
    });
    var topicCounts = {};
    rows.forEach(function (row) {
      row.topics.forEach(function (topic) {
        topicCounts[topic] = (topicCounts[topic] || 0) + 1;
      });
    });
    Object.keys(topicCounts)
      .filter(function (topic) {
        return topicCounts[topic] >= MIN_TOPIC_COUNT;
      })
      .sort(function (a, b) {
        return topicCounts[b] - topicCounts[a] || a.localeCompare(b);
      })
      .forEach(function (topic) {
        var button = document.createElement("button");
        button.type = "button";
        button.dataset.topic = topic;
        button.setAttribute("aria-pressed", "false");
        button.appendChild(document.createTextNode(topic));
        var count = document.createElement("span");
        count.className = "count";
        button.appendChild(count);
        topicRow.appendChild(button);
      });
    var topicButtons = Array.prototype.slice.call(topicRow.querySelectorAll("button"));

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
    var current = { filter: "all", topic: "all" };

    function matchesFilter(row, filter) {
      return tests[filter](row.dataset);
    }
    function matchesTopic(row, topic) {
      return topic === "all" || row.topics.indexOf(topic) !== -1;
    }
    function setCount(button, n) {
      button.querySelector(".count").textContent = n;
      button.classList.toggle("empty", n === 0);
    }
    function render() {
      buttons.forEach(function (button) {
        setCount(
          button,
          rows.filter(function (row) {
            return matchesFilter(row, button.dataset.filter) && matchesTopic(row, current.topic);
          }).length
        );
      });
      topicButtons.forEach(function (button) {
        setCount(
          button,
          rows.filter(function (row) {
            return matchesFilter(row, current.filter) && matchesTopic(row, button.dataset.topic);
          }).length
        );
      });
      rows.forEach(function (row) {
        var visible = matchesFilter(row, current.filter) && matchesTopic(row, current.topic);
        (row.closest("li") || row).style.display = visible ? "" : "none";
      });
    }
    function bind(group, key, attr) {
      group.forEach(function (button) {
        button.addEventListener("click", function () {
          group.forEach(function (other) {
            var active = other === button;
            other.classList.toggle("active", active);
            other.setAttribute("aria-pressed", active);
          });
          current[key] = button.dataset[attr];
          render();
        });
      });
    }
    bind(buttons, "filter", "filter");
    bind(topicButtons, "topic", "topic");
    render();
  })();
</script>
