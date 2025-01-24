// /assets/ervin_head.gif';
// /assets/ervin_horse.gif';
// /erwin-smith-charge.gif';
// Estilos inline para grad1 e grad2
const grad1Style = {
  background:
    "linear-gradient(to right, orange, yellow, green, cyan, blue, violet)", // Gradiente
  WebkitBackgroundClip: "text", // Suporte para gradiente no texto no Chrome/Safari
  WebkitTextFillColor: "transparent", // Torna o texto transparente para mostrar o gradiente
  fontSize: "20vw", // Tamanho da fonte grande
};

const grad2Style = {
  background:
    "linear-gradient(to right, orange, yellow, green, cyan, blue, violet)", // Gradiente
  WebkitBackgroundClip: "text", // Suporte para gradiente no texto no Chrome/Safari
  WebkitTextFillColor: "transparent", // Torna o texto transparente para mostrar o gradiente
  fontSize: "60px", // Tamanho da fonte
  lineHeight: "60px", // Altura da linha para o texto
};

function Home() {
  return (
    <div style={{ backgroundImage: `url(${"./151b5440c9.webp"})` }}>
      <img src={"/ervin_head.gif"} alt="erwin" />
      <h1 style={grad1Style}>Bom dia amante da Mikasa!</h1>
      <h1 style={grad2Style}>
        Você foi pego, não é a Mikasa, apenas a máquina Erwin Smith 😎
      </h1>
      <img src={"/ervin_horse.gif"} alt="erwin" />
      <h2>
        SASAGEYO SASAGEYO 🥳🥳🥳🎉🎉🎉🫀🫀💀⚰️😨😨😭😭🤬🤬☠️☠️👻🥳🥳🥳🎉🎉🎉
      </h2>
      <img src={"/erwin-smith-charge.gif"} alt="erwin" />
    </div>
  );
}

export default Home;
