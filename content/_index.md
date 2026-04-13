---
title: ""
date: 2024-01-01
type: landing

design:
  spacing: "3rem"

sections:
  - block: resume-biography-3
    id: about
    content:
      title: ""
      username: calee
    design:
      css_class: dark
      background:
        color: black
        text_color_light: true
      avatar:
        size: medium
        shape: circle
      name:
        size: sm

  - block: resume-skills
    id: skills
    content:
      title: Skills
      username: calee

  - block: collection
    id: publications
    content:
      title: Publications
      filters:
        folders:
          - publications
    design:
      view: citation

  - block: collection
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - projects
    design:
      view: article-grid
      columns: 2
      show_date: false

  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ""
      text: ""
      page_type: blog
      count: 5
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      offset: 0
      order: desc
    design:
      view: date-title-summary
---
