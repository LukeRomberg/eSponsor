
const gamersData = [
  {
    id: 1,
    name: 'Dillon Rizzo',
    game: 'Rocket League',
    gamer_tag: 'Rizzo',
    platform: 'PC',
    picture: 'https://pbs.twimg.com/profile_images/930561141985759233/CEU-83B3_400x400.jpg',
    social: [{
      platform: 'YouTube',
      link: 'https://www.youtube.com/user/xRizzo00'
    },{
      platform: 'Twitter',
      link: 'https://twitter.com/rizzo_tv?lang=en',
    }],
    accomplishments: [{
      id: 1,
      name: 'ELEAGUE Cup: Rocket League',
      description: '1st place on team G2 with teammates Kronovi and JKnapps.',
    },
    {
      id: 2,
      name: 'RLCS Season 4 - Finals',
      description: '4th place on team G2 with teammates Kronovi and JKnapps',
    }],
  },
  {
    id: 2,
    name: 'Emiliano Benny',
    game: 'Rocket League',
    gamer_tag: 'Sizz',
    platform: 'PC',
    picture: 'https://pbs.twimg.com/profile_images/873752156611813377/KUQEJCa0_400x400.jpg',
    social: [{
      platform: 'YouTube',
      link: 'https://www.youtube.com/channel/UCgmglzn2eDI53mCRii-MgpA'
    },{
      platform: 'Twitter',
      link: 'https://twitter.com/sizzdoe?lang=en',
    }],
    accomplishments: [{
      id: 1,
      name: 'RLCS Season 4 - North America',
      description: '5th place on team Ghost with teammates Matt and Insolences',
    },{
      id: 2,
      name: 'FACEIT X Games Rocket League Invitational',
      description: '5th place on team Ghost with teammates Matt and Insolences',
    }],
  },
  {
    id: 3,
    name: 'Courant Alexandre',
    game: 'Rocket League',
    gamer_tag: 'Kaydop',
    platform: 'PC',
    picture: 'https://pbs.twimg.com/profile_images/934678919927693312/8nMymJwA_400x400.jpg',
    social: [{
      platform: 'Twitch',
      link: 'https://www.twitch.tv/kaydop'
    },{
      platform: 'Twitter',
      link: 'https://twitter.com/gfe_kaydop?lang=en'
    }],
    accomplishments: [{
      id: 1 ,
      name: 'ELEAGUE Cup: Rocket League',
      description: '2nd place on team Gale Force eSports with teammates Turbopolsa and ViolentPanda.'
    },{
      id: 2,
      name: 'RLCS Season 4 - Finals',
      description: '1st place on team Gale Force eSports with teammates Turbopolsa and ViolentPanda.'
    }],
  },
]

module.exports = {
  gamersData
}
