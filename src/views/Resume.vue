<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      <br />こんにちは
      私はサーバーエンジニアとして、3年間にわたりゲーム開発の現場でプログラミングに従事してきました。PHPやC++といった言語だけでなく、LaravelやKubernetesなどの最新技術にも精通し、パフォーマンスと安定性を重視した開発に取り組んできました。
      一方で、プレイヤーの体験をより直接的に設計する「ゲームデザイン」にも関心を持っており、今後はこれまでの技術的なバックグラウンドを活かしつつ、企画段階からゲーム作りに関わっていきたいと考えています。チームで協力し、品質の高いプロダクトを追求する姿勢を大切にしながら、貴社に貢献していきたいと思っております。 
      <br />
      <router-link to="/contact">連絡先</router-link>.
      <br />
      <br />ゲーム以外にも、アニメ、本、映画、音楽、サッカーに情熱を注いでいます。

      <div style="margin-top:20px; margin-bottom:20px;">
        <!-- <a class="download-link" href="d/Bhuiyan_Itmam_Hasan_CV.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download English Resume as PDF </a> -->
        <a class="download-link" href="d/HasanBhuiyanItmam履歴書.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i>履歴書</a>
        <a class="download-link" href="d/HasanBhuiyanItmam職務経歴書.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i>職務経歴書</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of Itmam" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>実務経験</h2>
      <h3>ソレイユ株式会社</h3>
      <h4>2022年10月～2022年11月</h4>
      <div>
       「自社ゲーム開発」UI<br/>
       自社ゲームのサーバー開発<br/>
      </div>
      <div class="tech-stack">Laravel、Vue.js, PHP、JavaScript、Nginx、Kubernetes, MySQL、Redis、MiniO、ElasticSearch、Prometheus、Grafana、GitLab、Docker</div>

      <h3>株式会社ILC-Technology</h3>
      <h4>2020年7月～2022年09月</h4>
      <div>
        Kyushu Corp.出席システム<br />
        SIPを使用したテレフォニーシステム（PBX：Asterisk。サーバー：Kamailio、Drachtio、その他：Node.js）<br />
        Greenhouse AGV（自動誘導車両）
      </div>
      <div class="tech-stack">Asterisk、JavaScript、Node.js、SQL、C、Python</div>

      <h3>株式会社Nelsite</h3>
      <h4>2020年2月～2020年06月</h4>
      <div>
        FAQ管理システムのバックエンドプログラミング
      </div>
      <div class="tech-stack">Laravel、PHP、Bootstap、HTML、CSS、SQL</div>

      
      <h2>スキル</h2>

      <div class="skill-set">
        <h3>Operating System</h3>
        <SkillRate name="Windows" :rate="5" />
        <SkillRate name="Linux(Ubuntu)" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>プログラミング言語</h3>
        <SkillRate name="PHP" :rate="5" />
        <SkillRate name="C++" :rate="5" />
        <SkillRate name="SQL" :rate="5" />
        <SkillRate name="Python" :rate="5" />
        <SkillRate name="Java" :rate="5" />
        <SkillRate name="Golang" :rate="5" />
        <SkillRate name="JavaScript" :rate="5" />
        <SkillRate name="Shell" :rate="5" />
       
      </div>

      <div class="skill-set">
        <h3>ミドルウェア/サーバー</h3>
        <SkillRate name="Apache" :rate="3" />
        <SkillRate name="Nginx" :rate="1" />
      </div>

      <div class="skill-set">
        <h3>フレームワーク / エンジン</h3>
        <SkillRate name="Unreal Engine 5" :rate="3" />
        <SkillRate name="Unreal Engine 4" :rate="3" />
        <SkillRate name="Laravel" :rate="3" />
        <SkillRate name="Unity" :rate="1" />
      </div>

      <div class="skill-set">
        <h3>Database</h3>
        <SkillRate name="MySQL" :rate="1" />
        <SkillRate name="Redis" :rate="1" />
         <SkillRate name="Postgres" :rate="1" />
      </div>
      <div style="clear:both" />

      <div class="skill-set">
        <h3>インフラ / CI/CD</h3>
        <SkillRate name="Kuebernetes" :rate="1" />
        <SkillRate name="GitLab" :rate="1" />
        <SkillRate name="Docker" :rate="2" />
        <SkillRate name="Prometheus" :rate="1" />
        <SkillRate name="Grafana" :rate="1" />
      </div>
      <div style="clear:both" />

      <div class="skill-set">
        <h3>バージョン管理</h3>
        <SkillRate name="Perforce" :rate="1" />
        <SkillRate name="Git" :rate="1" />
      </div>
      <div style="clear:both" />

      <h2>教育</h2>

      <h3>科学の学士号-2019</h3>
      <h4>コンピューターサイエンス＆エンジニアリング</h4>
      <div>Brac大学でコンピューターサイエンス＆エンジニアリングの理学士号を取得</div>

      <h2>言語</h2>

      <h3>ベンガリ</h3>
      <div>ネイティブ</div>

      <h3>英語</h3>
      <div>Toefl 99/120</div>

      <h3>日本語</h3>
      <div>N3</div>


      <h2>仕事以外に</h2>
      <div>
        <h3>私❤️ビデオゲーム</h3>
        <div>私の最も好きなもののいくつかは、Age Of Empireシリーズ、Dota 2、Mortal Kombatシリーズ、Tomb Raider、Soulsシリーズ、Witcher3などです。 </div>

        <h3>私は💜アニメ</h3>
        <div>高校生の時、日本のアニメが大好きになりました。 私のお気に入りのいくつかは、ナルト、ワンピース、フェイトゼロなどです。</div>

        <h3>私は🧡Books＆Comics</h3>
        <div>私は本や漫画を読むのが大好きです。それらは世界を旅する私の方法です。 私は古典的な小説、ファンタジー、Sci-Fiなどを読むのが好きです。</div>

        <h3>私は💛映画＆テレビシリーズ</h3>
        <div>休日が多ければテレビドラマも見たいです。</div>

        <h3>私は💚スポーツ</h3>
        <div>私はクリケット、テニスのような他のスポーツと一緒にサッカーをするのが好きです。 私のお気に入りのクラブはリバプールとバルセロナです。</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>