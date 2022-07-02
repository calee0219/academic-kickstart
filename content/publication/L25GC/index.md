---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "L25GC: A Low Latency 5G Core Network based on High-Performance NFV Platforms"
authors: ["Vivek Jain", "Hao-Tse Chu", "Shixiong Qi", "Chia-An Lee", "Hung-Cheng Chang", "Cheng-Ying Hsieh", "K. K. Ramakrishnan", "Jyh-Cheng Chen"]
date: 2022-08-23T00:00:00+08:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-08-23T16:42:00+02:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "L25GC: A Low Latency 5G Core Network based on High-Performance NFV Platforms"
publication_short: "SIGCOMM 2022"

abstract: "Cellular network control procedures (e.g., mobility, idle-active transition to conserve energy) directly influence data plane behavior, impacting user-experienced delay. Recognizing this control-data plane interdependence, L25GC re-architects the 5G Core (5GC) network, and its processing, to reduce latency of control plane operations and their impact on the data plane. Exploiting shared memory, L25GC eliminates message serialization and HTTP processing overheads, while being 3GPP-standards compliant. We improve data plane processing by factoring the functions to avoid control-data plane interference, and using scalable, flow-level packet classifiers for forwarding-rule lookups. Utilizing buffers at the 5GC, L25GC implements paging, and an intelligent handover scheme avoiding 3GPP’s hairpin routing, and data loss caused by limited buffering at 5G base stations, reduces delay and unnecessary message processing. L25GC’s integrated failure resiliency transparently recovers from failures of 5GC software network functions and hardware much faster than 3GPP’s reattach recovery procedure. L25GC is built based on free5GC, an open-source kernel-based 5GC implementation. L25GC reduces event completion time by ∼50% for several control plane events and improves data packet latency (due to improved control plane communication) by ∼2×, during paging and handover events, compared to free5GC. L25GC’s design is general, although current implementation supports a limited number of user sessions."

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

url_pdf: ""
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source: "https://conferences.sigcomm.org/sigcomm/2022/program.html"
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
