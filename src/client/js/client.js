import React from 'react/addons';

var NewsFeed = require('../../app/components/newsFeed');
var LastActivities = require('../../app/components/lastActivities');
var ProfilStats = require('../../app/components/profilStats');


class App extends React.Component {

  render () {
      var h = $( window ).height();
      var finalH = h - 70;
      var divStyle = {
        height: finalH + 'px !important'
      };
      return (
        <div>
          <header>
            <div className="nav-logo">
              <div className="nav-logo-content">
                  <a href="#"><img src="../../../ressources/img/cintre.png" alt="" /><span>&nbsp;&nbsp;FakeBook</span></a>
              </div>
            </div>
            <div className="nav-search">
              <div className="nav-search-content">
                  <input type="search" type="text" placeholder="Find people to follow ..." autoCapitalize="off" autoCorrect="off" autoComplete="off"/><i className="fa fa-search search-icon"></i>
              </div>
            </div>
            <div className="nav-profile">
                <span className="notif-icon"><i className="fa fa-flag"></i></span>
                <span className="badges-notif-icon">42</span>
                <div className="nav-profile-name">
                    <i className="fa fa-circle" style={{color: 'rgb(215, 100, 190)'}} ></i>&nbsp;&nbsp;<span>SandraModel</span>
                </div>
                <div className="nav-profile-picture">
                  <div className="nav-profile-picture-content" style={{backgroundImage: "url('../../../ressources/img/women_model.png')"}} ></div>
                </div>
            </div>
          </header>
          <div className="left-container">
            <div className="left-container-divider"></div>
            <div className="profil-menu">
                <div className="profil-picture">
                  <div className="profil-picture-content" style={{backgroundImage: "url('../../../ressources/img/women_model.png')"}}></div>
                </div>
                <div className="profil-menu-sep"></div>
                <div className="profil-info">
                    <div className="profil-info-personnal">
                        <i className="fa fa-circle" style={{color: 'rgb(215, 100, 190)'}}></i>&nbsp;Sandra Model<br/>
                        <span className="profil-info-personnal-age">28 ans</span>
                    </div>
                    <div className="profil-info-description">
                        <p>
                          A revealing, no-holds-barred portrait of the legendary
                          Eileen Ford—the entrepreneur who transformed the business
                           of modeling and helped invent the celebrity supermodel.
                        </p>
                        <i className="fa fa-map-marker"></i>&nbsp;&nbsp;Paris, France<br/><br/>
                        <a href="#"><i className="fa fa-facebook icon-contact"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#"><i className="fa fa-twitter icon-contact"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="#"><i className="fa fa-instagram icon-contact"></i></a><br/>&nbsp;
                        <div className="profil-follow-button">
                            <div className="profil-follow-button-content">
                              Follow
                            </div>
                        </div>
                    </div>
                    <ProfilStats />
                    <LastActivities />
                </div>
              </div>
          </div>
          <div className="middle-container">
              <NewsFeed />
          </div>
          <div className="right-container">
            <div className="trends-menu">
              <div className="trends-menu-title">
                BRANDS OF THE <span className="trends-menu-title-period">WEEK</span>
              </div>
              <div className="trends-menu-list">
                <div className="trends-menu-list-content">
                    <a href="#">#Carhartt</a>
                </div>
                <div className="trends-menu-list-content">
                    <a href="#">#Nike</a>
                </div>
                <div className="trends-menu-list-content">
                    <a href="#">#PfFlyers</a>
                </div>
                <div className="trends-menu-list-content">
                    <a href="#">#Levis</a>
                </div>
                <div className="trends-menu-list-content">
                    <a href="#">#Jordan</a>
                </div>
                <div className="trends-menu-list-content">
                    <a href="#">#Lacoste</a>
                </div>
                <div className="trends-menu-list-content">
                    <a href="#">#Balmain</a>
                </div>
                <div className="trends-menu-list-content">
                    <a href="#">#Zara</a>
                </div>
                <div className="trends-menu-list-content">
                    <a href="#">#H&M</a>
                </div>
                <div className="trends-menu-list-content">
                    <a href="#">#Only</a>
                </div>
              </div>
              </div>
              <div className="suggestions-menu">
              <div className="suggestions-menu-title">
                FOLLOW MORE PEOPLE
              </div>
              <div className="suggestions-menu-list">
                <div className="suggestions-menu-list-item">
                    <div className="suggestions-picture" style={{backgroundImage: "url('../../../ressources/img/men_model.png')"}} ></div>
                    <div className="suggestions-info">
                      <i className="fa fa-circle" style={{color: 'rgb(28, 122, 182)', fontSize:10 + 'px'}}></i>&nbsp;<span className="suggestions-name">ChrisHijo</span><br/>
                      <small className="suggestions-place"><i className="fa fa-map-marker"></i>&nbsp;Paris, France</small>
                    </div>
                    <div className="suggestions-add">
                        <div className="suggestions-add-button no-select">
                            +
                        </div>
                    </div>
                </div>
                <div className="suggestions-menu-list-item">
                    <div className="suggestions-picture" style={{backgroundImage: "url('../../../ressources/img/men_model.png')"}}></div>
                    <div className="suggestions-info">
                      <i className="fa fa-circle" style={{color: 'rgb(28, 122, 182)', fontSize:10 + 'px'}}></i>&nbsp;<span className="suggestions-name">JeanKhar</span><br/>
                      <small className="suggestions-place"><i className="fa fa-map-marker"></i>&nbsp;Paris, France</small>
                    </div>
                    <div className="suggestions-add">
                        <div className="suggestions-add-button no-select">
                            +
                        </div>
                    </div>
                </div>
                <div className="suggestions-menu-list-item">
                    <div className="suggestions-picture" style={{backgroundImage: "url('../../../ressources/img/men_model.png')"}}></div>
                    <div className="suggestions-info">
                      <i className="fa fa-circle" style={{color: 'rgb(28, 122, 182)', fontSize:10 + 'px'}}></i>&nbsp;<span className="suggestions-name">JordanSyl</span><br/>
                      <small className="suggestions-place"><i className="fa fa-map-marker"></i>&nbsp;Paris, France</small>
                    </div>
                    <div className="suggestions-add">
                        <div className="suggestions-add-button no-select">
                            +
                        </div>
                    </div>
                </div>
                <div className="suggestions-menu-list-item">
                    <div className="suggestions-picture" style={{backgroundImage: "url('../../../ressources/img/men_model.png')"}}></div>
                    <div className="suggestions-info">
                      <i className="fa fa-circle" style={{color: 'rgb(28, 122, 182)', fontSize:10 + 'px'}}></i>&nbsp;<span className="suggestions-name">RodolpheClac</span><br/>
                      <small className="suggestions-place"><i className="fa fa-map-marker"></i>&nbsp;Paris, France</small>
                    </div>
                    <div className="suggestions-add">
                        <div className="suggestions-add-button no-select">
                            +
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

React.render(<App />, document.getElementById('content'));

export default App;
