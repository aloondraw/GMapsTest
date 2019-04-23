import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FriendsPage } from "../friends/friends";
import { MapPage } from "../map/map";
import { LoginPage } from "../login/login";
import { ForumPage } from "../forum/forum";
import { ProfilePage } from "../profile/profile";
import { SettingsPage } from "../settings/settings";
import { MatchmakingPage } from "../matchmaking/matchmaking";
import { ContactPage } from "../contact/contact";
import { AboutPage } from "../about/about";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openUrl(){ window.open('https://www.google.com/maps/d/u/0/edit?mid=1jGkwuLnQI2TL3Z9Z8CZezwppn3NyrhvY&ll=37.786047451909226%2C-81.17544247133333&z=17'); }
  openUrl2(){ window.open('https://www.google.com/maps/d/u/0/edit?mid=1jGkwuLnQI2TL3Z9Z8CZezwppn3NyrhvY&ll=37.78126575195538%2C-81.18129637099457&z=17'); }
  openUrl3(){ window.open('https://www.google.com/maps/d/u/0/edit?mid=1jGkwuLnQI2TL3Z9Z8CZezwppn3NyrhvY&ll=37.78516682833857%2C-81.30584487099458&z=17'); }

  goTo(page) {
    if(page === 'friends') {
      this.navCtrl.push(FriendsPage);
    } else if(page === 'map') {
      this.navCtrl.push(MapPage);
    } else if(page === 'forum'){
      this.navCtrl.push(ForumPage);
    } else if(page === 'profile'){
      this.navCtrl.push(ProfilePage);
    } else if(page === 'about'){
      this.navCtrl.push(AboutPage);
    } else if(page === 'contact'){
      this.navCtrl.push(ContactPage);
    } else if(page === 'matchmaking'){
      this.navCtrl.push(MatchmakingPage);
    } else if(page === 'settings'){
      this.navCtrl.push(SettingsPage);
    }
  }

}
