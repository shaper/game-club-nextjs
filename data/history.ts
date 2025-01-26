export type Game = {
  name: string;
  url?: string;
  steamAppId?: string;
  coverArt?: string;
  playtime?: number;
}

export type GameList = {
  [key: string]: Game;
}

export const gameList: GameList = {
  night_in_the_woods: {
    name: "Night in the Woods",
    steamAppId: '481510',
    playtime: 9,
  },
  kingdom_new_lands: {
    name: "Kingdom: New Lands",
    steamAppId: '496300',
    playtime: 9.5,
  },
  moonlighter: {
    name: "Moonlighter",
    steamAppId: '606150',
    playtime: 13.5,
  },
  return_of_the_obra_dinn: {
    name: "Return of the Obra Dinn",
    steamAppId: '653530',
    playtime: 8,
  },
  gris: {
    name: "Gris",
    steamAppId: '683320',
    playtime: 5,
  },
  aviary_attorney: {
    name: "Aviary Attorney",
    steamAppId: '384630',
    playtime: 5,
  },
  hypnospace_outlaw: {
    name: "Hypnospace Outlaw",
    steamAppId: '844590',
    playtime: 8,
  },
  transistor: {
    name: "Transistor",
    steamAppId: '237930',
    playtime: 8,
  },
  streets_of_rogue: {
    name: "Streets of Rogue",
    steamAppId: '512900',
    playtime: 10,
  },
  eliza: {
    name: "Eliza",
    steamAppId: '716500',
    playtime: 6,
  },
  disco_elysium: {
    name: "Disco Elysium",
    steamAppId: '632470',
    playtime: 30,
  },
  pokemon_sword_shield: {
    name: "Pokemon Sword/Shield",
    url: 'https://swordshield.pokemon.com/en-us/',
    coverArt: "https://images.ctfassets.net/pkeegl0voupm/4DkOZNObiim5zifjEdhdj2/c09f36f9ce5f4868ee3d0541f858817c/heroimage_square_pokemon-swsh.png",
    playtime: 25,
  },
  choice_of_robots: {
    name: "Choice of Robots",
    steamAppId: '339350',
    coverArt: "https://m.media-amazon.com/images/I/91pzi4wEAFL.png",
    playtime: 4,
  },
  life_is_strange: {
    name: "Life Is Strange",
    steamAppId: '1265920',
    playtime: 15,
  },
  a_short_hike: {
    name: "A Short Hike",
    steamAppId: '1055540',
    playtime: 2.5,
  },
  the_hex: {
    name: "The Hex",
    steamAppId: '510420',
    playtime: 6,
  },
  nineteen_eighty_x: {
    name: "198X",
    steamAppId: '1086010',
    coverArt: "https://image.api.playstation.com/vulcan/img/cfn/11307fkrpye5vBWv_z79-nUCiGMs3MENh7EzwsPyyYL8lsO8uZu5JlkSCEHFIhbEaoMVKPGl5jMZ2wp_0AA9V3Y-zw8HXRny.png",
    playtime: 2,
  },
  kentucky_route_zero: {
    name: "Kentucky Route Zero",
    steamAppId: '231200',
    playtime: 12,
  },
  beglitched: {
    name: "Beglitched",
    steamAppId: '461220',
    coverArt: "https://static-cdn.jtvnw.net/ttv-boxart/493971_IGDB-272x380.jpg",
    playtime: 6,
  },
  a_new_life: {
    name: "A New Life",
    steamAppId: '1297160',
    playtime: 1,
  },
  strawberry_cubes: {
    name: "Strawberry Cubes",
    url: 'https://lorenschmidt.itch.io/strawberrycubes'
  },
  one_shot: {
    name: "One Shot",
    steamAppId: '420530',
    playtime: 5,
  },
  quadrilateral_cowboy: {
    name: "Quadrilateral Cowboy",
    steamAppId: '240440',
    playtime: 7,
  },
  outer_wilds: {
    name: "Outer Wilds",
    steamAppId: '753640',
    playtime: 18,
  },
  paradise_killer: {
    name: "Paradise Killer",
    steamAppId: '1160220',
    playtime: 12,
  },
  townscaper: {
    name: "Townscaper",
    steamAppId: '1291340',
  },
  what_remains_of_edith_finch: {
    name: "What Remains of Edith Finch",
    steamAppId: '501300',
    playtime: 2,
  },
  the_last_campfire: {
    name: "The Last Campfire",
    steamAppId: '990630',
    playtime: 6,
  },
  hades: {
    name: "Hades",
    steamAppId: '1145360',
  },
  signs_of_the_sojourner: {
    name: "Signs of the Sojourner",
    steamAppId: '1058690',
    playtime: 5,
  },
  wide_ocean_big_jacket: {
    name: "Wide Ocean Big Jacket",
    steamAppId: '1198040',
    playtime: 2,
  },
  omori: {
    name: "Omori",
    steamAppId: '1150690',
    playtime: 30,
  },
  if_found: {
    name: "If Found...",
    steamAppId: '1041920',
    playtime: 2,
  },
  later_alligator: {
    name: "Later Alligator",
    steamAppId: '966320',
    playtime: 5,
  },
  call_of_the_sea: {
    name: "Call of the Sea",
    steamAppId: '1042490',
    playtime: 5,
  },
  cloudpunk: {
    name: "Cloudpunk",
    steamAppId: '746850',
    playtime: 10,
  },
  ynglet: {
    name: "Ynglet",
    url: 'https://www.ynglet.com/',
    steamAppId: '1015920',
    playtime: 1.5,
  },
  astalon: {
    name: "Astalon",
    url: 'https://astalon.dangenentertainment.com/',
    steamAppId: '1046400',
    playtime: 14,
  },
  chicory: {
    name: "Chicory",
    url: 'https://chicorygame.com/',
    steamAppId: '1123450',
    playtime: 20,
  },
  umurangi_generation: {
    name: "Umurangi Generation",
    steamAppId: '1223500',
    playtime: 3,
  },
  psychonauts_2: {
    name: "Psychonauts 2",
    steamAppId: '607080',
    playtime: 15,
  },
  sable: {
    name: "Sable",
    steamAppId: '757310',
    playtime: 8,
  },
  inscryption: {
    name: "Inscryption",
    steamAppId: '1092790',
    playtime: 11,
  },
  unpacking: {
    name: "Unpacking",
    steamAppId: '1135690',
    playtime: 5,
  },
  sunshine_heavy_industries: {
    name: "Sunshine Heavy Industries",
    steamAppId: '1542810',
  },
  loop_hero: {
    name: "Loop Hero",
    steamAppId: '1282730',
    playtime: 40,
  },
  life_is_strange_true_colors: {
    name: "Life Is Strange: True Colors",
    steamAppId: '936790',
    playtime: 12,
  },
  perfect_tides: {
    name: "Perfect Tides",
    url: 'https://perfect-tides.com/',
    steamAppId: '1172800',
    playtime: 8,
  },
  tunic: {
    name: "TUNIC",
    steamAppId: '553420',
    playtime: 15,
  },
  citizen_sleeper: {
    name: "Citizen Sleeper",
    steamAppId: '1578650',
    playtime: 7,
  },
  norco: {
    name: "NORCO",
    url: 'https://norcogame.com/',
    steamAppId: '1221250',
    playtime: 10,
  },
  fishing_vacation: {
    name: "Fishing Vacation",
    steamAppId: '1918300',
    playtime: 1,
  },
  stray: {
    name: "Stray",
    url: 'https://stray.game/',
    steamAppId: '1332010',
    playtime: 6,
  },
  the_pathless: {
    name: "The Pathless",
    steamAppId: '1492680',
    playtime: 10,
  },
  last_call_bbs: {
    name: "Last Call BBS",
    steamAppId: '1511780',
    playtime: 40,
  },
  immortality: {
    name: "Immortality",
    steamAppId: '1350200',
    playtime: 6,
  },
  potionomics: {
    name: "Potionomics",
    steamAppId: '1874490',
    playtime: 20,
  },
  return_to_monkey_island: {
    name: "Return to Monkey Island",
    url: 'https://returntomonkeyisland.com/',
    steamAppId: '2060130',
    playtime: 12,
  },
  signalis: {
    name: "Signalis",
    url: 'https://rose-engine.org/signalis/',
    steamAppId: '1262350',
    playtime: 10,
  },
  melatonin: {
    name: "Melatonin",
    steamAppId: '1585220',
    playtime: 4,
  },
  pentiment: {
    name: "Pentiment",
    url: 'https://pentiment.obsidian.net/',
    steamAppId: '1205520',
    playtime: 15,
  },
  season_a_letter_to_the_future: {
    name: "Season: A letter to the future",
    steamAppId: '695330',
    playtime: 8,
  },
  dredge: {
    name: "Dredge",
    steamAppId: '1562430',
    playtime: 13,
  },
  the_gostak: {
    name: "The Gostak",
    url: 'https://iplayif.com/?story=https%3A%2F%2Fifarchive.org%2Fif-archive%2Fgames%2Fzcode%2Fgostak.z5',
  },
  citizen_sleeper_flux: {
    name: "Citizen Sleeper: Flux DLC",
    steamAppId: '1578650',
    playtime: 2,
  },
  citizen_sleeper_refuge: {
    name: "Citizen Sleeper: Refuge DLC",
    steamAppId: '1578650',
    playtime: 2,
  },
  citizen_sleeper_purge: {
    name: "Citizen Sleeper: Purge DLC",
    steamAppId: '1578650',
    playtime: 2,
  },
  tchia: {
    name: "Tchia",
    url: 'https://www.awaceb.com/tchia',
    steamAppId: '1496590',
    playtime: 9,
  },
  planet_of_lana: {
    name: "Planet of Lana",
    steamAppId: '1608230',
    playtime: 4.5,
  },
  dordogne: {
    name: "Dordogne",
    steamAppId: '1272840',
    playtime: 3.5,
  },
  viewfinder: {
    name: "Viewfinder",
    url: "https://thunderfulgames.com/games/viewfinder/",
    steamAppId: '1382070',
    playtime: 4.5,
  },
  desta: {
    name: "Desta",
    url: "https://www.destagame.com/",
    steamAppId: '2009650',
    playtime: 3,
  },
  the_cosmic_wheel_sisterhood: {
    name: "The Cosmic Wheel Sisterhood",
    steamAppId: '1340480',
    playtime: 8,
  },
  tartarus_key: {
    name: "The Tartarus Key",
    steamAppId: '1431850',
    playtime: 4,
  },
  gordy_monster_moon: {
    name: "Gordy and the Monster Moon",
    steamAppId: '642020',
    playtime: 2,
  },
  chants_of_senaar: {
    name: "Chants of Senaar",
    url: 'https://www.rundisc.io/chants-of-sennaar/',
    steamAppId: '1931770',
    playtime: 9,
  },
  jusant: {
    name: "Jusant",
    url: 'https://dont-nod.com/en/games/jusant/',
    steamAppId: '1977170',
    playtime: 4,
  },
  cocoon: {
    name: "Cocoon",
    url: 'https://www.cocoongame.com/',
    steamAppId: '1497440',
    playtime: 6,
  },
  a_highland_song: {
    name: "A Highland Song",
    url: 'https://www.inklestudios.com/a-highland-song/',
    steamAppId: '1240060',
    playtime: 6,
  },
  prince_of_persia_lost_crown: {
    name: "Prince of Persia: Lost Crown",
    url: 'https://www.ubisoft.com/en-us/game/prince-of-persia/the-lost-crown',
    coverArt: "https://cdn1.epicgames.com/offer/22600f09e936468c8ecfc22b5eac7d7c/EGST_StorePortrait_1200x1600_1200x1600-54fe39c69e335bbe2c071ff53cfa0685",
    playtime: 16,
  },
  in_stars_and_time: {
    name: "In Stars and Time",
    url: 'https://www.instarsandtime.com/',
    steamAppId: '1677310',
    playtime: 20,
  },
  pepper_grinder: {
    name: "Pepper Grinder",
    url: 'https://www.devolverdigital.com/games/pepper-grinder',
    steamAppId: '2076580',
    playtime: 5,
  },
  venba: {
    name: "Venba",
    url: 'https://venbagame.com/',
    steamAppId: '1491670',
    playtime: 1.5,
  },
  cryptmaster: {
    name: "Cryptmaster",
    url: 'https://store.steampowered.com/app/1885110/Cryptmaster/',
    steamAppId: '1885110',
    playtime: 10,
  },
  slay_the_princess: {
    name: "Slay the Princess",
    url: 'https://store.steampowered.com/app/1989270/Slay_the_Princess/',
    steamAppId: '1989270',
    playtime: 5,
  },
  duck_detective: {
    name: "Duck Detective: The Secret Salami",
    url: 'https://store.steampowered.com/app/2637990/Duck_Detective_The_Secret_Salami/',
    steamAppId: '2637990',
    playtime: 3,
  },
  dungeons_of_hinterberg: {
    name: "Dungeons of Hinterberg",
    url: 'https://store.steampowered.com/app/1983260/Dungeons_of_Hinterberg/',
    steamAppId: '1983260',
    playtime: 20,
  },
  tactical_breach_wizards: {
    name: "Tactical Breach Wizards",
    url: 'https://store.steampowered.com/app/1043810/Tactical_Breach_Wizards/',
    steamAppId: '1043810',
    playtime: 14,
  },
  arco: {
    name: "Arco",
    url: 'https://store.steampowered.com/app/2366970/Arco/',
    steamAppId: '2366970',
    playtime: 10,
  },
  one_k_resist: {
    name: "1000x Resist",
    url: 'https://store.steampowered.com/app/1675830/1000xRESIST/',
    steamAppId: '1675830',
    playtime: 11,
  },
  rise_of_the_golden_idol: {
    name: "The Rise of the Golden Idol",
    url: 'https://store.steampowered.com/app/2716400/The_Rise_of_the_Golden_Idol/',
    steamAppId: '2716400',
    playtime: 11,
  },
  lorelei_and_the_laser_eyes: {
    name: "Lorelei and the Laser Eyes",
    url: 'https://store.steampowered.com/app/2008920/Lorelei_and_the_Laser_Eyes/',
    steamAppId: '2008920',
    playtime: 16,
  }
}

export type GameKey = keyof typeof gameList;

export type Meeting = {
  date: string;
  title: string;
  location?: string;
  games: GameKey[];
}

export const meetings: Meeting[] = [
  {
    "date": "2018-03-30",
    "title": "Video Game Club 1.0",
    "location": "Hinodeya Ramen",
    "games": ["night_in_the_woods"]
  },
  {
    "date": "2018-10-12",
    "title": "Video Game Club 2.0",
    "location": "Thai Idea",
    "games": ["kingdom_new_lands"]
  },
  {
    "date": "2018-11-16",
    "title": "Video Game Club 3.0",
    "location": "Walter's",
    "games": ["moonlighter"]
  },
  {
    "date": "2018-12-14",
    "title": "Video Game Club 4.0",
    "location": "Walter's",
    "games": ["return_of_the_obra_dinn"]
  },
  {
    "date": "2019-02-01",
    "title": "Video Game Club 5.0",
    "location": "City Beer Store",
    "games": ["gris"]
  },
  {
    "date": "2019-04-05",
    "title": "Video Game Club 6.0",
    "location": "Orenchi Beyond",
    "games": ["aviary_attorney"]
  },
  {
    "date": "2019-06-27",
    "title": "Video Game Club 7.0",
    "location": "Fig and Thistle",
    "games": ["hypnospace_outlaw"]
  },
  {
    "date": "2019-08-07",
    "title": "Video Game Club 8.0",
    "location": "Petit Marlowe",
    "games": ["transistor"]
  },
  {
    "date": "2019-09-26",
    "title": "Video Game Club 9.0",
    "location": "The Riddler",
    "games": ["streets_of_rogue"]
  },
  {
    "date": "2019-10-25",
    "title": "Video Game Club 11.0",
    "location": "Sociale",
    "games": ["eliza"]
  },
  {
    "date": "2019-12-13",
    "title": "Video Game Club 12.0",
    "location": "Nojo Ramen Tavern",
    "games": ["disco_elysium"]
  },
  {
    "date": "2020-01-13",
    "title": "Video Game Club 13.0",
    "location": "Great Gold",
    "games": ["pokemon_sword_shield", "choice_of_robots"]
  },
  {
    "date": "2020-03-12",
    "title": "Video Game Club 14.0",
    "location": "Delfina",
    "games": ["life_is_strange", "a_short_hike"]
  },
  {
    "date": "2020-04-24",
    "title": "Video Game Club 15.0",
    "games": ["the_hex", "nineteen_eighty_x"]
  },
  {
    "date": "2020-06-19",
    "title": "Video Game Club 16.0",
    "games": ["kentucky_route_zero"]
  },
  {
    "date": "2020-08-07",
    "title": "Video Game Club 17.0",
    "games": [
      "beglitched",
      "a_new_life",
      "strawberry_cubes",
      "one_shot",
      "quadrilateral_cowboy"
    ],
  },
  {
    "date": "2020-09-11",
    "title": "Video Game Club 18.0",
    "games": ["outer_wilds"]
  },
  {
    "date": "2020-11-06",
    "title": "Video Game Club 19.0",
    "games": ["paradise_killer", "townscaper"]
  },
  {
    "date": "2020-12-04",
    "title": "Video Game Club 20.0",
    "games": ["what_remains_of_edith_finch", "the_last_campfire"]
  },
  {
    "date": "2021-01-15",
    "title": "Video Game Club 21.0",
    "games": ["hades"]
  },
  {
    "date": "2021-02-26",
    "title": "Video Game Club 22.0",
    "games": ["signs_of_the_sojourner", "wide_ocean_big_jacket"]
  },
  {
    "date": "2021-04-09",
    "title": "Video Game Club 23.0",
    "games": ["omori", "if_found"]
  },
  {
    "date": "2021-05-14",
    "title": "Video Game Club 24.0",
    "games": ["later_alligator", "call_of_the_sea"]
  },
  {
    "date": "2021-06-11",
    "title": "Video Game Club 25.0",
    "games": ["cloudpunk"]
  },
  {
    "date": "2021-07-16",
    "title": "Video Game Club 26.0",
    "games": ["ynglet", "astalon"]
  },
  {
    "date": "2021-08-22",
    "title": "Video Game Club 27.0",
    "games": ["chicory"]
  },
  {
    "date": "2021-09-12",
    "title": "Video Game Club 28.0",
    "games": ["umurangi_generation"]
  },
  {
    "date": "2021-10-13",
    "title": "Video Game Club 29.0",
    "location": "Poesia",
    "games": ["psychonauts_2"]
  },
  {
    "date": "2021-11-14",
    "title": "Video Game Club 30.0",
    "games": ["sable"]
  },
  {
    "date": "2021-12-05",
    "title": "Video Game Club 31.0",
    "games": ["inscryption", "unpacking"]
  },
  {
    "date": "2022-01-02",
    "title": "Video Game Club 32.0",
    "games": ["sunshine_heavy_industries"]
  },
  {
    "date": "2022-01-30",
    "title": "Video Game Club 33.0",
    "games": ["loop_hero"]
  },
  {
    "date": "2022-02-27",
    "title": "Video Game Club 34.0",
    "games": ["life_is_strange_true_colors"]
  },
  {
    "date": "2022-03-27",
    "title": "Video Game Club 35.0",
    "games": ["perfect_tides"]
  },
  {
    "date": "2022-05-08",
    "title": "Video Game Club 36.0",
    "games": ["tunic"]
  },
  {
    "date": "2022-06-12",
    "title": "Video Game Club 37.0",
    "games": ["citizen_sleeper"]
  },
  {
    "date": "2022-07-17",
    "title": "Video Game Club 38.0",
    "games": ["norco", "fishing_vacation"]
  },
  {
    "date": "2022-08-21",
    "title": "Video Game Club 39.0",
    "games": ["stray"]
  },
  {
    "date": "2022-10-02",
    "title": "Video Game Club 40.0",
    "games": ["the_pathless", "last_call_bbs"]
  },
  {
    "date": "2022-11-06",
    "title": "Video Game Club 41.0",
    "games": ["immortality"]
  },
  {
    "date": "2022-12-04",
    "title": "Video Game Club 42.0",
    "games": ["potionomics"]
  },
  {
    "date": "2023-01-08",
    "title": "Video Game Club 43.0",
    "games": ["return_to_monkey_island"]
  },
  {
    "date": "2023-02-05",
    "title": "Video Game Club 44.0",
    "games": ["signalis", "melatonin"]
  },
  {
    "date": "2023-03-12",
    "title": "Video Game Club 45.0",
    "games": ["pentiment"]
  },
  {
    "date": "2023-04-16",
    "title": "Video Game Club 46.0",
    "games": ["season_a_letter_to_the_future"]
  },
  {
    "date": "2023-05-14",
    "title": "Video Game Club 47.0",
    "games": ["dredge", "the_gostak"],
  },
  {
    "date": "2023-06-25",
    "title": "Video Game Club 48.0",
    "games": ["tchia", "citizen_sleeper_flux", "citizen_sleeper_refuge", "citizen_sleeper_purge"]
  },
  {
    "date": "2023-07-23",
    "title": "Video Game Club 49.0",
    "games": ["planet_of_lana", "dordogne"]
  },
  {
    "date": "2023-09-03",
    "title": "Video Game Club 50.0",
    "games": ["viewfinder", "desta"]
  },
  {
    "date": "2023-10-01",
    "title": "Video Game Club 51.0",
    "games": ["the_cosmic_wheel_sisterhood"]
  },
  {
    "date": "2023-10-29",
    "title": "Video Game Club 52.0",
    "games": ["tartarus_key", "gordy_monster_moon"]
  },
  {
    "date": "2023-11-19",
    "title": "Video Game Club 53.0",
    "games": ["chants_of_senaar"]
  },
  {
    "date": "2024-01-07",
    "title": "Video Game Club 54.0",
    "games": ["jusant", "cocoon"]
  },
  {
    "date": "2024-01-28",
    "title": "Video Game Club 55.0",
    "games": ["a_highland_song"]
  },
  {
    "date": "2024-03-03",
    "title": "Video Game Club 56.0",
    "games": ["prince_of_persia_lost_crown"]
  },
  {
    "date": "2024-04-14",
    "title": "Video Game Club 57.0",
    "games": ["in_stars_and_time"]
  },
  {
    "date": "2024-05-19",
    "title": "Video Game Club 58.0",
    "games": ["pepper_grinder", "venba"]
  },
  {
    "date": "2024-06-23",
    "title": "Video Game Club 59.0",
    "games": ["cryptmaster"]
  },
  {
    "date": "2024-07-21",
    "title": "Video Game Club 60.0",
    "games": ["slay_the_princess", "duck_detective"]
  },
  {
    "date": "2024-08-23",
    "title": "Video Game Club 61.0",
    "games": ["dungeons_of_hinterberg"]
  },
  {
    "date": "2024-10-06",
    "title": "Video Game Club 62.0",
    "games": ["tactical_breach_wizards"]
  },
  {
    "date": "2024-11-03",
    "title": "Video Game Club 63.0",
    "games": ["arco"]
  },
  {
    "date": "2024-12-08",
    "title": "Video Game Club 64.0",
    "games": ["one_k_resist"]
  },
  {
    "date": "2025-01-12",
    "title": "Video Game Club 65.0",
    "games": ["rise_of_the_golden_idol"]
  },
  {
    "date": "2025-02-23",
    "title": "Video Game Club 66.0",
    "games": ["lorelei_and_the_laser_eyes"]
  }
];
