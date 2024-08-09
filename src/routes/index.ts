import Home from '../components/Home.vue';
import Team from '../components/Team.vue';
import PokemonInfo from '../components/PokemonInfo.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
  },
  { 
    path: '/team/:id',
    component: PokemonInfo
  },
];