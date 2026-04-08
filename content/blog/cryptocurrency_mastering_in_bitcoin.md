---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Mastering in Bitcoin 讀書筆記"
subtitle: "加密貨幣"
summary: ""
authors: ["Chia-An Lee"]
tags: ["introduction", "crypto currency", "block chain", "bitcoin"]
categories: ["crypto currency"]
date: 2021-08-09T07:48:37+08:00
lastmod: 2021-08-09T07:48:37+08:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---


[Mastering Bitcoin](https://www.safaribooksonline.com/library/view/mastering-bitcoin-2nd/9781491954379/)
[精通比特幣](http://zhibimo.com/read/wang-miao/mastering-bitcoin/index.html)

## Ch1 / Ch2
- [Master in Bitcoin CH1,2 投影片](https://hackmd.io/p/H1SAr2jrb#)

## Ch3 比特幣客戶端
以 [bitcoin core](https://github.com/bitcoin/bitcoin) 為主

也可以到 [這裡](https://bitcoin.org/en/choose-your-wallet) 直接選擇 binary file 執行

- 下載並切換版本
    ```shell
    # Download
    git clone https://github.com/bitcoin/bitcoin.git
    cd bitcoin
    # 檢查版本 & 切換
    git tag
    git checkout {tag}
    ```

- 自動產生相關檔案
`./autogen.sh`
- 參數設定
    ```shell
    ./configure --help
    ./configure {需要的參數}
    ```
    之後軟體會檢查所需要的相關軟體，若沒有，會中途中止，安裝完後重跑即可
    過程中可能會遇到一些 bug，可以先到 [這裡](https://github.com/bitcoin/bitcoin/blob/master/doc/build-unix.md) 參考需要安裝的東西
- 編譯與安裝
    ```shell
    make
    sudo make install
    ```
### 開啟
安裝完後，應該會有 `bitcoind`, `bitcoin-cli` 等指令可以用
- 用 `which bitcoind` 可以查看安裝位置
- `bitcoind`: 開啟服務
- 在 `~/.bitcoin/bitcoin.conf` 修改設定檔
    - 用戶名 & 密碼
        ```shell
        rpcuser=bitcoinrpc
        rpcpassword=2XA4DuKNCbtZXsBQRRNDEwEY2nM6M4H9Tx5dFjoAVVbK
        ```
    - 其他設定參數
        `bitcoind --help`
- `bitcoind --daemon`: 在後台執行
- 第一次運行時，會同步區塊，至少會有 122GB 以上，可能需要 2 天的時間下載區塊...
![](https://i.imgur.com/Lz3S2OR.png)

### JSON-RPC API
- bitcoin 提供 json-rpc api
- `bitcoin-cli help`
- `bitcoin-cli getinfo`: 獲得基本資訊 (網路節點，錢包，區塊數據...)
    - version, protocolversion, walletversion: 版本
    - balance: 錢包餘額
    - ...

### 錢包設定及加密
- 在生成密鑰或其他指令前，需要先對錢包加密
    - `bitcoin-cli encryptwallet {密碼}`
- 解鎖錢包
    - `bitcoin-cli walletpassp {密碼} {時間/秒}`

### 備份
- `bitcoin-cli backupwallet {檔名}`: 匯出成可以匯入的檔案
- `bitcoin-cli importwallet {檔名}` (需要是錢包解鎖的狀態)
- `bitcoin-cli dumpwallet {檔名}`: 將錢包匯出成人看得懂的明文

### 地址 & 交易
- `bitcoin-cli getnewaddress`: 產生新的 address
- `bitcoin-cli getreceivedbyaddress {地址} 0`: 若有匯錢進來，可以檢查匯入的錢
- `bitcoin-cli listtransactions`: 列出所有交易
- `bitcoin-cli listaddressbyaccount ""`: 列出所有地址
- `bitcoin-cli getbalence`: 列出錢包總額
- `bitcoin-cli gettransaction {txid}`: 列出 txid 的交易明細

### 區塊
- `bitcoin-cli getblock {區塊的 hash}`: 查看這個 block 的內容

## Ch4 密鑰-地址-錢包
![](https://i.imgur.com/zeXOX07.png)

### 密鑰
- $1$ ~ $2^{256}$
- 生成方法：密碼學安全隨機源取出一串隨機字串 -> sha256 -> 檢查是否小於 $n-1$
- 256 bit，但可以用不同的表示法
![](https://i.imgur.com/8gjTSqB.png)
- base58check->hex: `sx base58check-decode ...`
- hex->base58check: `sx base58check-encode {hex} {prefix}`


### 公鑰
- 用 ECC (橢圓曲線) 從私鑰生成
- 公鑰 = 私鑰 * G
- G: 生成點，bitcoin 的生成點是固定的
- secp256k1 標準的橢圓曲線
- $y^2=(x^3+7)$ over $F_p$
- $y^2\mod p = (x^3+7)\mod p$
- $p = 2^{256}-2^{32}-2^9-2^8-2^7-2^6-2^4-1$
- 無窮點對 (0)
- 加法定義$P_1=P_2+P_3$
- $K=k*G$
![](https://i.imgur.com/nT8sxsu.png)
- 格式
    - 非壓縮型
        - prefix: 04
        - K = 04xy
        - 520bit: 8 + 256 + 256
    - 壓縮型
        - prefix: 02 / 03
        - 有 x，有曲線方程式，可算出 y
        - 解方程式時，y 有平方 => 有兩解 => 用 02 / 03 區別奇偶
    - *壓縮格式公鑰產生的地址會與非壓縮的不一樣*
        - => 現在的協定多以非壓縮為主
        - but 應該還是要能支援非壓縮
        - WIF (錢包導入格式) 應該要標示出私鑰產生的公鑰是否為壓縮格式 (基本上就是要說明這把私鑰最終產生的地址應該要是哪一個)
        - 壓縮格式私鑰:
            - 私鑰 + '01'
            - 用來表示這個私鑰的 address 是用壓縮格式公鑰產生的
            - 事實上會比私鑰長 XD
        - WIF
            - 使用壓縮格式導出私鑰時，永遠只用 WIF 壓縮格式 (K or L 前綴 (因為經過 Base58Check 格式作為最終輸出格式))
            - 使用非壓縮，導出時使用 WIF 格式 (5 前綴)

### 地址
- hash160 / double hash
- address = RIPEMD160(SHA256(K))
- 經過 base58check 編碼呈現

![](https://i.imgur.com/lc2hEYS.png)

- Base58: base64 去掉易混淆單字 ex. O, 0, I, l...
- Base58Check: Base58 + error check
- $checksum = sha256(sha256(prefix+data))$ (data 是公鑰哈希，而不是純公鑰)
- 只取前四個 bit
![](https://i.imgur.com/7xU5Ory.png)
- prefix
![](https://i.imgur.com/lIX7xIr.png)

### 比特幣錢包
錢包是私鑰的容器
- 非確定性錢包：
    - 隨機生成 n 個私鑰，每個只使用一次
    - 需要整份備份
- 確定性種子錢包
    - 單向離像方程式
    - 公共種子
    - 種子可以產生所有錢包裡的私鑰，因此只要備份種子就好了
    - 輔助記憶詞彙
        - 易於記憶
        - 種子對應確定性錢包的隨機數
        - BIP0039
            1. 生成 128~256 位 (2^...) 的隨機數
            2. 用 sha256 hash，取前幾位，生成 check bit
            3. num + check bit
            4. 把數字分解成 11 位不同的集合 (11 bit 切一組，切成 n 組)，與預先定義好的字典做對應
            5. 生成 12 ~ 24 個 word 的助記碼
            ![](https://i.imgur.com/KoQcb3F.png)

- 分層性錢包 (HD 錢包)
![](https://i.imgur.com/bz9ljMP.png)
    - BIP0032 標準
    - 母鑰匙生成子鑰匙
    - 樹狀結構
    - 建立公共密鑰的序列而不需要訪問相對的私鑰
    - 每筆交易發行不同的公鑰
    - 從種子產生 HD
    ![](https://i.imgur.com/FE5SOSD.png)
    ![](http://www.pointsoftware.ch/wp-content/uploads/2014/02/hmac-sha256.png =150x)
    - CKD (child key derivation)
    - 三個主要元素：
        - 母私鑰
        - 鏈碼 (256bit)
        - 索引號 (index, 32bit)
    - 母公鑰 + 鏈碼 + 索引號 => HMAC-sha512 => 分成兩個 256 bit
    ![](https://i.imgur.com/K9fqChd.png)
    - 子密鑰無法 trace back 母密鑰
    - 子密鑰在沒有鏈碼下，也無法 trace 兄弟密鑰
### 擴展鑰匙 (extending key)
- 鑰匙 + 鏈碼
- 兩種
    - 密鑰 + 鏈碼
        - 可以衍生出子密鑰
    - 公鑰 + 鏈碼
        - 可以衍生出子公鑰
- 也是用 Base58Check 表示
    - 512 or 513 bit
    - 前綴 'xprv' or 'xpub'
### 硬化子密鑰
- 擴展公鑰可以衍生出所有鏈碼，只要有某一個子私鑰洩漏，就會從被洩露的子私鑰開始，得到所有私鑰 => 不夠安全
- 子私鑰 & 母鏈碼 可以推測母私鑰！！
- hardened derivation
![](https://i.imgur.com/eFRP2OW.png)

- 索引號
    - 32 bit
    - 正常衍生: $0$ ~ $2^{31-1}$
    - 強化衍生: $2^{31}$ ~ $2^{32-1}$

### 高級私鑰 & 地址
BIP0038: 使用另一個 key + AES 對私鑰加密
- 前綴: 6P
- 用 AES + key 轉換回前綴為 5 的 base58check 格式

### P2SH & 多重簽名地址
- P2SH: Pay-to-Script Hash
- P2SH 地址: 前綴 3
- 收益者不是地址所有人，而會是交易雙方
- 目前常用在 多重簽名地址 script
    - script 需要多個簽名來證明所有權
    - N 個密碼中，至少需要 M 個來簽，才能證明所有權
    - 詳細放在 ch5

### 靚號地址
- 地址中有指定的 pattern
    - ex. iloveyou......
- 用不斷的 hash 密鑰，直到找到符合 pattern 的密鑰
- 如果特定 pattern 夠長，可以增加地址比對時的安全性

### 紙錢包
- 將地址印在紙上，通常會配合 BIP0038 地址加密
- 可多次存入，但最好一次性提取，避免產生找零地址 (?)
- https://bitaddress.org
- https://bitcoinpaperwallet.com
![](https://i.imgur.com/1XjdFPz.jpg)

## Ch5 交易
### 交易生命週期

## Ch6 比特幣網路

## Ch7 區塊鏈
### 簡介
- 包含交易訊息由後向前有序連接
    - flat file
    - LevelDB (Google)
- 每一塊都指向前一塊
    - 垂直的 stack
    - 創世區塊為最底塊
    - 高度代表該區塊與創世區塊之間的距離
    - 頂端添加新區塊
- 區塊識別
    - 區塊頭做 SHA256 兩次
    - 利用區塊頭的父區塊 hash 值識別父區塊
    - 可以從最新的區塊一路往回追溯至創世區塊，形成區塊鏈
- 分岔
    - 每個區塊僅有一父區塊，但可能暫時擁有多個子區塊
    - 多個區塊幾乎同時被礦工挖出時發生
    - 解決方法後面會詳細說明
- 安全性
    - 若要竄改一區塊內容則必須重新計算該區塊 hash 值，接著更新子區塊頭的父區塊 hash 值，一直更新到最新的區塊為止，如此的計算資源龐大不易成功
    - 差不多六個區塊後可被竄改的機會非常低

### 區塊結構
- 包含交易訊息的資料結構
    - 區塊頭
        - 80 bytes
        - 區塊識別
    - 區塊主體
        - 大小可變
        - 紀錄交易
- 平均每筆交易至少 250 bytes
- 平均每個區塊至少 500 個交易
![](https://i.imgur.com/CjidmkR.png)

### 區塊頭
- 父區塊 hash 值
    - 用於指向父區塊
- Merkle root
    - 可有效總結區塊中所有交易的資料結構
- Nonce、難度目標、時間戳記與挖礦相關，會在之後說明
![](https://i.imgur.com/0FLk3tN.png)

### 區塊識別
- 區塊頭 hash 值
    - 32 bytes
    - SHA256 兩次區塊頭所得的數位指紋
    - 唯一明確的識別一個區塊
    - 第一個比特幣區塊頭 hash 值
    - ```000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26```
- 區塊高度
    - 創世區塊高度為零
    - 每增加一個區塊高度加一
    - 並不一定是唯一識別，在區塊鏈分岔時同一高度有多個區塊
- 兩者並不包含在區塊中，在節點接收區塊時計算並儲存，便於查詢檢索

### 創世區塊
- 2009 年創建
- 所有區塊的祖先
- 編入比特幣客戶端程式中，確保創世區塊不會改變，並從此建構區塊鏈
- [chainparams.cpp](https://goo.gl/SbnZuv) 中可以看到創世區塊詳細內容

### 區塊的連接
比特幣的完整節點是從創世節點到最新節點的一個本地副本，當接收到一個新區塊時，需驗證然後接到現有區塊上

- 檢查傳入的區塊頭並尋找父區塊
![](https://i.imgur.com/YTpywFx.png)

### Merkle tree
區塊中包含的所有交易以 Merkle tree 形式呈現

- hash 二元平衡樹
- 用於快速歸納和檢驗大規模數據完整性
- 快速驗證區塊中的交易是否存在

#### 建立方法
- hash 方法採用 double-SHA256
- 由葉節點建立到根節點
1. 將所有元素做 double-SHA256 後放入葉節點
2. 串聯兩節點的 hash 值做 double-SHA256 生成父節點
3. 重複步驟 2 直到剩下一個節點為止，此點即為 Merkle root

![](https://i.imgur.com/uaRcghh.png)

- 若葉節點個數為奇數則將最後一筆交易重複一次，以維持偶數個葉節點

![](https://i.imgur.com/JpKEPLm.png)

#### 驗證交易存在
- 綠色為要驗證的交易對應的節點
- 藍色為 Merkle 路徑

![](https://i.imgur.com/7Lis8PB.png)

若要驗證交易是否存在可以參考 Merkle tree 建立方法，將 Merkle 路徑與該交易依序做 hash 生成藍色虛線的節點，最終比較 Merkle root 是否相同，即可得知該交易是否存在於區塊中

#### 效率
- 時間複雜度 ${O(log\ n)}$

![](https://i.imgur.com/UUb0RXT.png)

### 簡單支付驗證 (SPV)
利用 Merkel tree 驗證交易，SPV 不下載交易紀錄和區塊，僅保存區塊頭，利用 Merkle 路徑驗證交易存在

- Merkel 區塊
    - 區塊頭
    - Merkel 路徑

## Ch8 挖礦與共識
### 簡介
- 挖礦
    - 增加比特幣
    - 保護比特幣系統安全
    - 提供算力獲取比特幣
- 礦工
    - 驗證每筆交易並記錄到區塊鏈中
    - 平均 10 分鐘挖出一個新的區塊
    - 得到新幣獎勵和手續費
    - 工作量證明
- 發行
    - 預計發行到 2140 年，上限為 2100 萬個
    - 每隔 210000 塊 (大約 4 年)，新區塊挖出獎勵減半
    - 2009 / 01 獎勵 50 比特幣
    - 2012 / 11 獎勵 25 比特幣
    - 2016 / 07 獎勵 12.5 比特幣

#### 比特幣經濟學和貨幣創造

![](https://i.imgur.com/dEiBmbL.png)

- 抗通膨
    - 總量有限
    - 發行速度遞減
- 通縮貨幣
    - 貨幣供需不平衡所導致增值
    - 隨時間增長有愈來愈強的購買力
    - 是否會有隱藏未知的經濟風險

### 去中心化共識
- 沒有經過明確的投票或固定達成共識的時間
- 異步互動更新
- 每個全節點依據綜合標準對每個交易進行獨立驗證
- 通過完成工作量證明演算法的驗算，礦工將交易紀錄獨立打包進新區塊
- 每個節點獨立的對新區塊進行檢驗並加入區塊鏈
- 每個節點對區塊鏈進行獨立選擇，在工作量證明機制下選擇累計工作量較大的區塊

### 交易的獨立檢驗
收到一個交易時先驗證交易，有效交易繼續傳播，無效則丟棄

![](https://i.imgur.com/qZJY7Ez.png)

詳細可參考 [AcceptToMemoryPool](https://github.com/bitcoin/bitcoin/blob/f088a1bb392eaecd912ff9bca6967a8f4765c2b7/src/validation.cpp#L894)、[CheckTransaction](https://github.com/bitcoin/bitcoin/blob/f90603ac6d24f5263649675d51233f1fce8b2ecd/src/consensus/tx_verify.cpp#L159)、[CheckInputs](https://github.com/bitcoin/bitcoin/blob/f088a1bb392eaecd912ff9bca6967a8f4765c2b7/src/validation.cpp#L1242)

- 隨時間可能會有所改變，為處理惡意攻擊或要使交易更多樣化而放寬
- 收到交易後對全網廣播前先驗證，並以接收順序建立交易池

### 挖礦節點
- 接收驗證交易並在新區塊中整合
- 隨時監聽新區塊，若有人已經打包出新區塊則放棄，繼續打包下一個區塊

### 整合交易至區塊
- 在接收到新節點時，將交易池中已打包的交易移除

#### 交易塊齡、礦工費和優先級
- 塊齡為 UTXO 被記錄到區塊前所經過的區塊數
- 按照礦工費排序，優先將高礦工費的交易打包
- 優先級
    - ```Priority = Sum (Value of input * Input Age) / Transaction Size```
    - 如果區塊有足夠空間，則高優先級的交易將不需礦工費

#### 鑄幣交易 (coinbase)
- 打包出新區塊的獎勵
- 沒有輸入，不消耗 UTXO
- 輸出到礦工地址

#### coinbase 獎勵與礦工費
- GetBlockValue
```cpp
int64_t GetBlockValue(int nHeight, int64_t nFees)
{
    int64_t nSubsidy = 50 * COIN;
    int halvings = nHeight / Params().SubsidyHalvingInterval(); 
                            //210000 blocks
    
    if (halvings >= 64)
        return nFees;
        
    nSubsidy >>= halvings;
    
    return nSubsidy + nFees;
}
```
- 礦工費
    - ```Total Fees = Sum(Inputs) Sum(Outputs)```

#### 鑄幣交易結構
- 普通交易
![](https://i.imgur.com/uvLAOYc.png)

- 鑄幣交易
![](https://i.imgur.com/symOzly.png)

#### coinbase 數據
- 不包含 scriptSig 以 coinbase 取代，最小 2 bytes 最大 100 bytes
- 除了開始的幾個 bytes 外，礦工可以任意填充其他部分
- 創世區塊中的 coinbase
> The Times 03/Jan/2009 Chancellor on brink of second bailout for banks
- 利用 coinbase 實現 extra nonce 功能，標示挖出的礦池

### 構造區塊頭
![](https://i.imgur.com/rL9fO9l.png)

### 建構區塊
藉由修改 nonce 值重複計算區塊頭 hash 值，直到符合難度條件

#### 工作量證明算法
- hash 輸入長度任意，輸出長度固定且對於不同字串輸出幾乎不會相同，可作為數位指紋
- 有意選擇輸入並生成一個特定 hash 值幾乎不可能
- 礦工藉由修改 nonce 直到區塊頭 hash 值足夠小
- 可藉由統計估算礦工工作量

#### 難度表示
- 難度位、bits
- 前 1 byte 為冪次後為係數
- ```target = coefficient * 2^(8 * (exponent – 3))```
- 範例：難度位的值為 0x1903a30c
```
target = 0x03a30c * 2^(0x08 * (0x19 0x03))
=> target = 0x03a30c * 2^(0x08 * 0x16)
=> target = 0x03a30c * 2^0xB0
=> target = 0x0000000000000003A30C00000000000000000000000000000000000000000000
```

#### 難度目標與難度調整
- 維持 10 分鐘生成一個區塊
- 每個完整節點自動調整
    - 每 2016 個區塊的時間與 20160 分鐘比較來調整難度
    - ```New Difficulty = Old Difficulty * (Actual Time of Last 2016 Blocks / 20160 minutes)```
    - 每次調整幅度最高為 4 倍，平衡算力和難度巨大差異
- 難度與交易量和金額無關

### 成功建構區塊
算出符合條件的特定 nonce 值後立即發給相鄰節點，其他節點驗證通過後在發送出去，同時放棄打包同高度的區塊立即開始打包下一塊

### 檢驗新區塊
- 每個節點獨立驗證
![](https://i.imgur.com/ayJn4gL.png)

[檢查項目](#交易的獨立檢驗)

### 區塊鏈的組裝與選擇
- 將區塊集合至最大工作量證明的鏈上
- 節點維護的區塊
    - 連接到主鏈
    - 分支或備用鏈
    - 孤兒區塊
- 兩區塊在短時間內被挖出，節點可能會以相反的順序接收接收，造成孤兒區塊

#### 區塊練的分岔
- 區塊不同時間抵達節點導致不同副本不一致
- 每個節點延長最大工作量的鏈
- 最終可以收斂到一致的狀態

礦工幾乎同時挖到區塊，各自廣播出去形成分支

![](https://i.imgur.com/sNF9v5t.png)

其中一條鏈先挖到下一區塊

![](https://i.imgur.com/g9cOp4R.png)

重新共識收斂為同一主鏈

![](https://i.imgur.com/wvgC3DQ.png)

### 挖礦與算力競賽
極富競爭性並且算力以指數及成長
CPU ${\rightarrow}$ GPU ${\rightarrow}$ FPGA ${\rightarrow}$ ASIC

![](https://i.imgur.com/tOpvaLA.png)

![](https://i.imgur.com/14WoJbH.png)

#### 隨機值升位方案
算力增加使得難度增加，所需的隨機值不足
- 早期可以透過修改時間戳解決，但移動太多會變成無效區塊
- 利用 coinbase 交易可以在 coinbase script 裡寫入任意值，進而改變 Merkel root 作為額外隨機值來源

#### 礦池
- 礦工合作組成
    - 集合算力
    - 分享獎勵
    - 減少不確定性
- 設定較低的難度
    - 評估各礦工算力
    - 算出來的解並不一定滿足新區塊要求
    - 有時產出符合的區塊可以一起分潤

### 共識攻擊
- 51% 攻擊
    - 算力過大，30% 以上就有威脅
    - 至多可影響最近 10 個區塊
    - 實現雙花或拒絕他人交易
- 防禦
    - 等待 6 個以上區塊確認
    - 第三方等多方認證簽名

在算力以指數及增加的現今要達成攻擊難上加難
