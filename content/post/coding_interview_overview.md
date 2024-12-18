---
title: "Coding Interview 流程整理"
subtitle: "Coding Interview 流程整理與注意事項"
summary: ""
authors: ["Chia-An Lee"]
tags: ["interview", "Google", "Meta", "Booking.com"]
categories: ["experience", "interview"]
date: 2022-07-25T15:59:25+08:00
lastmod: 2022-07-25T20:00:00+08:00
featured: false
draft: false

image:
  caption: ""
  focal_point: ""
  preview_only: false

projects: []
---

這篇部落格主要著墨在 Coding Interview 的流程、注意事項，關於準備方法可以參考[這裡](https://calee.xyz/post/2022_get_jobs/#coding-interview)。

--- 2023 更新 ---

如果想要找 mock interview，可以來信 sz110010@gmail.com 詢問，想要幫忙修履歷的也可以寄來看看，但不保證有空幫忙 XD。

<!-- Google Calendar Appointment Scheduling begin -->
<link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
<script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
<script>
(function() {
  var target = document.currentScript;
  window.addEventListener('load', function() {
    calendar.schedulingButton.load({
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ10EEmxfEJfyec_e-58EktYERtAOp9E-kjF7olGPJC-Qfo5KltSpAUz0qgYwDkc02mlSQuYN20v?gv=true',
      color: '#039BE5',
      label: '預約 Mock Interview 時間',
      target,
    });
  });
})();
</script>
<!-- end Google Calendar Appointment Scheduling -->


PS. 不 qualify senior，請不要對幫助抱太大期待 XD

BTW 敝司 (Meta) 最近重新開缺了，如果有看到有興趣的職缺，歡迎準備英文姓名、email、CV，可以找我 reference，另外我會希望能跟您約個 con-call 認識一下~ 🤗

## 流程

### 時間掌握

一般來說 coding interview 時長大約是 45 分鐘，不過面試官通常不會很硬性的把你打斷，所以可以來回假設個五十分鐘。在 45 分鐘的時間裡預期會有兩個題目，有可能是主題與 follow up；也有可能是兩個獨立的題目；當然還有機會是只有一題 hard。

以 Google recuirter 提供的準備文件會建議第一題花 10 - 15 分鐘，其中五分鐘確認題意，五分鐘思考並表達解法，最後五分鐘實作與測試；第二題花 20 - 25 分鐘，五分鐘確認題意，十分鐘想解法與表達，最後十分鐘實作與測試。其理由是第一題通常比較簡單而第二題會比較困難。

不過我個人覺得要在 15 分鐘內解決一題偏困難，另外以我對 Google 的面試經驗覺得 Google 傾向於詢問一個主題與一個 follow up，並且 follow up 有時候並不太難，因此我會比較傾向配置 25 / 20。

在 Meta 的 coding interview 上面我的經驗是對方好像比較喜歡出獨立題目，並且一開始會有一題 warm up 題，盡量不要在 warm up 題花太多時間。

### 流程簡述

* 自我介紹 (不計入面試表現)
* 第一題
  * 面試官陳述題目
  * 與面試官確認題意
  * 表達解法
  * 分析複雜度
  * 實作
  * 測試 (dry run)
* 第二題
  * 重複第一題動作
* 反問面試官問題 (不計入面試表現)

### 自我介紹

一開始通常考官會請你自我介紹，以 Google 的說法是讓妳不要太緊張的暖身，並不算入面試狀態，面試官也不太會認真聽，當然偶爾也有面試官會直接忽略這個階段，另外在這邊要注意自我介紹最好**不要超過一分鐘**，以免壓縮到後面解題的時間 (自我介紹要準備 1 / 3 / 5 分鐘的版本，如果是在 experience interview 或 behavior interver 就可以使用 5 或 3 分鐘版)。

### 題目應答

首先考官會陳述題目，注意考官陳述的題目有沒有什麼關鍵字，有可能就是題目最佳化的關鍵。

在考官陳述完題目後不要急於作答，先與考官確認題目意思與詢問不太清楚的資訊，永遠要記得做這個步驟那怕你覺得題目超簡單，最少也可以問個 test case 的 constrain (範圍) / edge / boundary case。澄清題目的方法可以與考官詢問是否有範例測資會自己製造一個範例，並且透過範例找到解答的過程來確認理解是否正確。

OK, I think I understand the problem. Please give me one minute to think out the solution.

當理解完題意要開始想解法時，記得給一個 trigger word，由於 coding interview 大多數時間都是不斷的與面試官來回溝通，因此當需要一個安靜的時間可以講一下，讓面試官知道你須要想一下。

I have come out a solution. I want to start to present my solution.

當想到解法要開始敘述解法時，一樣可以有一個 trigger point。或如果你不太確定，也許可以說: I'm not quiet sure now, here's what I've thought about the problem. 並嘗試敘述你的想法。

在解釋解法的過程中，有兩種方法。其一是條列式的講出要做的步驟，並大略記錄下來，但要小心不要過於詳細到流於 pseudo code，這種表達方法的好處是之後實作時可以直接參考已經紀錄下來的流程，並且也在表達同時也想清楚要使用的資料結構，但壞處通常會花比較多時間，需要小心掌控時間。其二是直接透過 test case 來描述做法，舉例來說: 可以先排序 array (此時把範例複製出一份排序好)，然後透過 two pointer (劃出兩個 pointer) 向內搜尋 (同時移動 pointer 尋找並解釋)。這個方法的好處可以讓解釋上更具體，並且普遍上要花的時間比較少就能很清楚的解釋，不過壞處可能是之後要實作時沒有參照，我個人傾向後者。

That's all of my solution. Is it makes sense / sound reasonable?

完成你的 solution 後記得跟面試官確認，也許面試官會覺得不太合理、點出錯誤，或者複雜度不是面試官要的。有時面試官會在這裡跟你詢問演算法複雜度，也有時候會是在實作結束後問。如果面試官表示 ok 便可以開始實作，這時候可能會說: So I'll start my coding now. Is there any function template or maybe I just create a new function. 來確認是否有模板 (主要是要確認 input 的參數)。之後在實作上記得偶爾停下來敘述目前的狀態、這行 code 為什麼要寫，如果有比較重要的行數記得可以下註解，好的 coding style 也是 coding interview 的重要指標其中一環。可以多包 function 並假設 function 已經實作完成 (記得註解函式輸入出以及功能)，之後若有必要在回來時做函式細節，這樣可以有效的減少實作複雜度以節省時間。

I think I've finished the code, should we use some example to varify it / walk though the solution?

當完成實作後，一定要記得詢問是否需要驗證 (dry run)，大多數的 coding interview 不會有 compiler 但是會需要肉眼把測資餵進去驗證，大略說明在 code 的每一階段測資或變數目前的狀態。在這個階段先跑 general case，可以詢問直接拿前面的 sample case 來用 (general case)，但如果前面的 sample case 還是偏大，記得縮小後再拿來用，以免花太多時間講重複的東西。在 general case 講完後才來講 edge case，這時候可以說你知道有哪些 edge case，並且你已經在程式的 xxx 處把 edge case 判掉了。

在這樣玩成一個 round 後，也許考官會給出新的 follow up，又或者希望你再把複雜度壓更低，此時只要照個考官給予的 hint，再重複上面的動作即可 (也許不用重複確認題意)。

### 反問問題

在反問問題這個階段同樣不計入評比，但可以透過機會多多了解公司甚至是部門或這個職缺，或者單純閒聊人生。我比較喜歡問的問題有:

* What is your favorite part working here?
* What is the team culture like?
* What makes a successful PE / SRE / SWE?
* What do you think are the most important qualities for someone to be really successful in this position?
* What are the common career paths in this department?
* What are the biggest challenges the company / team is facing right now?
* Can you tell one of the best part and one of the worst part of your company or team?
* What do you learned most in your position?
* What is your daily work flow? / What is the tipical days looks like?
* 是否可以從頭到尾參與 Project，亦或 Project 容易受客戶影響而終結

## 複雜度注意事項

在分析複雜度上可以注意以下狀況

* stack space 是否有考慮進空間複雜度中
* union-find / recursive 的複雜度
* quick sort / hash table 等請表明是 average case 或中文說"均攤"
* string concate 的實做是完全複製或動態加長
* O(n) 的 n 代表什麼意思 (array 長度、heap 高度、tree 深度、...)
* 複雜度是只需要一個變數 n (其他變數保證比較小)，或是需要多個變數 n, m, h, ... (因為不保證關係)?
* 你的 tree 是否平衡，如果未平衡會如何，此時可以詢問考官是否可以假設平衡樹，因為實踐平衡樹可能不是時間下可以完成的 (快去查 Treap 來用嘴巴平衡 XD)
* 預處理的時間是否有考量進去

## 常用詞匯

英文面試上好用的句子

* I have couple of questions
* Would the input always be a XXX
* Can I assume that XXX? Can I make sure XXX?
* Should I need to consider for a really large input? What's the input constrain?
* What is the input. Is it the root of tree?
* DISTINCT?
* Is there always promised to be an result?
* How can I output results?
* How can I do if there is no valid result?
* How can I do if there are multiple results?
* Is the order of the output result matters? Or how should I order them?
* Can I assume that all the input are valid?

## 注意事項

一些在面試上可以注意的東西

* 如果有，自我介紹不要超過一分鐘
* 不要動任何考官給的東西，如果需要，複製出來使用
* 如果考官有給 hint，照著做就對了
* 不要羞於跟面試官尋求幫助，也許可以比較委婉地敘述目前的想法以及卡關的地方
* 注意測資是 int / float / long 等
* 重要的地方下註解
* 良好的 coding style、變數名稱、避免 dead code
* 注意 pass by reference or value、string mutable or immutable、字串複製還是單純加長
* 把實作假設成已完成的函式，詢問面試官是否可以之後若有時間再回來時做細節，並寫下良好的註解 (input / output / 函式用途)

## Reference

* [Cracking the coding interview](https://www.booksfree.org/cracking-the-coding-interview-6th-edition-189-programming-questions-and-solutions-pdf/)
* [Questions to ask the company during your interview](https://github.com/viraptor/reverse-interview)
* [Prepare for Your Google Interview: Coding](https://www.youtube.com/watch?v=6ZZX9iIgFoo)
* [Interview tips from Google Software Engineers](https://www.youtube.com/watch?v=XOtrOSatBoY)
* [How to ACE the Coding Interview](https://www.hackerearth.com/blog/developers/ace-coding-interviews/)
* [How to: Prepare for a Google Engineering Interview](https://www.youtube.com/watch?v=ko-KkSmp-Lk)
* [How I got into Google by Prajakta Tathavadkar](https://medium.com/@praajaktaa/how-i-got-into-google-161c97913b8b)
* [How I got into Google by Gourav Mittal](https://gourav-mittal.medium.com/how-i-got-into-google-a7d92f581951)
* [Average to Googler in Four Weeks: A Study Plan by Milan Naseri](https://www.linkedin.com/pulse/average-googler-four-weeks-study-plan-milad-naseri/)
* [My Preparation Journey for Google Interviews by Shantanu Kshire](https://medium.com/swlh/my-preparation-journey-for-google-interviews-f41e2dc3cdf9)
