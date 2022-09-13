---
title: "PPPoE Line 無法連線問題"
subtitle: "MTU 與 MSS 問題"
summary: ""
authors: ["Chia-An Lee"]
tags: ["Linux", "PPPoE", "NAT"]
categories: ["network"]
date: 2022-09-08T08:46:29+08:00
lastmod: 2022-09-08T20:00:00+08:00
featured: false
draft: false

image:
  caption: ""
  focal_point: ""
  preview_only: false

---

由於曾經想把家中的 NAT gateway 全部放到 Linux server 上，做包含 [PPPoE 撥接](../network_linux_pppoe)、NAT、與 DHCP 的工作，同時可以自由地記憶 mac address、下 firewall 規則、架設 web proxy server 等，不需要再過小烏龜與它家 NAT 打 port forwarding，因此著手了建置。

在完成 PPPoE 建置後，詐用之下並沒有什麼太大的問題，然而偶有新建立連線時速度較慢的問題。一開始我並不太在意，然而當家人反映 Line 在 wifi 下無法正常傳送訊息，只有在 LTE 網路下才可以時，便發現好像真的是我的網路架設有問題。

在確認 LINE 的網頁也觸及不到後，便方便確定可以直接用 LINE 網站當 debug target。在觀察問題時發現如果使用 Linux 軟撥接，封包會止步於東京的 Router (使用 traceroute 或 mtr 測試)，但如果使用小烏龜硬撥接在過東京之後也沒有回復，但 LINE 網頁是可以 access 的，因此懷疑 LINE server 只是沒有開 ICMP response。

接著試著用 tcpdump 把封包抓出來檢查，比較軟撥接與硬撥接封包差異，看起來似乎只差在軟撥接封包 MTU 為 1492，為了增加 8 byte 的 PPPoE header，而硬撥接莫名的可以放 1500 (也許上面的機器 MTU 有開超過 1500)，理論上 MTU 只有過大才會有問題，太小應該只會有效能問題而已。

而後繼續細看 TCP 的封包內容，看起來硬撥接時可以做完完整的 handshark，可是軟撥接時只能做到 server hello，所以代表其實封包是有送到 LINE 的 server 上，只是在三方交握時莫名的被拒絕，而又觀察 header 內容，會發現 server hello 的 sequence number 會出錯，除錯到此懷疑要馬是 MTU 的問題，要馬就是 TCP 的問題，然而就是想不出到底 root cause 在哪。

在走投無路下，嘗試詢問在 AWS 工作的大神學弟，結果學弟一比較之下馬上跟我講原因。原來是 TCP MSS 的問題，在 TCP header 裡面會有一個 MSS (maxiumu segment size) 用來告知兩端該放多少 size 的 payload。在連線到一般的 server 時由於兩方都沒有要交換的 MSS，因此照著 MTU 的大小放多可以正常工作，可是當其中一端有要求 MSS (像是 LINE server) 可是另外一端沒有時，就會以 MSS 的大小放置 payload，而常見的 MSS 是 1460 (1500 (MTU) - 40 (IP/TCP header))，然後懷疑由於 LINE 沒有開 ICMP 功能因此無法透過 Path MTU Discovery (PMTUD)，又有手動塞 MSS 1460，然而 client 又不會跟其溝通，因此永遠用大於可接受的封包大小傳送資料。

解決方法是要嘗試讓 server 知道 MSS 要變小，並且我需要在 gateway (NAT server) 上設定，而不是在 client 上一台一台設。Linux 上常見做法有兩種，一種做法是在防火牆上下規定 TCPMSS: `iptables -A FORWARD -p tcp --tcp-flags SYN,RST SYN- j TCPMSS --set-mss 1452` (1452 = 1500 - 8 PPPoE header - 40 IP/TCP header)，然而我的防火牆是用 firewalld 設定，不管寫 iptables 或寫 firewalld 例外規定都感覺很彆扭，因此用第二種作法在 route 上面設定 advmss: `ip route add default dev ethX mtu 1492 advmss 1452`，後來發現如果改用 network-scripts 設定 PPPoE 可以直接有 `CLAMPMSS=1452`，所以就改用 network-scripts 的設定方式了。BTW 我看網路上很多人都把 CLAMPMSS 設定成 1412，不過好像是 PPPoE 有不同種長度的 header (?)。

## Reference

- [TCP maximum segment size 是什麼以及是如何決定的](https://medium.com/fcamels-notes/tcp-maximum-segment-size-%E6%98%AF%E4%BB%80%E9%BA%BC%E4%BB%A5%E5%8F%8A%E6%98%AF%E5%A6%82%E4%BD%95%E6%B1%BA%E5%AE%9A%E7%9A%84-b5fd9005702e)
