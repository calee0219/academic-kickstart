---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "一個低延遲與高流量 5G 核心網路之設計與實作"
authors: ["李家安"]
date: 2021-06-24T15:00:00+08:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2021-06-24T15:00:00+08:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["7"]

# Publication name and optional abbreviated publication name.
publication: "一個低延遲與高流量 5G 核心網路之設計與實作"
publication_short: ""

abstract: """As the cellular evolved, there is more and more feature must be matched in core network. That’s why it comes with 5G cellular networks. In 5G, there are 3 main requirements: 1. Enhanced Mobile Broadband (eMBB) 2. Ultra-Reliable and Low Latency Communications (URLLC) 3. Massive Machine Type Communications (MMTC) Besides, network function virtualization (NFV) are also getting more and more popular in this age. With the features of NFV, 5G core network can be easy to operate, fast to deploy, and painless to scaled. However, is the architecture of 5G core network already meet the 3 requirements nowadays? Will it suffer from high throughput and low latency only with the feature of NFV?
This thesis with focus on the problems of high throughput and low latency. We start from some scenario observation, propose an inter-communication solution to low down the control plane communication delay and improve the user plane traffic forwarding throughput. We also implement the proof of concept to this solution and provide a new core network implementation. Without losing the benefit of NFV, using DPDK and shared memory, we carefully rich zero-copy control plane communication. We also provide fast rule lookup with high throughput forwarding in user plane.
In the end, we evaluation our 5G core and proof our user traffic can rich 11 times more efficient than origin. And our control plane latency can have one over two times then the origin one as well.
"""

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#  url: https://twitter.com
#  icon_pack: fab
#  icon: twitter

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

links:


# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
