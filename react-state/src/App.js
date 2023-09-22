import React, { Component } from "react";
class App extends Component {
  constructor(props) {
          { /* les informations de la personnes */}    
    super(props);
    this.state = {
      person: {
        fullName: "Ousmane Sonko",
        bio: "Né le 15 juillet 1974 à Thiès, est un homme politique sénégalais, député à l'Assemblée nationale de 2017 à 2022 et maire de la ville de Ziguinchor depuis 2022. Il est le président du parti Patriotes africains du Sénégal pour le travail, l'éthique et la fraternité jusqu'à sa dissolution en juillet 2023",
        image: "https://gmetech.info/wp-content/uploads/2020/07/Ousmane-Sonko-slide.png",
        profession: "vérificateur fiscal et chef de Brigade de vérification fiscale"
      },
      show: false,
      interval: 0,
    };
  }
     { /* fonction du button qui permet de masquer et desmasquer les caracteristiques de la personne */}   
  toglee = () => {
    this.setState((prevent) => ({
      show: !prevent.show
    }))
  }
         { /* Mettre à jour l'intervalle toutes les 1000 ms 1 seconde */}  
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevent) => ({
        interval: prevent.interval + 1,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
      { /* recuperation des donnees de la personne avec les props */}   
    const { fullName, bio, image, profession } = this.state.person;
    return (
      <>
      { /* parti image et stylisation */}   
       <div className="flex justify-center">
                  <img className="w-[10%] " src={image} alt="" />
                </div>
           { /* caracteristiques de la personne  */} 
        <div className="flex flex-col items-center">
          {
            this.state.show && (
              <div className="flex flex-col text-center w-[25%] ">
                <div className="shadow-2xl">
                  <h1 className="text-lg font-bold">Nom:{fullName}</h1>
                  <h2 className="font-medium">{bio}</h2>
                  <h3 className="text-lg font-bold">Profession:{profession}</h3>
                </div>
              </div>
            )
          }
           { /* boutton qui permet de montrer et de masquer les infos de la personne  */} 
          <div className="text-center">
            <button className="ml-[18px]  middle none center rounded-lg bg-emerald-900 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true" onClick={this.toglee}>
              {
                this.state.show ? "Hidden" : "Show Me"
              }
            </button>
          </div>
        </div>
               { /*set interval  */} 
        <p>Time Interval Since Mount: {this.state.interval} seconds</p>
      </>
    )
  }
}
export default App;
