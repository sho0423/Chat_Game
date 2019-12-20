# git

何はともあれ

`git branch -vv`

を実行して自分のローカルブランチの状況を確認してください。
この時に自分のブランチが同じ名前のリモートブランチを追跡している状態にあるのが望ましいです。
    もしその状態にない場合
  
  `git branch -u origin/branch_A branch_B`
  
  のようにすることで、リモートの origin/branch_A を branch_B の上流ブランチに設定できます。こうすることで今後この branch_B で git pull や git push を引数なしで実行した時に branch_A を参照します。ちゃんと出来たか、
  
  `git branch -vv`
  
  で確認してね？

`git checkout develop`

でdevelopブランチへ移動した後、pullして最新の状態に更新してください。
  この段階でコンフリクトを解消する必要がある場合、適宜対応してください。場合によってはコンフリクト解消した後にローカルdevelopをpushしてもらうかもしれません。

各自の作業ブランチへcheckoutしてください。なお
リモートにはすでに
- master
  - develop
    - side
    - dialogue
    - header
    - status
    
という構造の6つのブランチを作成しています。
develop -> side
と移った場合、

`git merge develop`

でdevelopブランチの最新の状況をsideに取り込みます。コンフリクトを解消するのはこのタイミングです。
ここでの解消方法と先ほどdevelopをpullした時の解消方法に違いが起きないように注意してください。そうでないとコンフリクトを解消したことにはなりません。
コンフリクトを解消したらリモートのsideにpushしてください。

pushに成功したときは、githubでpull requestを行ってください。
今回の場合、`side -> develop`のプルリク申請です。

プルリクに対して僕が目を通して許可したもののみ、リモートdevelopへ反映させます。このような流れを繰り返すことでdevelopを更新していきます。
