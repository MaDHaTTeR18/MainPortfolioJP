<template>
  <div style="margin-bottom: 80px;">
    <h1>こんにちは！</h1>

    <div class="paragraph">
      <div>
        <strong>ハサンブイアンイットマン</strong>と申します。
        現在は日本のゲーム開発会社でサーバープログラマーとして勤務し、約3年間オンラインゲームの開発と運用に携わってきました。
        主に PHPやC++を用いたAPI設計・実装、LaravelやKubernetesを活用したインフラ構築、MySQLやRedisによるデータベース運用などを担当し、安定性とスケーラビリティを重視したバックエンド開発に取り組んでいます。また、Unreal EngineやUnityとの連携開発を通じて、ゲームクライアントとサーバーをつなぐ仕組みづくりにも経験があります。
        趣味はゲーム、アニメ、映画、本を楽しむことで、自由時間には新しい技術を学び続けています。これまでに培ったサーバーサイドの知識と開発経験を活かし、将来的にはゲームデザイン領域にも挑戦し、多くのプレイヤーに愛されるゲーム制作に貢献していきたいと考えています。

      </div>

      <div style="margin-top: 20px;">私は取り組んできました <router-link to="/game-projects">プロジェクト。</router-link></div>

      <div style="margin-top: 40px;">私はゲームを作るという夢を追いかけるために、現在ゲームプログラマーとしての仕事を探しています。私の連絡情報 :<router-link to="/contact"> 連絡情報</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Itmam" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>