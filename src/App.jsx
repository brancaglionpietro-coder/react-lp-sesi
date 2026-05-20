import s from './App.module.css'

import a from '/casa2.png'
import b from '/679720.png'
import c from '/botao-de-jogo-redondo.png'
import d from '/contact-icon.webp'
import a1 from '/bmwM3.webp'
import b2 from '/bmwserie4.webp'
import c3 from '/bmwX6.webp'

function App() {

    const navTo = (id) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <>
            <nav>
                <span className={s.navItems} onclick={() => navTo("s1")}>
                    <img src={a} alt="Início" width="60px" />
                    <a href='#s1' className={s.navWords} >Início</a>
                </span>
                <span className={s.navItems} onclick={() => navTo("s2")}>
                    <img src={b} alt="Carros" width="20px" />
                    <a href='#s2' className={s.navWords} >Carros</a>
                </span>
                <span className={s.navItems} onclick={() => navTo("s3")}>
                    <img src={c} alt="vid" width="20px" />
                    <a href='#s3' className={s.navWords} >Vídeos</a>
                </span>
                <span className={s.navItems} onclick={() => navTo("s4")}>
                    <img src={d} alt="cont" width="20px" />
                    <a href='#s4' className={s.navWords} >Contatos</a>
                </span>
            </nav>
            <main>
                <section className={s.s1} id="s1">
                    <h1>BMW</h1>
                    <h2>Sheer Driving Pleasure</h2>
                </section>
                <section className={s.s2} id="s2">
                    <div className={s.card}>
                        <img width="300px" height="auto" src={a1} alt="" />
                        <div>
                            <h4>BMW M3</h4>
                            <p>Potência que arrepia, presença que domina. A BMW M3 não passa despercebida — nasceu para acelerar corações e deixar qualquer reta pequena.</p>
                        </div>
                    </div>
                    <div className={s.card}>
                        <img width="300px" height="auto" src={b2} alt="" />
                        <div>
                            <h4>BMW Série 4</h4>
                            <p>Elegância agressiva em cada detalhe. A BMW Série 4 combina esportividade e sofisticação como poucas conseguem.</p>
                        </div>
                    </div>
                    <div className={s.card}>
                        <img width="300px" height="auto" src={c3} alt="" />
                        <div>
                            <h4>BMW X6</h4>
                            <p>Imponente por natureza, luxuosa por essência. A BMW X6 entrega conforto, força e presença em qualquer cenário.</p>
                        </div>
                    </div>

                </section>
                <section className={s.s3} id="s3">
                    <iframe width="560" height="315" className={s.vid} src="https://www.youtube.com/embed/l61OVd4v9d4?si=lBXGXC6tMPDpyKjS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
                <section className={s.s4} id="s4">
                    <h3>CONTATOS</h3>
                    <div className={s.formulario}>
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" placeholder="Digite seu nome" />
                        <label for="assunto">Mensagem:</label>
                        <textarea id="assunto" placeholder="Digite uma mensagem"></textarea>
                        <button onclick="enviar()">ENVIAR</button>
                    </div>
                </section>
            </main>
            <footer>
                <a href="https://www.facebook.com/" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                    <i class="fa-brands fa-square-linkedin"></i>
                </a>
            </footer>
        </>
    )
}

export default App