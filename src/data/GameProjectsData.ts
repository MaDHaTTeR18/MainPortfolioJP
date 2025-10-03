import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Attack On Lunaris", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
     <strong>Attack On Lunaris</strong> はUnrealEngineで作ったFPSゲームです。このゲームはUnrealEngineで作った私の初めてのゲームです。

     <div class="notice">
        デモビデオ用 <a href="https://youtu.be/B_nXoQusTYE" target="_blank">Youtube.com</a>.
        ソースコード <a href="https://github.com/MaDHaTTeR18/Attack-On-Lunaris" target="_blank">GitHub</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>アクション</li>
        <li>物語</li>
        <li>サウンドトラック</li>
        <li>UnrealEngine</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/Lunaris/Pic-1.png" alt="Attack On Lunaris Screenshot" />
        <img class="phone-screenshot" src="img/projects/Lunaris/Pic-2.png" alt="Attack On Lunaris Screenshot" />
    </div>
    `, "#23bd69", true),
   
    new ProjectData("project-3", "Pong", "img/projects/Pong/Pic-1.png", `
    <div class="paragraph">
        <strong>Pong</strong> 史上初のビデオゲームでした。 c++とraylibライブラリを使用してオーディオを使用してゲームを再作成しました。
    </div>
    <div class="notice">
        ソースコード <a href="https://github.com/MaDHaTTeR18/Pong" target="_blank">GitHub</a>.
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>単純</li>
        <li>プログラミングを始めるのに最適な場所</li>
        </ul>
    </div>


    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Pong/Pic-2.png" alt="Pong Screenshot" />
        <img class="pc-screenshot" src="img/projects/Pong/Pic-3.png" alt="Pong Screenshot" />
    </div>
    `, "#383838"),
    new ProjectData("project-4", "Tetris", "img/projects/Tetris/Pic-1.png", `
    <div class="paragraph">
    <strong>c++で作られた世界的に有名なテトリスゲーム。</strong>
    </div>
    <div class="paragraph">
        <div class="notice">
        ソースコード <a href="https://github.com/MaDHaTTeR18/Tetris" target="_blank">Github</a>.
        </div>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>C++</li>
        </ul>
    </div>

    `, "#e80fb7"),
];