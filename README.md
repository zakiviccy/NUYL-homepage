<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Nagoya University Yamazato Laboratory Homepage
</h1>

このサイトは [Gatsby](https://www.gatsbyjs.com/) を使って作成しています．

### 注意：

Github のアカウントがあることを前提にしています。

大学関係者であれば[Github Pro アカウント](https://docs.github.com/ja/education/explore-the-benefits-of-teaching-and-learning-with-github-education/use-github-in-your-classroom-and-research/apply-for-an-educator-or-researcher-discount)を取得できます。

また、ビルドには `yarn` もしくは　`npm` が必要になります。

# NULY-homepage

## 🚀 インストール

まず、Github からクローンします。
適当な作業ディレクトに移動して、以下を実行。

```
% git clone git@github.com:Nagoya-Univ-Yamazato-Lab/NUYL-homepage.git
```

クローンしたディレクトに移動し、そこで作業します。

```
% cd academic-central
% ls
CODE_OF_CONDUCT.md LICENSE            _headers           gatsby-node.js     netlify.toml       renovate.json      static
CONTRIBUTING.md    README.md          gatsby-config.js   lambda             package.json       src                yarn.lock
```

🧐 What's inside?

ディレクトリは以下のようになっています．

```
$ tree -L 1
.
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── PULL_REQUEST_TEMPLATE.md
├── README.md
├── _headers
├── gatsby-config.js
├── gatsby-node.js
├── lambda
├── netlify.toml
├── node_modules
├── package.json
├── public
├── renovate.json
├── src
├── static
├── tmp
└── yarn.lock
```

以下，重要なものだけ説明します．

/node_modules:
ここに npm package でインストールしたモジュールが入ります．
このディレクトリに対して特段のアクションは必要ありません．ほっとけば良いです．

/src:
このディレクトリに公開用のファイルが一式入ります．
つまり，ブラウザで表示するのに必要なファイルが格納されています．
従って，このディレクトリに入っているファイルの修正，追加，削除することで Web ページのデザインを行います．

/static:
このディレクトリは，Gatsby では参照されるのみで特段の操作は行いません．
従って，こちらには画像ファイルや既に作成してある静的ファイルなどをおきます．
画像ファイルは`/static/img/`にあります。なお、イラストレータで作成した元データも入っていますので、適宜修正の上ご利用下さい。

/public:
公開用のディレクトリです．
gatsby build を実行すると，このディレクトリに公開用ファイルが生成されます．
また，gatsby clean を実行すると，このディレクトリとキャッシュがクリアされます．

.gitignore:
Github リポジトリから除外するファイルを指定します．

gatsby-config.js:
Gatsby サイトの設定ファイルです．

gatsby-node.js:
Gatsby Node API の設定ファイルです．

package-lock.json (See package.json below, first).
npm によって自動生成されるファイルです．

package.json:
Node で実行するパッケージを指定するファイルです．

README.md:
このファイルです．

### 環境構築

`yarn` で環境構築を行います。

```
% yarn
```

`npm install` でも OK ですが、`yarn`の方が早いです。
なお、`yarn`と`npm`を混在して使うと誤動作する場合がありますので、やめましょう。

## ビルド (build)

ビルドとは、サイトを公開するための html, Javascript や CSS ファイルを作成することを言います。
ビルドが通れば Warning が出ても問題ありません。

ビルドは以下のコマンドで実行できます。

```
% gatsby clean && gatsby build
(yarn run clean; yarn run build でもOK)
```

最初の `gatsby clean` はキャッシュや不要ファイルを削除するコマンドです。
`yarn run clean, yarn run build` は `package.json`で定義されています。

## ディベロプ (develop)

ディベロプとは、公開前の一次チェックをするために html, Javascript や CSS ファイルを作成することを言います。

```
% gatsby clean && gatsby develop
(yarn run clean; yarn run develop でもOK)
```

http://localhost:8000/ で見ることができます．

## 公開

Github Actions を設定してありますので，github の main branch に push すると自動でスクリプトが走り，公開ファイルを転送します．
Github Actions の設定ファイルは `.github/workflows/manual.yml` です．

# コンテンツの追加，修正，削除

コンテンツデータは，src/pages に入っているマークダウンファイルです．

```
$ tree
.
├── 404.js
├── App.tsx
├── en
│   ├── Image-sensor-communication.md
│   ├── OER.md
│   ├── Optical-Wireless-Communications-OWC-Workshop.md
│   ├── Prospective-students.md
│   ├── Sub-threshold-signal-detection-using-stochastic-resonance.md
│   ├── index.md
│   ├── news
│   │   ├── 2022-02-22-Fumiya-OJIKA-won-3rd-place-at-Graduation-Research-Presentation.md
│   │   ├── 2022-03-04-Jinxing-ZHENG-received-the-Encouragement-Award.md
│   │   ├── 2022-05-20-IEEE-ICC-Workshop-on-OWC.md
│   │   ├── 2022-06-20-Zhengqiang-TANG-received-2021-IEICE-Tokai-Branch-Student-Research-Encouragement-Award.md
│   │   ├── 2022-08-22-to-prospective-research-students.md
│   │   ├── 20220930−Hideki-Omote-joined-our-group.md
│   │   └── index.js
│   ├── publications.md
│   ├── research.md
│   └── team
│       ├── 2021.md
│       ├── Takaya-Yamazato.md
│       └── index.md
├── index.md
├── inquiry.js
├── news
│   ├── 2022-02-22-Fumiya-OJIKA-won-3rd-place-at-Graduation-Research-Presentation.md
│   ├── 2022-03-04-Jinxing-ZHENG-received-the-Encouragement-Award.md
│   ├── 2022-05-20-IEEE-ICC-Workshop-on-OWC.md
│   ├── 2022-06-20-Zhengqiang-TANG-received-2021-IEICE-Tokai-Branch-Student-Research-Encouragement-Award.md
│   ├── 2022-07-06-WWL-Let-us-draw-fractals-using-Python.md
│   ├── 2022-08-12-To-WWL-Seminar-Participants.md
│   ├── 2022-08-13-WWL-seminar-will-be-held-today.md
│   ├── 20220930−Hideki-Omote-joined-our-group.md
│   └── index.js
├── research
．．．
```

## コンテンツの修正

src/pages のマークダウンファイルを編集してください．

ほとんどの場合はニュース，つまり `src/pages/news/`（和文） と `src/pages/en/news/`（英文） を編集すれば良いです．

## コンテンツの削除

src/pages のマークダウンファイルを削除してください．

## コンテンツの追加

src/pages に新しいマークダウンファイルを追加してください．
マークダウンファイルは，同じディレクトリにあるファイルをコピーし，ファイル名を変更して作成するのが早いです．
このとき，マークダウンファイルに記載のフォーマットは変更しないようにしてください．
特に上段の Frontmatter の項目は src/templates/\*.js が参照しますので，コロン以降のみ変更するようにしてください．

以下，src/news の 2022-02-22-Fumiya-OJIKA-won-3rd-place-at-Graduation-Research-Presentation.md を例に説明します．

ファイル名がそのまま slug になります．たとえば，この例ですと，

https://yamazato.nuee.nagoya-u.ac.jp/news/2022-02-22-Fumiya-OJIKA-won-3rd-place-at-Graduation-Research-Presentation/

となります．

src/pages/news/2022-02-22-Fumiya-OJIKA-won-3rd-place-at-Graduation-Research-Presentation.md
は以下のようになっています．

```
---
templateKey: blog-post
title: 小鹿文也くんが卒研発表会で第3位になりました
date: 2022-02-22T01:39:55.096Z
description: 2022年02月22日に開催された名古屋大学電気電子・情報工学科合同卒業研究発表会(片山研，武田研，長谷川研，藤井研，山里研)で小鹿文也くんが第3位になりました．
featuredpost: true
featuredimage: /img/coffee.png
tags:
  - 受賞
  - 電気電子・情報工学科合同卒業研究発表会
---

おめでとうございます！

.....

```

ここで，`templateKey: blog-post` は変更してはいけません．
この templateKey は src/pages 以下のディレクトリでそれぞれ指定され，指定されたテンプレート(src/pages/templates/blog-post.js)を利用して表示用ファイルが生成されます．
ニュース（和文）の場合は templateKey を blog-post と指定しています．
英文の templateKey は blog-post-en です．

`title` はタイトルですので，適宜修正してください．

`description` は概要ですので，適宜修正してください．

`featuredpost: true` はそのまま変更しなくて結構です．

`featuredimage` はアイキャッチ画像になりますが，現在は表示しないように設定しています．

<!-- ディフォルト画像は static/img/ にある画像です．
アップロードして利用したい場合には static/img/ におき，/img/ファイル名 で指定してください．
たとえば，static/img/coffee.png を指定する場合は `featuredimage: /img/coffee.png` となります． -->

`date` は掲載日ですので，適宜修正してください．

`tags` はタグになります．タグは上に記載のように「-」で一行にひとつ書いてください．

ここまでが，Frontmatter です．
「---」以降が本文になり，マークダウン形式で記載してください．

この例ですと

```
おめでとうございます！
```

が本文になり，マークダウン形式で記載されています．

なお，画像を入れたい場合は，マークダウンファイルと同じフォルダに画像ファイルを入れ，

```
## タイトルありの画像を埋め込む
![代替テキスト](画像のファイル名 "画像タイトル")

## タイトル無しの画像を埋め込む
![代替テキスト](画像のファイル名)
```

を指定してください．

src/pages/research/OER/wwl/index.md

が参考になるでしょう．

# Github でのデータの追加・修正・削除

Github 上では編集内容が問題無いことの確認ができません．
できれば，自身の PC で `gatsby develop` で問題無いことを確認の上，Github へ push することをお勧めします．

その場合，データ修正は main branch では行わず，branch をきってからデータ修正を行ってください．
データ修正後は pull request を行い，main branch へマージしてください．

面倒ですが，main branch とは異なる branch で作業することで，思わぬミスを防ぐことができますので安全です．

なお，このサイトは Github Actions を設定してあります．
Github の main branch に push すると自動でスクリプトが走り，html 公開ファイルを山里研ホームページへ転送します．
