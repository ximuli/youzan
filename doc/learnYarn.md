# yarn 笔记

> packgeName 是指包的名称

## 安装包

* yarn add packageName（默认 --save）

记录到 package.json 的 dependencies 下

* yarn add packageName --dev （或者 -D）

记录到 package.json 的 devDependencies 下，表示只是开发者使用的包

* yarn global add packageName

全局安装

## 运行脚本

* yarn run

如果你不指定一个脚本给 yarn run 命令，run 命令会列出包里所有可运行的脚本。

* yarn run xxx

运行 package.json 下 scripts 中的命令


